import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLearning } from '@/components/accounting/LearningProvider';
import ExamQuestion from '@/components/course/ExamQuestion';
import { gradeExam, EXAM_PASS_MARK } from '@/components/course/examData';
export default function ExamPlayer({ questions, onFinish, onQuit }) {
  const { saveAttempt } = useLearning();
  const [index, setIndex] = useState(0), [answers, setAnswers] = useState([]);
  const [busy, setBusy] = useState(false), [error, setError] = useState('');
  const last = index === questions.length - 1;
  const answered = questions.filter((x, i) => answers[i] !== undefined).length;
  const choose = i => setAnswers(a => { const next = [...a]; next[index] = i; return next; });
  const submit = async () => {
    const { score, correct, total, modules, missed } = gradeExam(questions, answers);
    setBusy(true); setError('');
    try {
      // No attempt_key: every sitting is kept as its own saved result.
      await saveAttempt({ activity_id: 'final-exam', kind: 'course_exam', topic: 'Course: Final exam', score, mistakes: total - correct, details: { correct, total, modules, missed } });
      onFinish();
    } catch (e) { setError(e.message || 'Could not save your result. Please try again.'); setBusy(false); }
  };
  return <div className="page-enter mx-auto max-w-[760px]">
    <button onClick={onQuit} className="mb-7 flex items-center gap-2 text-xs text-[#9e91b1]"><ArrowLeft size={14} />Leave the exam (answers are not kept)</button>
    <p className="eyebrow text-[#aa96c2]">FINAL EXAM · QUESTION {index + 1} OF {questions.length}</p>
    <div className="mb-6 mt-4 h-1.5 rounded-full bg-[#e9e4f0]"><div className="h-full rounded-full bg-[#a58acb] transition-all" style={{ width: `${answered / questions.length * 100}%` }} /></div>
    <div className="panel p-5 md:p-8"><ExamQuestion item={questions[index]} choice={answers[index]} onChoose={choose} /></div>
    {error && <p role="alert" className="mt-4 text-sm text-rose-600">{error}</p>}
    <div className="mt-6 flex items-center justify-between gap-3">
      <button className="secondary-btn" disabled={index === 0} onClick={() => setIndex(index - 1)}><ArrowLeft size={14} />Previous</button>
      <span className="hidden text-[11px] text-[#a99fb4] sm:block">{answered} of {questions.length} answered. {EXAM_PASS_MARK}% to pass.</span>
      {last
        ? <button className="primary-btn" disabled={answered < questions.length || busy} onClick={submit}>{busy ? 'Saving…' : 'Submit the exam'}</button>
        : <button className="primary-btn" disabled={answers[index] === undefined} onClick={() => setIndex(index + 1)}>Next<ArrowRight size={16} /></button>}
    </div>
  </div>;
}