import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLearning } from '@/components/accounting/LearningProvider';
import CourseCard from '@/components/course/CourseCard';
import QuizQuestion from '@/components/course/QuizQuestion';
export default function LessonPlayer({ lesson, module, position, next }) {
  const { saveAttempt } = useLearning();
  const steps = [...lesson.cards.map(card => ({ card })), ...lesson.checks.map(check => ({ check }))];
  const [step, setStep] = useState(0), [ready, setReady] = useState(true), [mistakes, setMistakes] = useState(0);
  const [busy, setBusy] = useState(false), [error, setError] = useState(''), [done, setDone] = useState(false);
  const current = steps[step], last = step === steps.length - 1;
  const advance = async () => {
    if (!last) { setReady(!steps[step + 1].check); setStep(step + 1); return; }
    setBusy(true); setError('');
    try {
      await saveAttempt({ attempt_key: `course:${lesson.id}`, activity_id: lesson.id, kind: 'course_lesson', topic: `Course: ${module.title}`, score: Math.max(40, 100 - mistakes * 15), mistakes });
      setDone(true);
    } catch (e) { setError(e.message || 'Could not save your progress. Please try again.'); } finally { setBusy(false); }
  };
  if (done) return <div className="page-enter mx-auto max-w-2xl py-14 text-center">
    <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[#edf6ee] text-[#77a684]"><CheckCircle2 size={38} /></div>
    <p className="eyebrow">LESSON COMPLETE · PROGRESS SAVED</p>
    <h1 className="page-title my-4">{lesson.title}</h1>
    <p className="muted">Lesson {position} of {module.lessons.length} in {module.title}.</p>
    <div className="mt-7 flex flex-wrap justify-center gap-3">
      <Link to={next.to} className="primary-btn">{next.label}<ArrowRight size={15} /></Link>
      {lesson.practice && <Link to={`/learn?id=${lesson.practice}`} className="secondary-btn">Practise it hands-on</Link>}
      <Link to="/course" className="secondary-btn">Back to the roadmap</Link>
    </div>
  </div>;
  return <div className="page-enter mx-auto max-w-[760px]">
    <Link to="/course" className="mb-7 flex items-center gap-2 text-xs text-[#9e91b1]"><ArrowLeft size={14} />Accountant program</Link>
    <p className="eyebrow text-[#aa96c2]">{module.title} · LESSON {position} OF {module.lessons.length}</p>
    <h1 className="page-title mb-6 mt-3">{lesson.title}</h1>
    <div className="mb-6 flex gap-1.5" aria-label={`Step ${step + 1} of ${steps.length}`}>{steps.map((s, i) => <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? (s.check ? 'bg-[#e0b872]' : 'bg-[#a58acb]') : 'bg-[#e9e4f0]'}`} />)}</div>
    <div className="panel p-5 md:p-8" key={step}>
      {current.card ? <CourseCard card={current.card} /> : <><p className="eyebrow mb-4">CHECK YOUR UNDERSTANDING</p><QuizQuestion item={current.check} retry onResult={ok => ok ? setReady(true) : setMistakes(m => m + 1)} /></>}
    </div>
    {error && <p role="alert" className="mt-4 text-sm text-rose-600">{error}</p>}
    <div className="mt-6 flex items-center justify-between">
      <button className="secondary-btn" disabled={step === 0 || busy} onClick={() => { setStep(step - 1); setReady(true); }}><ArrowLeft size={15} />Back</button>
      <button className="primary-btn" disabled={!ready || busy} onClick={advance}>{busy ? 'Saving…' : last ? 'Finish lesson' : 'Continue'}<ArrowRight size={16} /></button>
    </div>
  </div>;
}