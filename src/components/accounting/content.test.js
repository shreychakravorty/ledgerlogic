import { describe, expect, it } from 'vitest';
import { lessons } from '@/components/accounting/lessonData';
import { troubleshooting } from '@/components/accounting/troubleshooting';
import { supportCases } from '@/components/accounting/supportData';
import { terms, glossaryGroups } from '@/components/accounting/glossaryData';
import { accounts, curriculum, businessEvents, adjustingEvents, allEvents, summarize, contraAccounts, contraOf } from '@/components/accounting/accountingData';
import { payrollRates, reviewBy, verifiedOn } from '@/components/accounting/canadianRates';
import { shuffleChoices } from '@/components/accounting/shuffle';

const ids = lessons.map(l => l.id);
const entries = [...allEvents];
const totalDebits = lines => lines.reduce((s, l) => s + l.debit, 0);
const totalCredits = lines => lines.reduce((s, l) => s + l.credit, 0);

describe('lesson content', () => {
  it('has unique ids', () => expect(new Set(ids).size).toBe(ids.length));

  it.each(lessons.map(l => [l.id, l]))('%s is complete and internally consistent', (id, l) => {
    for (const field of ['short', 'title', 'topic', 'scenario', 'explanation', 'principle', 'intuition', 'tally', 'quickbooks', 'problem']) {
      expect(l[field], `${id} is missing ${field}`).toBeTruthy();
    }
    // LearningPath only renders these three levels; anything else silently disappears.
    expect(['Beginner', 'Intermediate', 'Advanced']).toContain(l.level);
    expect(l.optionNotes).toHaveLength(l.options.length);
    expect(l.impact.length).toBeGreaterThan(0);
    // DecisionStep asks for exactly the number of correct answers, and the copy says TWO.
    expect(l.correct).toHaveLength(2);
    expect(new Set(l.correct).size).toBe(2);
    l.correct.forEach(i => expect(i).toBeLessThan(l.options.length));
    expect(l.scenario).toMatch(/[Ww]hich TWO/);
    expect(l.transfer.question).toBeTruthy();
    expect(l.transfer.why).toBeTruthy();
    expect(l.transfer.correct).toBeLessThan(l.transfer.options.length);
  });

  it.each(lessons.map(l => [l.id, l]))('%s has a sound journal', (id, l) => {
    expect(totalDebits(l.journal)).toBe(totalCredits(l.journal));
    // JournalBuilder and TransactionFlow key their cards on the account name, so a repeated
    // account inside one journal collides in React and renders only once.
    const used = l.journal.map(x => x.account);
    expect(new Set(used).size, `${id} repeats an account`).toBe(used.length);
    used.forEach(a => expect(accounts, `${id} uses unregistered account "${a}"`).toHaveProperty(a));
    l.journal.forEach(x => expect(x.why, `${id} has a line with no explanation`).toBeTruthy());
  });

  // Advanced mode renders troubleshooting[lesson.id] without a guard: a missing case is a crash.
  it.each(ids)('%s has a troubleshooting case', id => {
    const c = troubleshooting[id];
    expect(c).toBeDefined();
    expect(c.clues.length).toBeGreaterThan(0);
    expect(c.correct).toBeLessThan(c.options.length);
    expect(c.why && c.fix).toBeTruthy();
  });

  it('has no troubleshooting case without a lesson', () => {
    expect(Object.keys(troubleshooting).filter(id => !ids.includes(id))).toEqual([]);
  });

  it('routes every roadmap level to a real lesson', () => {
    expect(curriculum.filter(([, , id]) => !ids.includes(id))).toEqual([]);
  });
});

describe('answer positions', () => {
  it('is stable for the same content', () => {
    expect(shuffleChoices(['a', 'b', 'c'], 0, 'seed')).toEqual(shuffleChoices(['a', 'b', 'c'], 0, 'seed'));
  });

  it('keeps the correct answer pointing at the same option', () => {
    const { options, correct } = shuffleChoices(['right', 'wrong', 'also wrong'], 0, 'seed');
    expect(options[correct]).toBe('right');
  });

  // The original content listed the answer first every time, which made advanced mode guessable.
  it('does not put every troubleshooting answer in the same position', () => {
    const positions = new Set(Object.values(troubleshooting).map(c => c.correct));
    expect(positions.size).toBeGreaterThan(1);
  });

  it.each(supportCases.map(c => [c.id, c]))('%s has valid diagnosis and explanation indexes', (id, c) => {
    expect(c.correct).toBeLessThan(c.diagnoses.length);
    expect(c.explainCorrect).toBeLessThan(c.explanations.length);
    expect(c.questions.length).toBeGreaterThan(0);
  });
});

describe('Maple Coffee simulation', () => {
  it('gives every entry its own key', () => {
    const keys = entries.map(e => e.event_key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it.each(entries.map(e => [e.event_key, e]))('%s is a valid entry', (key, e) => {
    expect(totalDebits(e.lines)).toBeCloseTo(totalCredits(e.lines), 6);
    const used = e.lines.map(l => l.account);
    expect(new Set(used).size).toBe(used.length);
    used.forEach(a => expect(accounts).toHaveProperty(a));
    e.lines.forEach(l => expect(l.why).toBeTruthy());
    // The entity schema only accepts these three.
    expect(['Operating', 'Investing', 'Financing']).toContain(e.cash_category);
  });

  const balanced = list => { const s = summarize(list); return s.assets === s.liabilities + s.equity; };

  it('balances unadjusted', () => expect(balanced(businessEvents)).toBe(true));
  it('balances after adjusting entries', () => expect(balanced([...businessEvents, ...adjustingEvents])).toBe(true));
  it('balances after closing', () => expect(balanced(allEvents)).toBe(true));

  it('empties revenue and expenses on closing', () => {
    const s = summarize(allEvents);
    expect(s.revenue).toBe(0);
    expect(s.expenses).toBe(0);
    expect(Object.is(s.profit, -0)).toBe(false); // would render as "-$0"
  });

  it('moves the period result into equity rather than losing it', () => {
    const before = summarize([...businessEvents, ...adjustingEvents]);
    const after = summarize(allEvents);
    expect(after.equity).toBe(before.equity);
    expect(after.balances['Income summary']).toBe(0);
  });

  it('carries adjusting entries into the balance sheet', () => {
    const b = summarize([...businessEvents, ...adjustingEvents]).balances;
    expect(b['Accumulated depreciation']).toBeLessThan(0);
    expect(b['Allowance for doubtful accounts']).toBeLessThan(0);
  });
});

describe('contra accounts', () => {
  it.each([...contraAccounts])('%s is registered and names what it offsets', name => {
    expect(accounts).toHaveProperty(name);
    expect(contraOf[name]).toBeTruthy();
    expect(accounts).toHaveProperty(contraOf[name]);
  });
});

describe('reference data', () => {
  it.each(terms.map(t => [t[0], t]))('%s is a well-formed glossary row', (term, row) => {
    expect(row).toHaveLength(7);
    expect(glossaryGroups).toContain(row[6]);
    row.slice(0, 6).forEach(field => expect(field).toBeTruthy());
  });

  it('cites a source for every payroll figure', () => {
    payrollRates.forEach(r => expect(r.source).toMatch(/^https:\/\/www\.canada\.ca\//));
  });

  it('is scheduled for review after it was verified', () => {
    expect(reviewBy > verifiedOn).toBe(true);
  });
});
