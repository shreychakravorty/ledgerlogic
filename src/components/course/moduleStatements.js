import { q, card, lesson } from '@/components/course/courseHelpers';
export const statements = { id:'statements', area:'FINANCIAL ACCOUNTING', title:'Financial statements', summary:'The income statement, balance sheet, equity statement and cash flow statement, and how they connect.',
 lessons:[
  lesson('s-income','The income statement',4,[
   card('The income statement tells a period’s story','It covers a span of time, such as a month or a year, and answers one question: did the business earn more than it used up?'),
   card('Maple’s first year','',{rows:[['Revenue','$50,000'],['Cost of goods sold','($20,000)'],['Gross profit','$30,000'],['Operating expenses','($18,000)'],['Net income','$12,000']]}),
   card('Two subtotals worth knowing','',{rows:[['Gross profit','What is left after the cost of the goods themselves. It tells you whether pricing works.'],['Net income','What is left after every cost. It tells you whether the whole business works.']],tip:'Gross margin = gross profit ÷ revenue. For Maple: $30,000 ÷ $50,000 = 60%.'}),
   card('What does not belong here','',{points:['Loan proceeds and repayments of principal','Money the owner puts in or takes out','Equipment purchases (only their depreciation appears)','Sales tax collected for the government']})
  ],[
   q('Revenue $80,000, cost of goods sold $48,000, operating expenses $20,000. Gross profit is…',['$32,000','$12,000','$60,000'],'Gross profit is revenue minus cost of goods sold only: $80,000 − $48,000. Net income would be $12,000.'),
   q('Maple repays $5,000 of loan principal. On the income statement this is…',['Not shown','An expense of $5,000','A reduction of revenue'],'Repaying principal settles a liability. Only the interest on the loan is an expense.'),
   q('An income statement is dated…',['For the year ended December 31','As at December 31','At the date it was printed'],'It reports performance over a period, so it names the span it covers.')
  ]),
  lesson('s-balance','The balance sheet',4,[
   card('The balance sheet is a snapshot','It shows what the business owns and owes at one moment. It is the accounting equation laid out as a report.'),
   card('Maple at December 31','',{rows:[['Cash','$14,000'],['Accounts receivable','$6,000'],['Inventory','$5,000'],['Equipment, net of depreciation','$15,000'],['Total assets','$40,000'],['Accounts payable','$4,000'],['Bank loan','$10,000'],['Owner’s equity','$26,000'],['Total liabilities and equity','$40,000']]}),
   card('Current and non-current','',{rows:[['Current assets','Cash, or expected to become cash within a year'],['Non-current assets','Used for more than a year, like equipment'],['Current liabilities','Due within a year'],['Non-current liabilities','Due later, like the long-term part of a loan']],tip:'Maple’s current assets are $25,000 against $4,000 of supplier bills due soon. It can comfortably pay its near-term bills.'}),
   card('What it does not show','Assets are mostly at cost, not market value. Reputation, staff skill and loyal customers are missing entirely. A balance sheet is not a price tag for the business.')
  ],[
   q('Which is a current asset?',['Inventory','Equipment','A five-year bank loan'],'Inventory is expected to be sold within the year. Equipment is non-current and the loan is a liability.'),
   q('Total assets are $90,000 and total liabilities are $55,000. Equity on the balance sheet is…',['$35,000','$145,000','$55,000'],'The balance sheet is the equation: $90,000 − $55,000 = $35,000.'),
   q('A balance sheet is dated…',['As at a single date','For the year ended','For the month ended'],'It is a snapshot of one moment, unlike the income statement, which covers a span.')
  ]),
  lesson('s-equity','The statement of owner’s equity',3,[
   card('The bridge between the two','This statement explains how the owner’s stake changed during the period. It takes its key number from the income statement and hands its result to the balance sheet.'),
   card('Maple’s first year','',{rows:[['Capital at start of year','$0'],['Owner investment','$18,000'],['Net income','$12,000'],['Owner drawings','($4,000)'],['Capital at end of year','$26,000']]}),
   card('Drawings are not an expense','Money the owner takes for personal use reduces equity directly. It never touches the income statement, so it does not reduce profit.'),
   card('In a corporation','The idea is the same with different names. Owners hold share capital, profit accumulates in retained earnings, and payouts are dividends.',{tip:'Opening retained earnings + net income − dividends = closing retained earnings.'})
  ],[
   q('Opening capital $30,000, net income $14,000, drawings $9,000, no new investment. Closing capital is…',['$35,000','$53,000','$44,000'],'$30,000 + $14,000 − $9,000 = $35,000.'),
   q('The owner’s drawings appear on…',['The statement of owner’s equity','The income statement','Neither statement'],'They reduce the owner’s stake directly and are never an expense of the business.'),
   q('In a corporation, profit that has not been paid out collects in…',['Retained earnings','Share capital','Dividends payable'],'Retained earnings is the running total of profit kept in the company.')
  ],'drawings'),
  lesson('s-cashflow','The cash flow statement',5,[
   card('Profit is measured. Cash is counted.','The cash flow statement explains why the bank balance changed, sorting every movement into three kinds of activity.',{rows:[['Operating','Day-to-day business: customers, suppliers, staff'],['Investing','Buying and selling long-term assets'],['Financing','Owners and lenders: money in, money back out']]}),
   card('Start from profit, then undo the non-cash parts','Maple earned $12,000, but operations brought in only $8,000.',{rows:[['Net income','$12,000'],['Add back depreciation (no cash left)','$3,000'],['Receivables grew (sales not collected)','($6,000)'],['Inventory grew (cash tied up in stock)','($5,000)'],['Payables grew (bills not yet paid)','$4,000'],['Cash from operating activities','$8,000']]}),
   card('The other two sections','',{rows:[['Equipment bought (investing)','($18,000)'],['Owner invested (financing)','$18,000'],['Bank loan received (financing)','$10,000'],['Owner drawings (financing)','($4,000)']],tip:'Investing totals −$18,000. Financing totals +$24,000.'}),
   card('It must tie to the bank','',{rows:[['Operating','$8,000'],['Investing','($18,000)'],['Financing','$24,000'],['Change in cash','$14,000']],tip:'Maple started the year with nothing, so $14,000 is exactly the Cash on its balance sheet.'})
  ],[
   q('Buying a delivery van for cash is…',['An investing activity','An operating activity','A financing activity'],'Buying or selling long-term assets is investing. It is not a day-to-day operating cost.'),
   q('Why is depreciation added back to net income?',['It reduced profit without using any cash','It is a source of cash','It was recorded twice'],'Depreciation is an expense with no payment attached. Adding it back removes its effect to get to cash.'),
   q('Net income is $20,000 and accounts receivable grew by $7,000. All else equal, cash from operations is…',['$13,000','$27,000','$20,000'],'$7,000 of the sales counted in profit has not been collected yet, so cash is that much lower than profit.')
  ]),
  lesson('s-links','How the statements connect',3,[
   card('Four statements, prepared in order','',{points:['1. Income statement: finds net income','2. Statement of owner’s equity: uses net income','3. Balance sheet: uses closing equity','4. Cash flow statement: explains the change in cash']}),
   card('Follow Maple’s numbers across','',{rows:[['Net income $12,000','Income statement → equity statement'],['Closing capital $26,000','Equity statement → balance sheet'],['Cash $14,000','Cash flow statement = balance sheet']],tip:'If any of these three links breaks, something is wrong in the books.'}),
   card('Three statements, three questions','',{rows:[['Is it profitable?','Income statement'],['Is it financially sound?','Balance sheet'],['Can it pay its bills?','Cash flow statement']]}),
   card('Read the notes','Full financial statements come with notes. They explain the accounting policies chosen, such as the depreciation method, and details the numbers alone cannot show, such as loan terms.')
  ],[
   q('Which statement must be prepared first?',['Income statement','Balance sheet','Statement of owner’s equity'],'Net income is needed for the equity statement, and closing equity is needed for the balance sheet.'),
   q('An expense is accidentally left out. Which statements are wrong?',['Income statement, equity statement and balance sheet','Only the income statement','Only the balance sheet'],'Profit is overstated, which overstates closing equity, which misstates the balance sheet. Errors travel along the links.'),
   q('The ending cash on the cash flow statement should equal…',['Cash on the balance sheet','Net income','Total current assets'],'Both report the same bank and cash balances at the same date.')
  ])
 ],
 quiz:[
  q('Revenue $60,000, cost of goods sold $24,000, operating expenses $21,000. Net income is…',['$15,000','$36,000','$39,000'],'$60,000 − $24,000 − $21,000 = $15,000. The $36,000 is gross profit.'),
  q('Which item appears on the balance sheet?',['Accounts payable','Rent expense','Sales revenue'],'The balance sheet lists assets, liabilities and equity. Revenue and expenses belong to the income statement.'),
  q('A bank loan received is shown on the cash flow statement under…',['Financing activities','Operating activities','Investing activities'],'Money from lenders and owners is financing.'),
  q('A business is profitable but its cash fell. Which is the most likely cause?',['Inventory and receivables grew sharply','Depreciation was high','Suppliers gave longer payment terms'],'Profit that is tied up in stock and unpaid invoices has not become cash yet. The other two would leave more cash than profit, not less.'),
  q('Opening capital $40,000, net income $25,000, drawings $15,000. Closing capital is…',['$50,000','$80,000','$65,000'],'$40,000 + $25,000 − $15,000 = $50,000.'),
  q('Which of these reports on a single date rather than a period?',['Balance sheet','Income statement','Cash flow statement'],'The balance sheet is a snapshot. The other two cover a span of time.')
 ] };