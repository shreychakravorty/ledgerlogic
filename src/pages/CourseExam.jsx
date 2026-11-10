import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { modules } from '@/components/course/courseData';
import { buildExam, EXAM_PASS_MARK, PER_MODULE } from '@/components/course/examData';
import useCourseProgress from '@/components/course/useCourseProgress';
import ExamPlayer from '@/components/course/ExamPlayer';
import WeakAreasReport from '@/components/course/WeakAreasReport';
import ExamHistory from '@/components/course/ExamHistory';
export default function CourseExam() {
  const { exams } = useCourseProgress();
  const [questions, setQuestions] = useState(null);
  if (questions) return <ExamPlayer questions={questions} onFinish={() => setQuestions(null)} onQuit={() => setQuestions(null)} />;
  const latest = exams[0], passed = latest && latest.score >= EXAM_PASS_MARK;
  return <div className="page-enter mx-auto max-w-4xl">
    <Link to="/course" className="mb-7 flex items-center gap-2 text-xs text-[#9e91b1]"><ArrowLeft size={14} />Accountant program</Link>
    <p className="eyebrow">FINAL EXAM</p>
    <h1 className="page-title mt-3">One paper. All {modules.length} modules.</h1>
    <p className="muted mt-3">{modules.length * PER_MODULE} mixed questions, {PER_MODULE} from every module, drawn fresh each sitting. No feedback until you submit. {EXAM_PASS_MARK}% to pass.</p>
    <button className="primary-btn mt-6" onClick={() => setQuestions(buildExam())}>{latest ? 'Sit the exam again' : 'Start the exam'}<ArrowRight size={14} /></button>
    {latest && <div className="panel mt-7 p-5 md:p-7">
      <div className="mb-7 flex items-center gap-4">
        <span className={`rounded-xl p-3 ${passed ? 'bg-[#eee7f9] text-[#9b82c6]' : 'bg-[#fff5e7] text-[#c49b65]'}`}><Award size={24} /></span>
        <div><p className="eyebrow">{passed ? 'LATEST RESULT · PASSED' : 'LATEST RESULT · NOT PASSED'}</p><p className="mt-1 text-2xl font-bold">{latest.score}% · {latest.details.correct} of {latest.details.total} correct</p></div>
      </div>
      <WeakAreasReport details={latest.details} />
    </div>}
    {latest && <ExamHistory exams={exams} />}
  </div>;
}