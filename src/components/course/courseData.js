import { fundamentals } from '@/components/course/moduleFundamentals';
import { doubleEntry } from '@/components/course/moduleDoubleEntry';
import { cycle } from '@/components/course/moduleCycle';
import { statements } from '@/components/course/moduleStatements';
import { financial } from '@/components/course/moduleFinancial';
import { managerial } from '@/components/course/moduleManagerial';
import { gstHst } from '@/components/course/moduleGstHst';
import { incomeTax } from '@/components/course/moduleIncomeTax';
// Modules with `lessons` are fully written. Modules with `outline` are planned: the roadmap
// shows their lesson titles, and their content arrives in a later step.
const planned = (id, area, title, summary, outline) => ({ id, area, title, summary, outline });
export const modules = [
 fundamentals, doubleEntry, cycle, statements, financial, managerial, gstHst, incomeTax,
 planned('auditing','AUDITING','Auditing and assurance','How an independent accountant decides whether statements can be trusted.',['Audit, review and compilation engagements','Audit risk and materiality','Internal control','Assertions and audit evidence','Tests of controls and substantive procedures','Sampling','The auditor’s report and types of opinion','Fraud and professional scepticism']),
 planned('ethics','ETHICS','Professional ethics','The duties that make an accountant’s word worth something.',['The CPA Code of Professional Conduct','Integrity, objectivity and independence','Confidentiality','Conflicts of interest','A framework for ethical decisions','Responding to errors, fraud and non-compliance']),
 planned('analysis','ANALYSIS','Financial statement analysis','Reading statements the way a lender, investor or adviser does.',['Horizontal and vertical analysis','Liquidity ratios','Solvency and leverage','Profitability and the DuPont breakdown','Efficiency: turnover and the cash conversion cycle','Quality of earnings and red flags','Analysing cash flows']),
 planned('software','ACCOUNTING SOFTWARE','Accounting software','Setting up, running and troubleshooting Tally and QuickBooks properly.',['Designing a chart of accounts','Tally: ledgers, groups and vouchers','QuickBooks: items, bank feeds and matching','Period locks, audit trail and user permissions','Migration and opening balances','Reports and troubleshooting'])
];
export const writtenModules = modules.filter(m => m.lessons);
export const courseLessons = writtenModules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id })));
export const getModule = id => writtenModules.find(m => m.id === id);
export const findLesson = id => {
  for (const module of writtenModules) {
    const i = module.lessons.findIndex(l => l.id === id);
    if (i < 0) continue;
    const following = module.lessons[i + 1];
    const next = following ? { to: `/course/lesson?id=${following.id}`, label: `Next: ${following.title}` } : { to: `/course/quiz?module=${module.id}`, label: 'Take the module quiz' };
    return { lesson: module.lessons[i], module, position: i + 1, next };
  }
  return null;
};