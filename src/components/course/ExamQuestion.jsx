import React from 'react';
// Exam questions give no feedback: the learner picks an answer and can change it until submitting.
export default function ExamQuestion({ item, choice, onChoose }) {
  return <div className="space-y-5">
    <h2 className="text-xl font-bold leading-relaxed">{item.question}</h2>
    <div className="space-y-3">{item.options.map((o, i) => <button key={o} aria-pressed={choice === i} onClick={() => onChoose(i)} className={`w-full rounded-xl border p-4 text-left text-sm ${choice === i ? 'border-[#aa94d5] bg-[#f0eafb]' : 'border-[#e7e4ed] bg-white hover:border-[#c9b9e3]'}`}><span className="mr-3 text-[#b0a3c0]">{String.fromCharCode(65 + i)}.</span>{o}</button>)}</div>
  </div>;
}