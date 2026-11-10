import { describe, expect, it } from 'vitest';
import { modules, writtenModules, courseLessons, findLesson } from '@/components/course/courseData';
import { lessons } from '@/components/accounting/lessonData';

const questions = [...courseLessons.flatMap(l => l.checks), ...writtenModules.flatMap(m => m.quiz)];

describe('accountant program', () => {
  it('has unique module and lesson ids', () => {
    expect(new Set(modules.map(m => m.id)).size).toBe(modules.length);
    expect(new Set(courseLessons.map(l => l.id)).size).toBe(courseLessons.length);
  });
  it('every module is either written or outlined', () => {
    for (const m of modules) expect((m.lessons || m.outline).length, m.id).toBeGreaterThan(0);
    for (const m of writtenModules) expect(m.quiz.length, m.id).toBeGreaterThanOrEqual(5);
  });
  it.each(courseLessons.map(l => [l.id, l]))('%s is complete', (id, l) => {
    expect(l.cards.length).toBeGreaterThanOrEqual(3);
    expect(l.checks.length).toBeGreaterThanOrEqual(2);
    for (const c of l.cards) {
      expect(c.h).toBeTruthy();
      if (c.rows) expect(new Set(c.rows.map(r => r[0])).size).toBe(c.rows.length);
      if (c.entry) expect(c.entry.reduce((s, x) => s + x.debit, 0)).toBe(c.entry.reduce((s, x) => s + x.credit, 0));
    }
    if (l.practice) expect(lessons.map(x => x.id)).toContain(l.practice);
    expect(findLesson(id).lesson.id).toBe(id);
  });
  it('every question has distinct options, a valid answer and a reason', () => {
    expect(new Set(questions.map(x => x.question)).size).toBe(questions.length);
    for (const x of questions) {
      expect(new Set(x.options).size, x.question).toBe(x.options.length);
      expect(x.options[x.correct], x.question).toBeTruthy();
      expect(x.why, x.question).toBeTruthy();
    }
  });
});