import React from 'react';
import { format, parseISO } from 'date-fns';
import { EXAM_PASS_MARK } from '@/components/course/examData';
export default function ExamHistory({ exams }) {
  return <div className="panel mt-5 p-5">
    <h2 className="text-lg font-bold">Saved results</h2>
    <div className="mt-3">{exams.map((a, i) => <div key={a.id} className="flex items-center justify-between gap-3 border-t border-[#f0f0f6] py-3 text-sm first:border-t-0">
      <span>{format(parseISO(a.completed_on), 'MMM d, yyyy')}{i === 0 && <span className="ml-2 text-[11px] text-[#a99fb4]">latest</span>}</span>
      <span className="flex items-center gap-3"><b>{a.score}%</b><span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${a.score >= EXAM_PASS_MARK ? 'bg-[#edf6ee] text-[#4f7a5c]' : 'bg-[#fff5e7] text-[#8a6a3a]'}`}>{a.score >= EXAM_PASS_MARK ? 'Passed' : 'Not passed'}</span></span>
    </div>)}</div>
  </div>;
}