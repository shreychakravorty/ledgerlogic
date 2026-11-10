import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ClipboardCheck, ArrowRight } from 'lucide-react';
import { PASS_MARK } from '@/components/course/useCourseProgress';
const row = 'flex items-center gap-3 border-t border-[#f0f0f6] px-5 py-3.5 text-sm';
const dot = on => `grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] ${on ? 'bg-[#eaf3ec] text-[#77a684]' : 'border border-[#e6e2ee] text-[#b6adbf]'}`;
export default function ModuleCard({ module, number, done, quizScore, open }) {
  const ready = !!module.lessons;
  const count = ready ? module.lessons.filter(l => done.has(l.id)).length : 0;
  const passed = quizScore >= PASS_MARK, complete = ready && passed && count === module.lessons.length;
  return <details open={open} className="panel group overflow-hidden">
    <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-xs font-bold ${complete ? 'bg-[#eaf3ec] text-[#77a684]' : ready ? 'bg-[#eee7f9] text-[#9b82c6]' : 'bg-[#f4f4f8] text-[#b3b4c2]'}`}>{complete ? <Check size={18} /> : String(number).padStart(2, '0')}</span>
      <div className="min-w-0 flex-1"><p className="eyebrow text-[9px]">{module.area}</p><h2 className="mt-1 text-sm font-bold">{module.title}</h2><p className="mt-1 text-[11px] leading-relaxed text-[#a29aa9]">{module.summary}</p></div>
      <span className={`hidden shrink-0 rounded-full px-3 py-1.5 text-[10px] sm:block ${ready ? 'bg-[#f3eff8] text-[#9580ad]' : 'bg-[#f6f6f9] text-[#aeb0bd]'}`}>{ready ? `${count} of ${module.lessons.length} lessons${passed ? ' · quiz passed' : ''}` : 'Coming in a later step'}</span>
      <ChevronDown size={16} className="shrink-0 text-[#b9a5cb] transition-transform group-open:rotate-180" />
    </summary>
    {ready ? <>
      {module.lessons.map((l, i) => <Link key={l.id} to={`/course/lesson?id=${l.id}`} className={`${row} hover:bg-[#fcfaff]`}><span className={dot(done.has(l.id))}>{done.has(l.id) ? <Check size={13} /> : i + 1}</span><span className="flex-1 font-medium">{l.title}</span><span className="text-[10px] text-[#aba1b9]">{l.minutes} min</span><ArrowRight size={14} className="text-[#c5b6d5]" /></Link>)}
      <Link to={`/course/quiz?module=${module.id}`} className={`${row} bg-[#fbf9fe] hover:bg-[#f6f1fc]`}><span className={dot(passed)}>{passed ? <Check size={13} /> : <ClipboardCheck size={13} />}</span><span className="flex-1 font-semibold">Module quiz</span><span className="text-[10px] text-[#aba1b9]">{quizScore ? `Best score ${quizScore}%` : `${module.quiz.length} questions`}</span><ArrowRight size={14} className="text-[#c5b6d5]" /></Link>
    </> : module.outline.map((title, i) => <div key={title} className={`${row} text-[#a0a2b1]`}><span className={dot(false)}>{i + 1}</span>{title}</div>)}
  </details>;
}