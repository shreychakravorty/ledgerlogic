export const money = value => new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(value);
export const accounts = { Cash: 'Asset', 'Accounts receivable': 'Asset', Inventory: 'Asset', Equipment: 'Asset', 'Accounts payable': 'Liability', 'Loan payable': 'Liability', 'HST payable': 'Liability', 'Payroll payable': 'Liability', 'Owner capital': 'Equity', Revenue: 'Revenue', 'Cost of goods sold': 'Expense', Rent: 'Expense', Wages: 'Expense', Utilities: 'Expense', 'Bank fees': 'Expense' };
export const line = (account, debit = 0, credit = 0) => ({ account, debit, credit });
export function summarize(transactions) {
  const balances = Object.fromEntries(Object.keys(accounts).map(a => [a, 0]));
  transactions.forEach(t => t.lines.forEach(l => { balances[l.account] = (balances[l.account] || 0) + l.debit - l.credit; }));
  const total = type => Object.entries(balances).filter(([a]) => accounts[a] === type).reduce((sum, [, n]) => sum + n, 0);
  const revenue = -total('Revenue'), expenses = total('Expense'), profit = revenue - expenses;
  return { balances, revenue, expenses, profit, assets: total('Asset'), liabilities: -total('Liability'), equity: -total('Equity') + profit, units: transactions.reduce((s, t) => s + (t.inventory_units || 0), 0) };
}
const event = (day, description, lines, cash_category = 'Operating', extra = {}) => ({ event_key: `day-${day}`, day, description, lines, cash_category, ...extra });
export const businessEvents = [
  event(1, 'You invest $20,000 to open Maple Coffee.', [line('Cash',20000),line('Owner capital',0,20000)],'Financing',{software:'Tally: Receipt voucher → capital ledger. QuickBooks: Bank deposit → owner equity.'}),
  event(5, 'Roast Supply delivers 300 bags at $10 each on credit.', [line('Inventory',3000),line('Accounts payable',0,3000)],'Operating',{inventory_units:300,party:'Roast Supply',software:'Tally: Purchase voucher with stock items. QuickBooks: Bill with inventory items.'}),
  event(10, 'Pay $2,000 for the first month’s rent.', [line('Rent',2000),line('Cash',0,2000)]),
  event(15, 'Buy a $4,000 espresso machine with cash.', [line('Equipment',4000),line('Cash',0,4000)],'Investing'),
  event(20, 'Sell 100 bags for $2,500 in cash; they cost $1,000.', [line('Cash',2500),line('Revenue',0,2500),line('Cost of goods sold',1000),line('Inventory',0,1000)],'Operating',{inventory_units:-100}),
  event(25, 'Run payroll: $1,500 gross, $300 withheld, $1,200 paid.', [line('Wages',1500),line('Cash',0,1200),line('Payroll payable',0,300)]),
  event(30, 'Invoice Cedar Studio $2,000 for 80 bags, due in 30 days.', [line('Accounts receivable',2000),line('Revenue',0,2000),line('Cost of goods sold',800),line('Inventory',0,800)],'Operating',{inventory_units:-80,party:'Cedar Studio'}),
  event(35, 'Receive $1,000 against Cedar Studio’s invoice.', [line('Cash',1000),line('Accounts receivable',0,1000)],'Operating',{party:'Cedar Studio',software:'Tally: Receipt allocated against the bill. QuickBooks: Receive payment linked to the invoice. Do not create a second sale.'}),
  event(40, 'Pay Roast Supply $2,000 against its bill.', [line('Accounts payable',2000),line('Cash',0,2000)],'Operating',{party:'Roast Supply'}),
  event(45, 'The bank advances a $10,000 business loan.', [line('Cash',10000),line('Loan payable',0,10000)],'Financing'),
  event(50, 'Pay a $250 electricity bill.', [line('Utilities',250),line('Cash',0,250)]),
  event(55, 'Sell 40 bags for $1,000 plus $130 Ontario HST, paid now.', [line('Cash',1130),line('Revenue',0,1000),line('HST payable',0,130),line('Cost of goods sold',400),line('Inventory',0,400)],'Operating',{inventory_units:-40}),
  event(60, 'Buy another 100 bags for $1,000 on credit.', [line('Inventory',1000),line('Accounts payable',0,1000)],'Operating',{inventory_units:100,party:'Roast Supply'}),
  event(65, 'Cedar returns 10 unopened bags: credit $250 and restock $100.', [line('Revenue',250),line('Accounts receivable',0,250),line('Inventory',100),line('Cost of goods sold',0,100)],'Operating',{inventory_units:10,party:'Cedar Studio'}),
  event(70, 'Refund $125 for 5 returned bags from the tax-free cash sale.', [line('Revenue',125),line('Cash',0,125),line('Inventory',50),line('Cost of goods sold',0,50)],'Operating',{inventory_units:5}),
  event(75, 'Find an unrecorded $35 bank service fee.', [line('Bank fees',35),line('Cash',0,35)]),
  event(80, 'Remit the $300 payroll withholding liability.', [line('Payroll payable',300),line('Cash',0,300)]),
  event(90, 'Pay the $130 HST balance to the tax authority.', [line('HST payable',130),line('Cash',0,130)])
];
export const curriculum = [
 ['What is accounting actually doing?', 'Build your transaction intuition', 'equipment'], ['Think like an accountant', 'Journals, ledgers & double entry', 'capital'], ['Follow one dollar', 'From a sale to your statements', 'invoice'], ['The three financial statements', 'Profit is not the same as cash', 'collection'], ['The accounting cycle', 'From source documents to closing', 'rent'], ['Receivables & payables', 'Track who owes whom', 'collection'], ['Bank reconciliation', 'Make the bank and books agree', 'bank'], ['Inventory', 'Follow the cost, not just the stock', 'inventory'], ['GST/HST & sales tax', 'Separate your revenue from tax', 'tax'], ['Payroll', 'Gross pay, net pay & liabilities', 'payroll'], ['Fix the books', 'Investigate before you correct', 'bank'], ['Tally mode', 'Think in ledgers and vouchers', 'equipment'], ['QuickBooks mode', 'Understand the accounting underneath', 'invoice']
];