import { useLearning } from '@/components/accounting/LearningProvider';
export const PASS_MARK = 70;
export default function useCourseProgress() {
  const { attempts } = useLearning();
  const done = new Set(attempts.filter(a => a.kind === 'course_lesson').map(a => a.activity_id));
  const quizScore = moduleId => Math.max(0, ...attempts.filter(a => a.kind === 'course_quiz' && a.activity_id === moduleId).map(a => a.score));
  return { done, quizScore };
}