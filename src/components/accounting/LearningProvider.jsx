import React, { createContext, useContext, useRef } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
const LearningContext = createContext(null);
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
    const existing = data.attempt_key ? await base44.entities.LearningAttempt.filter({ created_by_id: user.id, attempt_key: data.attempt_key }) : [];
    const saved = existing[0] || await base44.entities.LearningAttempt.create({ ...data, completed_on: new Date().toISOString().slice(0,10) });
    client.setQueryData(['attempts', user.id], rows => [saved, ...(rows || []).filter(a => a.id !== saved.id)]);
    return saved;
  };
  const postTransaction = async data => { await base44.entities.BusinessTransaction.create(data); await client.invalidateQueries({ queryKey: ['business', user.id] }); };
  const completed = [...new Set(attempts.filter(a => a.kind === 'lesson' && a.score >= 70).map(a => a.activity_id))];
  const dates = new Set(attempts.map(a => a.completed_on));
  let streak = 0; const day = new Date(); if (!dates.has(day.toISOString().slice(0,10))) day.setUTCDate(day.getUTCDate()-1);
  while (dates.has(day.toISOString().slice(0,10))) { streak++; day.setUTCDate(day.getUTCDate()-1); }
  const topicScore = topic => { const values = attempts.filter(a => a.topic === topic); return values.length ? Math.round(values.reduce((s,a) => s+a.score,0)/values.length) : 0; };
  if (userQuery.isLoading || (!!user && (attemptQuery.isLoading || transactionQuery.isLoading || progressQuery.isLoading))) return <div className="grid min-h-screen place-items-center"><div className="text-sm text-[#7560d6] animate-pulse">Opening your learning space…</div></div>;
  if (userQuery.error || attemptQuery.error || transactionQuery.error || progressQuery.error) return <div className="p-10">Unable to load your progress. <button className="secondary-btn" onClick={() => { userQuery.refetch(); attemptQuery.refetch(); transactionQuery.refetch(); progressQuery.refetch(); }}>Try again</button></div>;
  return <LearningContext.Provider value={{ user, attempts, transactions, progress, completed, streak, topicScore, saveAttempt, postTransaction, saveProgress }}>{children}</LearningContext.Provider>;
}