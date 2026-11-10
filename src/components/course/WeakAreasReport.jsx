import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getModule, findLesson } from '@/components/course/courseData';
import { EXAM_PASS_MARK } from '@/components/course/examData';
const pct = m => Math.round(m.correct / m.total * 100);
export default function WeakAreasReport({ details }) {
  const rows = details.modules.filter(m => m.total && getModule(m.id));
  const weak = rows.filter(m => pct(m) < EXAM_PASS_MARK);
  const lessonsFor = id => details.missed.map(lessonId => findLesson(lessonId)).filter(f => f && f.module.id === id);
  return <div className="space-y-7">
    <div>
      <h2 className="text-lg font-bold">Weak areas</h2>
      {weak.length === 0
        ? <p className="mt-3 flex items-center gap-2 text-sm text-[#4f7a5c]"><CheckCircle2 size={16} />No weak areas. Every module scored {EXAM_PASS_MARK}% or better.</p>
        : <div className="mt-3 space-y-3">{weak.map(m => <div key={m.id} className="rounded-xl border border-[#f1e3c9] bg-[#fffaf0] p-4">
            <p className="text-sm font-semibold">{getModule(m.id).title}<span className="font-normal text-[#a8894f]"> · {m.correct} of {m.total} correct</span></p>
            <p className="eyebrow mt-3">LESSONS TO REVISIT</p>
            <div className="mt-2 flex flex-wrap gap-2">{lessonsFor(m.id).map(f => <Link key={f.lesson.id} to={`/course/lesson?id=${f.lesson.id}`} className="inline-flex items-center gap-1.5 rounded-lg border border-[#e4e5ed] bg-white px-3 py-2 text-xs hover:bg-[#f5f3ff]">{f.lesson.title}<ArrowRight size={12} /></Link>)}</div>
          </div>)}</div>}
    </div>
    <div>
      <h2 className="text-lg font-bold">Score by module</h2>
      <div className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2">{rows.map(m => <div key={m.id}>
        <div className="flex justify-between gap-3 text-xs"><span>{getModule(m.id).title}</span><b>{pct(m)}%</b></div>
        <div className="mt-1.5 h-1.5 rounded-full bg-[#eeebf3]"><div className={`h-full rounded-full ${pct(m) < EXAM_PASS_MARK ? 'bg-[#dbb777]' : 'bg-[#a18ac9]'}`} style={{ width: `${pct(m)}%` }} /></div>
      </div>)}</div>
    </div>
  </div>;
}