import { accounts, money, isContra } from '@/components/accounting/accountingData';
export const lineSide = l => (l.debit ? 'debit' : 'credit');
// Explanatory copy for the contra accounts. Which accounts ARE contra lives in accountingData
// (`contraAccounts`); this map only holds how to explain each one.
const contra = {
  'Accumulated depreciation': 'Accumulated depreciation is a contra-asset: it lives next to Equipment but carries a credit balance, because its only job is to subtract from the asset’s cost.',
  'Allowance for doubtful accounts': 'The allowance is a contra-asset: it sits against receivables with a credit balance so net receivables show what is realistically collectible.',
  'Sales discounts': 'Sales discounts is a contra-revenue account. Revenue normally sits on the credit side, so anything that reduces it is a debit.',
  'Owner drawings': 'Owner drawings is a contra-equity account. Equity grows with credits, so taking equity out is a debit.'
};
const hooks = {
  Asset: (a, up) => up ? `${a} is something Maple owns, and it just grew. In everyday language “credit” feels like receiving — your bank credits you when money arrives — but that is the bank recording what it owes you. In Maple’s own books, assets grow on the debit side.` : `${a} is an asset Maple is giving up or using up. Your bank calls money leaving a “debit”, but that is the bank’s point of view. In Maple’s books a shrinking asset is a credit.`,
  Liability: (a, up) => up ? `${a} is an amount Maple owes. Owing more is a credit — it is the other side of whatever Maple received.` : `${a} was a debt. Paying it down or settling it shrinks a liability, and liabilities shrink on the debit side. That debit is not an expense.`,
  Equity: (a, up) => up ? `${a} is the owner’s claim on the business. Like a liability, it grows with a credit.` : `${a} is being reduced, and equity accounts shrink on the debit side.`,
  Revenue: (a, up) => up ? `${a} is income earned. Revenue increases the owner’s claim, so it grows on the credit side — even though the cash that comes with it is a debit.` : `${a} is being reversed or reduced. Revenue normally sits on the credit side, so reducing it takes a debit.`,
  Expense: (a, up) => up ? `${a} is a cost that has been used up. Expenses are debited: they sit on the same side as assets because both are things the business paid for — one still has future value, the other is gone.` : `${a} is being reduced — a cost that was recorded is coming back out, so the expense is credited.`
};
export function explainWrongSide(line) {
  const type = accounts[line.account] || 'Asset', correct = lineSide(line), chosen = correct === 'debit' ? 'credit' : 'debit';
  const normalDebit = ['Asset', 'Expense'].includes(type) !== isContra(line.account);
  const up = normalDebit ? correct === 'debit' : correct === 'credit';
  const hook = contra[line.account] || hooks[type](line.account, up);
  return `You put ${money(line.debit + line.credit)} on the ${chosen} side. ${hook}${line.why ? ` Here: ${line.why}` : ''}`;
}