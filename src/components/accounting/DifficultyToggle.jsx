import React, { useState } from 'react';
import { useLearning } from '@/components/accounting/LearningProvider';
const modes = [['beginner', 'Beginner', 'Concepts'], ['advanced', 'Advanced', 'Troubleshooting']];
export default function DifficultyToggle({ compact = false }) {
  const { difficulty, setDifficulty } = useLearning();
  const [busy, setBusy] = useState(false);
  const pick = async value => { if (value === difficulty || busy) return; setBusy(true); try { await setDifficulty(value); } finally { setBusy(false); } };
  return <div role="radiogroup" aria-label="Lesson difficulty" className="inline-flex rounded-xl border border-[#e4e5ed] bg-white p-1 text-xs">
    {modes.map(([value, label, sub]) => <button key={value} role="radio" aria-checked={difficulty === value} disabled={busy} onClick={() => pick(value)} className={`rounded-lg px-3 py-2 text-left ${difficulty === value ? 'bg-[#7560d6] text-white' : 'text-[#8a8798] hover:bg-[#f5f3ff]'}`}>
      <span className="block font-semibold">{label}</span>
      {!compact && <span className={`block text-[10px] ${difficulty === value ? 'text-white/80' : 'text-[#aaa7b8]'}`}>{sub}</span>}
    </button>)}
  </div>;
}