import React, { createContext, useContext } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
const LearningContext = createContext(null);
export const useLearning = () => useContext(LearningContext);
export default function LearningProvider({ children }) {
  const client = useQueryClient();
  const userQuery = useQuery({ queryKey: ['accounting-user'], queryFn: () => base44.auth.me() });
  const user = userQuery.data;
  const attemptQuery = useQuery({ queryKey: ['attempts', user?.id], enabled: !!user, queryFn: () => base44.entities.LearningAttempt.filter({ created_by_id: user.id }, '-created_date', 1000) });
  const transactionQuery = useQuery({ queryKey: ['business', user?.id], enabled: !!user, queryFn: () => base44.entities.BusinessTransaction.filter({ created_by_id: user.id }, 'day', 100) });
  const attempts = attemptQuery.data || [], transactions = transactionQuery.data || [];
  const saveAttempt = async data => { await base44.entities.LearningAttempt.create({ ...data, completed_on: new Date().toISOString().slice(0,10) }); await client.invalidateQueries({ queryKey: ['attempts', user.id] }); };
  const postTransaction = async data => { await base44.entities.BusinessTransaction.create(data); await client.invalidateQueries({ queryKey: ['business', user.id] }); };
  const completed = [...new Set(attempts.filter(a => a.kind === 'lesson' && a.score >= 70).map(a => a.activity_id))];
  const dates = new Set(attempts.map(a => a.completed_on));
  let streak = 0; const day = new Date(); if (!dates.has(day.toISOString().slice(0,10))) day.setUTCDate(day.getUTCDate()-1);
  while (dates.has(day.toISOString().slice(0,10))) { streak++; day.setUTCDate(day.getUTCDate()-1); }
  const topicScore = topic => { const values = attempts.filter(a => a.topic === topic); return values.length ? Math.round(values.reduce((s,a) => s+a.score,0)/values.length) : 0; };
  if (userQuery.isLoading || (!!user && (attemptQuery.isLoading || transactionQuery.isLoading))) return <div className="grid min-h-screen place-items-center"><div className="text-sm text-[#7560d6] animate-pulse">Opening your learning space…</div></div>;
  if (userQuery.error || attemptQuery.error || transactionQuery.error) return <div className="p-10">Unable to load your progress. <button className="secondary-btn" onClick={() => { userQuery.refetch(); attemptQuery.refetch(); transactionQuery.refetch(); }}>Try again</button></div>;
  return <LearningContext.Provider value={{ user, attempts, transactions, completed, streak, topicScore, saveAttempt, postTransaction }}>{children}</LearningContext.Provider>;
}