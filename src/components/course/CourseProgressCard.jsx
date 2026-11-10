import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { courseLessons } from '@/components/course/courseData';
import useCourseProgress from '@/components/course/useCourseProgress';
export default function CourseProgressCard() {
  const { done } = useCourseProgress();
  const count = courseLessons.filter(l => done.has(l.id)).length;
  return <Link to="/course" className="panel flex items-center gap-4 p-4 hover:bg-[#fcfbfe]">
    <span className="rounded-xl bg-[#eee7f9] p-3 text-[#9b82c6]"><GraduationCap size={18} /></span>
    <div className="flex-1"><h3 className="text-xs font-bold">Accountant program</h3><p className="mt-1 text-[10px] text-[#9a97a8]">The full curriculum, from the accounting equation to audit and tax.</p>
      <div className="mt-2 h-1.5 rounded-full bg-[#eeebf3]"><div className="h-full rounded-full bg-[#a18ac9]" style={{ width: `${count / courseLessons.length * 100}%` }} /></div>
      <p className="mt-1.5 text-[9px] text-[#aba1b9]">{count} of {courseLessons.length} lessons complete</p></div>
    <ArrowRight size={17} className="text-[#ae9dbe]" />
  </Link>;
}