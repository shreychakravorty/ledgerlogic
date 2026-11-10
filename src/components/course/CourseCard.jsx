import React from 'react';
import JournalTable from '@/components/accounting/JournalTable';
export default function CourseCard({ card }) {
  return <div className="space-y-5">
    <h2 className="text-2xl font-bold leading-snug">{card.h}</h2>
    {card.text && <p className="text-[15px] leading-relaxed text-[#6f7186]">{card.text}</p>}
    {card.points && <ul className="space-y-2">{card.points.map(p => <li key={p} className="rounded-xl bg-[#f7f4fb] px-4 py-3 text-sm">{p}</li>)}</ul>}
    {card.rows && <div className="overflow-hidden rounded-xl border border-[#e8e8f0]">{card.rows.map(([label, value]) => <div key={label} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-b border-[#f1f1f6] px-4 py-3 text-sm last:border-0"><span className="font-semibold">{label}</span><span className="text-[#7d7590]">{value}</span></div>)}</div>}
    {card.entry && <JournalTable lines={card.entry} title="The journal entry" />}
    {card.tip && <p className="rounded-xl border border-[#eee5d3] bg-[#fffaf0] p-4 text-sm leading-relaxed text-[#9b8558]">{card.tip}</p>}
  </div>;
}