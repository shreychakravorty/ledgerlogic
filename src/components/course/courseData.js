import { fundamentals } from '@/components/course/moduleFundamentals';
import { doubleEntry } from '@/components/course/moduleDoubleEntry';
import { cycle } from '@/components/course/moduleCycle';
import { statements } from '@/components/course/moduleStatements';
// Modules with `lessons` are fully written. Modules with `outline` are planned: the roadmap
// shows their lesson titles, and their content arrives in a later step.
const planned = (id, area, title, summary, outline) => ({ id, area, title, summary, outline });
export const modules = [
 fundamentals, doubleEntry, cycle, statements,
 planned('financial','FINANCIAL ACCOUNTING','Assets, liabilities and equity in depth','The harder measurement questions behind each line of the balance sheet.',['Cash and internal control','Receivables and credit losses','Inventory costing: FIFO, weighted average, lower of cost and net realisable value','Property, plant and equipment','Current liabilities and payroll','Long-term debt and leases','Partnerships and corporations: share capital, dividends, retained earnings']),
 planned('managerial','MANAGERIAL & COST ACCOUNTING','Managerial and cost accounting','Numbers for decisions inside the business: what things cost and what to do about it.',['Cost behaviour: fixed, variable and mixed','Cost-volume-profit and break-even','Job-order costing','Process costing','Activity-based costing','Budgeting and the master budget','Standard costs and variance analysis','Relevant costs for decisions','Capital budgeting: payback and net present value']),
 planned('gst-hst','TAXATION','Canadian GST/HST','How Canada’s sales tax works, from registration to filing.',['How a value-added tax works','Registration and the small-supplier threshold','Taxable, zero-rated and exempt supplies','Place of supply and provincial rates','Input tax credits','Filing, remitting and the quick method','Common errors and CRA reviews']),
 planned('income-tax','TAXATION','Canadian income tax','Personal and corporate income tax for small-business clients.',['How the Income Tax Act is organised','Residency and the sources of income','Employment income and deductions','Business income and deductible expenses','Capital cost allowance','Capital gains and losses','Personal tax: the T1, credits and brackets','Corporate tax: the T2 and the small business deduction','Owner compensation: salary versus dividends','Instalments, deadlines and penalties']),
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