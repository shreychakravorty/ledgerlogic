import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { modules, writtenModules, courseLessons } from '@/components/course/courseData';
import useCourseProgress, { PASS_MARK } from '@/components/course/useCourseProgress';
import ModuleCard from '@/components/course/ModuleCard';
export default function Course() {
  const { done, quizScore } = useCourseProgress();
  const total = courseLessons.length + writtenModules.length;
  const finished = courseLessons.filter(l => done.has(l.id)).length + writtenModules.filter(m => quizScore(m.id) >= PASS_MARK).length;
  const nextLesson = courseLessons.find(l => !done.has(l.id));
  const nextQuiz = writtenModules.find(m => quizScore(m.id) < PASS_MARK);
  const currentId = nextLesson?.moduleId || nextQuiz?.id;
  const next = nextLesson ? { to: `/course/lesson?id=${nextLesson.id}`, label: finished ? 'Continue' : 'Start lesson 1' } : nextQuiz ? { to: `/course/quiz?module=${nextQuiz.id}`, label: 'Take the next quiz' } : null;
  return <div className="page-enter mx-auto max-w-4xl">
    <p className="eyebrow">THE ACCOUNTANT PROGRAM</p>
    <h1 className="page-title mt-3">Everything an accountant needs to know.</h1>
    <p className="muted mt-3">{modules.length} modules, in the order they build on each other. Short lessons, a quick check after each idea, and a quiz to close every module.</p>
    <div className="panel my-7 flex flex-wrap items-center gap-5 p-5">
      <span className="rounded-xl bg-[#eeebf8] p-3 text-[#9e85c5]"><GraduationCap size={24} /></span>
      <div className="min-w-[180px] flex-1"><p className="text-sm font-semibold">{finished} of {total} lessons and quizzes complete</p><div className="mt-3 h-2 rounded-full bg-[#eeebf3]"><div className="h-full rounded-full bg-[#a18ac9] transition-all" style={{ width: `${finished / total * 100}%` }} /></div><p className="mt-2 text-[11px] text-[#a29aa9]">Modules 1 to {writtenModules.length} are ready now. The rest are mapped out below and open in later steps.</p></div>
      {next && <Link to={next.to} className="primary-btn">{next.label}<ArrowRight size={14} /></Link>}
    </div>
    <div className="space-y-3">{modules.map((m, i) => <ModuleCard key={m.id} module={m} number={i + 1} done={done} quizScore={m.lessons ? quizScore(m.id) : 0} open={m.id === currentId} />)}</div>
  </div>;
}