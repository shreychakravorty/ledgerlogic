import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';
import { modules, writtenModules, courseLessons } from '@/components/course/courseData';
import useCourseProgress, { PASS_MARK } from '@/components/course/useCourseProgress';
import ModuleCard from '@/components/course/ModuleCard';
export default function Course() {
  const { done, quizScore, exams } = useCourseProgress();
  const bestExam = Math.max(0, ...exams.map(a => a.score));
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
      <div className="min-w-[180px] flex-1"><p className="text-sm font-semibold">{finished} of {total} lessons and quizzes complete</p><div className="mt-3 h-2 rounded-full bg-[#eeebf3]"><div className="h-full rounded-full bg-[#a18ac9] transition-all" style={{ width: `${finished / total * 100}%` }} /></div><p className="mt-2 text-[11px] text-[#a29aa9]">All {modules.length} modules are ready to study, in any order.</p></div>
      {next && <Link to={next.to} className="primary-btn">{next.label}<ArrowRight size={14} /></Link>}
    </div>
    <div className="space-y-3">{modules.map((m, i) => <React.Fragment key={m.id}>
      {m.track === 'advanced' && modules[i - 1]?.track !== 'advanced' && <div className="pt-6"><p className="eyebrow">ADVANCED TRACK</p><p className="muted mt-1">Four further modules to take on after the core program.</p></div>}
      <ModuleCard module={m} number={i + 1} done={done} quizScore={m.lessons ? quizScore(m.id) : 0} open={m.id === currentId} />
    </React.Fragment>)}</div>
    <Link to="/course/exam" className="panel mt-3 flex items-center gap-4 p-5 hover:bg-[#fcfbfe]">
      <span className="rounded-xl bg-[#eeebf8] p-3 text-[#9e85c5]"><Award size={22} /></span>
      <div className="flex-1"><h2 className="text-sm font-bold">Final exam</h2><p className="mt-1 text-xs text-[#9a97a8]">{exams.length ? `Best score ${bestExam}% from ${exams.length} ${exams.length === 1 ? 'sitting' : 'sittings'}. Open it for your weak-areas report.` : `Mixed questions across all ${modules.length} modules, with a weak-areas report at the end.`}</p></div>
      <ArrowRight size={17} className="text-[#ae9dbe]" />
    </Link>
  </div>;
}