import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { money } from '@/components/accounting/accountingData';
import { explainWrongSide, lineSide } from '@/components/accounting/journalReasoning';
export default function JournalFeedback({ lesson, sides, correct }) {
  const wrong = lesson.journal.filter((l, i) => sides[i] !== lineSide(l)).length;
  const total = side => lesson.journal.reduce((s, l, i) => s + (sides[i] === side ? l.debit + l.credit : 0), 0);
  const balanced = total('debit') === total('credit');
  return <div role="status" className={`space-y-4 rounded-xl p-5 text-sm leading-relaxed ${correct ? 'bg-[#edf6ef] text-[#4f7a5c]' : 'bg-[#fff5e5] text-[#8a6a3a]'}`}>
    <h3 className="font-bold">{correct ? 'Right sides, right reasons.' : balanced ? `Balanced — but ${wrong === 1 ? 'one account is' : `${wrong} accounts are`} pointing the wrong way.` : 'The entry does not balance yet.'}</h3>
    {!correct && <p className="text-xs">Equal debits and credits only prove the arithmetic. Each account also has to move in the direction the event actually pushed it. Here is what happened to each one:</p>}
    <ul className="space-y-3">{lesson.journal.map((l, i) => { const ok = sides[i] === lineSide(l); return <li key={l.account} className="flex gap-3 rounded-lg bg-white/70 p-3">{ok ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" /> : <XCircle size={18} className="mt-0.5 shrink-0 text-amber-600" />}<div><p className="font-semibold">{l.account} · {lineSide(l)} {money(l.debit + l.credit)}</p><p className="mt-1 text-xs">{ok ? l.why : explainWrongSide(l)}</p></div></li>; })}</ul>
    {lesson.intuition && <div className="rounded-lg border border-current/20 p-4"><p className="eyebrow mb-2 text-current/70">WHY THIS FEELS BACKWARDS</p><p className="text-xs">{lesson.intuition}</p></div>}
    {!correct && <p className="text-xs">Place the amounts again — you now know which way each account moves and why.</p>}
  </div>;
}