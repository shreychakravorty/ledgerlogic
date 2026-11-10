import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
// retry: the learner may pick again after a wrong answer (lesson checks).
// Without it the first answer is final and the right option is revealed (module quizzes).
export default function QuizQuestion({ item, retry = false, onResult }) {
  const [choice, setChoice] = useState(null), [result, setResult] = useState(null);
  const locked = result === true || (result === false && !retry);
  const check = () => { const ok = choice === item.correct; setResult(ok); onResult(ok); };
  const style = i => locked && i === item.correct ? 'border-[#9cc7a7] bg-[#edf6ee]' : choice === i ? 'border-[#aa94d5] bg-[#f0eafb]' : 'border-[#e7e4ed] bg-white hover:border-[#c9b9e3]';
  return <div className="space-y-5">
    <h2 className="text-xl font-bold leading-relaxed">{item.question}</h2>
    <div className="space-y-3">{item.options.map((o, i) => <button key={o} disabled={locked} onClick={() => { setChoice(i); setResult(null); }} className={`w-full rounded-xl border p-4 text-left text-sm ${style(i)}`}><span className="mr-3 text-[#b0a3c0]">{String.fromCharCode(65 + i)}.</span>{o}</button>)}</div>
    {result !== null && <div role="status" className={`space-y-2 rounded-xl p-5 text-sm leading-relaxed ${result ? 'bg-[#edf6ee] text-[#4f7a5c]' : 'bg-[#fff5e7] text-[#8a6a3a]'}`}>
      <h3 className="flex items-center gap-2 font-bold">{result ? <CheckCircle2 size={18} /> : <XCircle size={18} />}{result ? 'Exactly.' : retry ? 'Not quite. Read why, then pick again.' : 'Not this time.'}</h3>
      <p>{item.why}</p>
    </div>}
    {!locked && <button disabled={choice === null || result === false} onClick={check} className="primary-btn">Check answer</button>}
  </div>;
}