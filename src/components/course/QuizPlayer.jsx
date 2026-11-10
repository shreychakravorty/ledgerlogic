import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trophy, RotateCcw } from 'lucide-react';
import { useLearning } from '@/components/accounting/LearningProvider';
import QuizQuestion from '@/components/course/QuizQuestion';
import { PASS_MARK } from '@/components/course/useCourseProgress';
export default function QuizPlayer({ module }) {
  const { saveAttempt } = useLearning();
  const questions = module.quiz;
  const [run, setRun] = useState(0), [index, setIndex] = useState(0), [correct, setCorrect] = useState(0), [answered, setAnswered] = useState(false);
  const [busy, setBusy] = useState(false), [error, setError] = useState(''), [score, setScore] = useState(null);
  const last = index === questions.length - 1;
  const advance = async () => {
    if (!last) { setIndex(index + 1); setAnswered(false); return; }
    const result = Math.round(correct / questions.length * 100);
    setBusy(true); setError('');
    try {
      await saveAttempt({ attempt_key: `course-quiz:${module.id}`, activity_id: module.id, kind: 'course_quiz', topic: `Course: ${module.title}`, score: result, mistakes: questions.length - correct });
      setScore(result);
    } catch (e) { setError(e.message || 'Could not save your result. Please try again.'); } finally { setBusy(false); }
  };
  const restart = () => { setRun(run + 1); setIndex(0); setCorrect(0); setAnswered(false); setScore(null); };
  if (score !== null) { const passed = score >= PASS_MARK; return <div className="page-enter mx-auto max-w-2xl py-14 text-center">
    <div className={`mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full ${passed ? 'bg-[#eee7f9] text-[#aa87d2]' : 'bg-[#fff5e7] text-[#c49b65]'}`}><Trophy size={38} /></div>
    <p className="eyebrow">{passed ? 'MODULE PASSED · RESULT SAVED' : 'RESULT SAVED'}</p>
    <h1 className="page-title my-4">{score}% · {correct} of {questions.length} correct</h1>
    <p className="muted">{passed ? `You have the essentials of ${module.title}.` : `You need ${PASS_MARK}% to pass. Revisit the lessons you were unsure of, then try again. Your best score is the one that counts.`}</p>
    <div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/course" className="primary-btn">Back to the roadmap</Link><button className="secondary-btn" onClick={restart}><RotateCcw size={14} />Retake the quiz</button></div>
  </div>; }
  return <div className="page-enter mx-auto max-w-[760px]">
    <Link to="/course" className="mb-7 flex items-center gap-2 text-xs text-[#9e91b1]"><ArrowLeft size={14} />Accountant program</Link>
    <p className="eyebrow text-[#aa96c2]">MODULE QUIZ · QUESTION {index + 1} OF {questions.length}</p>
    <h1 className="page-title mb-6 mt-3">{module.title}</h1>
    <div className="mb-6 h-1.5 rounded-full bg-[#e9e4f0]"><div className="h-full rounded-full bg-[#a58acb] transition-all" style={{ width: `${(index + 1) / questions.length * 100}%` }} /></div>
    <div className="panel p-5 md:p-8"><QuizQuestion key={`${run}-${index}`} item={questions[index]} onResult={ok => { setAnswered(true); if (ok) setCorrect(c => c + 1); }} /></div>
    {error && <p role="alert" className="mt-4 text-sm text-rose-600">{error}</p>}
    <div className="mt-6 flex items-center justify-between"><span className="text-[11px] text-[#a99fb4]">One answer per question. {PASS_MARK}% to pass.</span><button className="primary-btn" disabled={!answered || busy} onClick={advance}>{busy ? 'Saving…' : last ? 'See my result' : 'Next question'}<ArrowRight size={16} /></button></div>
  </div>;
}