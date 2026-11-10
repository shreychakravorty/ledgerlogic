import { writtenModules } from '@/components/course/courseData';
export const EXAM_PASS_MARK = 70;
export const PER_MODULE = 4;
const shuffled = items => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};
// A fresh paper each sitting: PER_MODULE lessons from every module, one check question from each,
// then mixed. Each question keeps its lesson so the weak-areas report can link back to it.
export const buildExam = () => shuffled(writtenModules.flatMap(m =>
  shuffled(m.lessons).slice(0, PER_MODULE).map(l => ({ ...shuffled(l.checks)[0], lessonId: l.id, moduleId: m.id }))));
export const gradeExam = (questions, answers) => {
  const right = questions.map((x, i) => answers[i] === x.correct);
  const correct = right.filter(Boolean).length;
  const modules = writtenModules.map(m => {
    const own = questions.map((x, i) => i).filter(i => questions[i].moduleId === m.id);
    return { id: m.id, correct: own.filter(i => right[i]).length, total: own.length };
  });
  const missed = [...new Set(questions.filter((x, i) => !right[i]).map(x => x.lessonId))];
  return { score: Math.round(correct / questions.length * 100), correct, total: questions.length, modules, missed };
};