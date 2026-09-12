import React, { createContext, useContext, useRef } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
const LearningContext = createContext(null);
// Stamp and compare study days in the learner's own timezone. Using UTC pushed an evening
// session in Canada into the next calendar day and silently broke streaks.
const localDay = date => new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
export const useLearning = () => useContext(LearningContext);
export default function LearningProvider({ children }) {
  const client = useQueryClient();
  const saves = useRef({});
  const userQuery = useQuery({ queryKey: ['accounting-user'], queryFn: () => base44.auth.me() });
  const user = userQuery.data;
  const attemptQuery = useQuery({ queryKey: ['attempts', user?.id], enabled: !!user, queryFn: () => base44.entities.LearningAttempt.filter({ created_by_id: user.id }, '-created_date', 1000) });
  const transactionQuery = useQuery({ queryKey: ['business', user?.id], enabled: !!user, queryFn: () => base44.entities.BusinessTransaction.filter({ created_by_id: user.id }, 'day', 100) });
  const progressQuery = useQuery({ queryKey: ['learning-progress', user?.id], enabled: !!user, queryFn: () => base44.entities.LearningProgress.filter({ created_by_id: user.id }, '-updated_date', 100) });
  const attempts = attemptQuery.data || [], transactions = transactionQuery.data || [], progress = progressQuery.data || [];
  const saveProgress = (session_key, state) => {
    const key = ['learning-progress', user.id];
    const task = (saves.current[session_key] || Promise.resolve()).catch(() => {}).then(async () => {
      const previous = (client.getQueryData(key) || []).find(p => p.session_key === session_key);
      const data = { session_key, state };
      const saved = previous ? await base44.entities.LearningProgress.update(previous.id, data) : await base44.entities.LearningProgress.create(data);
      client.setQueryData(key, rows => [saved, ...(rows || []).filter(p => p.session_key !== session_key)]);
      return saved;
    });
    saves.current[session_key] = task;
    return task;
  };
  const saveAttempt = async data => {
    // attempt_key keeps a replayed step from creating duplicate rows. It used to also freeze the
    // first score recorded for that key, so retrying a lesson could never improve it; now a better
    // score updates the existing row and a worse one leaves it alone.
    const existing = data.attempt_key ? await base44.entities.LearningAttempt.filter({ created_by_id: user.id, attempt_key: data.attempt_key }) : [];
    const previous = existing[0];
    const saved = previous
      ? (data.score > previous.score ? await base44.entities.LearningAttempt.update(previous.id, { ...data, completed_on: localDay(new Date()) }) : previous)
      : await base44.entities.LearningAttempt.create({ ...data, completed_on: localDay(new Date()) });
    client.setQueryData(['attempts', user.id], rows => [saved, ...(rows || []).filter(a => a.id !== saved.id)]);
    return saved;
  };
  const postTransaction = async data => { await base44.entities.BusinessTransaction.create(data); await client.invalidateQueries({ queryKey: ['business', user.id] }); };
  const difficulty = progress.find(p => p.session_key === 'settings')?.state?.difficulty || 'beginner';
  const setDifficulty = value => saveProgress('settings', { difficulty: value });
  const completed = [...new Set(attempts.filter(a => a.kind === 'lesson' && a.score >= 70).map(a => a.activity_id))];
  const dates = new Set(attempts.map(a => a.completed_on));
  let streak = 0; const day = new Date(); if (!dates.has(localDay(day))) day.setDate(day.getDate()-1);
  while (dates.has(localDay(day))) { streak++; day.setDate(day.getDate()-1); }
  // Score a topic on the best of its three most recent attempts, not a lifetime average.
  // A lifetime average lets one fumbled first attempt pin a topic below the 70% mastery bar
  // for good, so the daily workout keeps serving back material the learner has since mastered.
  // `attempts` arrives newest-first from the query, so the first three are the recent ones.
  const topicScore = topic => { const recent = attempts.filter(a => a.topic === topic).slice(0, 3); return recent.length ? Math.max(...recent.map(a => a.score)) : 0; };
  if (userQuery.isLoading || (!!user && (attemptQuery.isLoading || transactionQuery.isLoading || progressQuery.isLoading))) return <div className="grid min-h-screen place-items-center"><div className="text-sm text-[#7560d6] animate-pulse">Opening your learning space…</div></div>;
  if (userQuery.error || attemptQuery.error || transactionQuery.error || progressQuery.error) return <div className="p-10">Unable to load your progress. <button className="secondary-btn" onClick={() => { userQuery.refetch(); attemptQuery.refetch(); transactionQuery.refetch(); progressQuery.refetch(); }}>Try again</button></div>;
  return <LearningContext.Provider value={{ user, attempts, transactions, progress, completed, streak, topicScore, saveAttempt, postTransaction, saveProgress, difficulty, setDifficulty }}>{children}</LearningContext.Provider>;
}