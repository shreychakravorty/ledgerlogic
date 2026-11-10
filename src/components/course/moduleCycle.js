import { q, card, lesson, dr, cr } from '@/components/course/courseHelpers';
export const cycle = { id:'cycle', area:'FINANCIAL ACCOUNTING', title:'The accounting cycle', summary:'From source document to closed books: adjustments, depreciation and closing.',
 lessons:[
  lesson('c-steps','The cycle in eight steps',3,[
   card('The same loop, every period','Accounting is not random paperwork. Every month, quarter or year runs through the same steps in the same order.'),
   card('During the period','',{points:['1. Analyse each transaction from its source document','2. Record it in the journal','3. Post it to the ledger']}),
   card('At the end of the period','',{points:['4. Prepare a trial balance','5. Record adjusting entries','6. Prepare an adjusted trial balance','7. Prepare the financial statements','8. Close the books']}),
   card('What software changed, and what it did not','Tally and QuickBooks handle the recording mechanics, the posting, the trial balances, the statements and the year-end close in the background. Steps 1 and 5 still need a person who understands the transaction.',{tip:'This is why most client problems trace back to how a transaction was analysed, or to an adjustment nobody made.'})
  ],[
   q('Which comes first?',['Recording in the journal','Posting to the ledger','Preparing the trial balance'],'Entries are journalized, then posted to accounts, and only then can balances be listed.'),
   q('Financial statements are prepared from the…',['Adjusted trial balance','Unadjusted trial balance','Bank statement'],'Statements must include period-end adjustments, so they come from the balances after adjusting.'),
   q('Which step can software NOT do on its own?',['Decide that unpaid wages need to be accrued','Post an entry to the ledger','Total the trial balance'],'Posting and totalling are mechanical. Knowing that work was done but not yet recorded takes judgment.')
  ]),
  lesson('c-deferrals','Adjustments: when cash came first',4,[
   card('Why adjust at all?','During the period you record what the documents show. By the end, some balances no longer match reality, because time has passed. Adjusting entries bring them up to date.',{tip:'Every adjustment touches one income statement account and one balance sheet account. Never cash.'}),
   card('Prepaid expenses: paid first, used later','On January 1 Maple pays $6,000 for 12 months of insurance and records an asset. By January 31, one month is used: $6,000 ÷ 12 = $500.',{entry:[dr('Insurance expense',500),cr('Prepaid insurance',500)]}),
   card('Unearned revenue: paid first, earned later','A customer pays $1,200 for a 12-month coffee subscription. Maple records a liability. After the first month ships, $100 has been earned.',{entry:[dr('Unearned revenue',100),cr('Revenue',100)]}),
   card('Supplies: count what is left','Maple had $400 of cups on the books. A count finds $150 still on the shelf, so $250 was used.',{entry:[dr('Supplies expense',250),cr('Supplies',250)]})
  ],[
   q('Maple pays $2,400 on March 1 for 12 months of insurance. The March 31 adjustment is…',['Debit Insurance expense $200, credit Prepaid insurance $200','Debit Insurance expense $2,400, credit Cash $2,400','Debit Prepaid insurance $200, credit Insurance expense $200'],'One of twelve months has been used: $2,400 ÷ 12 = $200 moves from the asset to expense. Cash moved on March 1.'),
   q('If Maple forgets the unearned revenue adjustment, its statements will show…',['Liabilities too high and revenue too low','Liabilities too low and revenue too high','Cash too high'],'The earned portion is still sitting in the liability. Until it is moved, revenue is understated.'),
   q('Supplies started at $700, $500 more were bought, and $300 remain. Supplies expense is…',['$900','$300','$1,200'],'Available was $700 + $500 = $1,200. With $300 left, $900 was used.')
  ],'prepaid'),
  lesson('c-accruals','Adjustments: when cash comes later',4,[
   card('Accruals record what has not been billed or paid yet','The work is done or the cost is incurred in this period, but the paperwork and the cash arrive in the next.'),
   card('Accrued expenses','Staff worked the last three days of the month, earning $900, and payday is next week.',{entry:[dr('Wages expense',900),cr('Wages payable',900)]}),
   card('Accrued interest','A $10,000 loan at 6% a year costs $10,000 × 6% ÷ 12 = $50 each month, even when the bank only bills quarterly.',{entry:[dr('Interest expense',50),cr('Interest payable',50)]}),
   card('Accrued revenue','Maple finished a $700 catering job on the 30th but will invoice next week. It is earned now.',{entry:[dr('Accounts receivable',700),cr('Revenue',700)],tip:'A missed expense accrual overstates profit. A missed revenue accrual understates it.'})
  ],[
   q('Employees earned $1,200 in the last week of December, to be paid in January. Without an adjustment, December’s…',['Expenses and liabilities are both understated','Expenses are overstated','Cash is overstated'],'The cost belongs to December and Maple owes it at year-end. Leaving it out understates both.'),
   q('A $24,000 loan carries 5% annual interest. One month of accrued interest is…',['$100','$1,200','$120'],'$24,000 × 5% = $1,200 a year, and $1,200 ÷ 12 = $100 a month.'),
   q('When the accrued $900 of wages is finally paid, the debit goes to…',['Wages payable','Wages expense','Cash'],'The expense was recorded in the earlier period. Paying it settles the liability.')
  ],'accrued'),
  lesson('c-depreciation','Depreciation',4,[
   card('Long-lived assets are used up slowly','A $4,000 espresso machine serves for five years. Charging it all to one year would make that year look terrible and the next four look too good. Depreciation spreads the cost.'),
   card('Straight-line: the same amount each year','',{rows:[['Cost','$4,000'],['Expected resale value','$0'],['Useful life','5 years'],['Yearly depreciation','$800']],tip:'(Cost − resale value) ÷ useful life.'}),
   card('The entry uses a contra account','Equipment keeps showing its original cost. The used-up portion collects in Accumulated depreciation, which is subtracted from it.',{entry:[dr('Depreciation expense',800),cr('Accumulated depreciation',800)],tip:'After one year: $4,000 − $800 = $3,200 net book value.'}),
   card('Not a cash cost, and not a valuation','The cash left when the machine was bought. Net book value is simply cost not yet expensed, and says nothing about what the machine would sell for.')
  ],[
   q('A $12,000 van has a 4-year life and a $2,000 resale value. Straight-line depreciation per year is…',['$2,500','$3,000','$3,500'],'($12,000 − $2,000) ÷ 4 = $2,500. The resale value is never depreciated.'),
   q('After two years of $800 depreciation, the $4,000 machine’s Equipment account shows…',['$4,000','$2,400','$1,600'],'The asset account keeps the original cost. The $1,600 used so far sits in Accumulated depreciation, giving a net book value of $2,400.'),
   q('Accumulated depreciation is…',['A contra-asset with a credit balance','An expense','A liability'],'It sits with the assets and reduces them, so it carries the opposite balance to a normal asset.')
  ],'depreciation'),
  lesson('c-closing','Closing the books',4,[
   card('Two kinds of account','',{rows:[['Temporary','Revenue, expenses and drawings. They measure one period and then reset.'],['Permanent','Assets, liabilities and equity. Their balances carry forward.']]}),
   card('Closing empties the temporary accounts','',{points:['1. Close revenue to Income summary','2. Close expenses to Income summary','3. Close Income summary (the profit or loss) to Owner capital','4. Close drawings to Owner capital']}),
   card('With numbers','Maple earned $50,000 and used up $38,000. After the first two closing entries, Income summary holds a $12,000 credit: the profit.',{entry:[dr('Income summary',12000),cr('Owner capital',12000)],tip:'Profit is not cash. Closing moves a measurement into equity; the bank balance does not change.'}),
   card('After closing','A post-closing trial balance lists only permanent accounts. Revenue and expenses start the new year at zero.',{tip:'Tally and QuickBooks do this automatically at year-end. A corporation’s profit goes to Retained earnings instead of Owner capital.'})
  ],[
   q('Which account is closed at year-end?',['Rent expense','Accounts payable','Equipment'],'Expenses are temporary and reset each period. Liabilities and assets carry forward.'),
   q('The owner withdrew $4,000 during the year. The closing entry is…',['Debit Owner capital, credit Owner drawings','Debit Owner drawings, credit Cash','Debit Income summary, credit Owner drawings'],'Drawings are not an expense, so they skip Income summary and reduce capital directly.'),
   q('After closing, the Revenue account’s balance is…',['Zero','Last year’s total','Net income'],'Closing empties it so that next year’s revenue is measured from nothing.')
  ],'closing')
 ],
 quiz:[
  q('Adjusting entries are recorded…',['At the end of the period, before the statements','Whenever cash is received','After the books are closed'],'They update balances for the passage of time so the statements reflect the whole period.'),
  q('Which account never appears in an adjusting entry?',['Cash','Wages payable','Prepaid insurance'],'Adjustments record what happened without cash moving. If cash moved, it is an ordinary transaction.'),
  q('Maple paid $3,600 on July 1 for 12 months of rent in advance. At December 31, Prepaid rent should be…',['$1,800','$3,600','$300'],'Six months at $300 have been used, leaving six months, or $1,800, still prepaid.'),
  q('Failing to record depreciation makes…',['Profit and assets both too high','Profit too low','Liabilities too high'],'The expense is missing, so profit is overstated, and the asset is still shown at more than its remaining cost.'),
  q('Unearned revenue is…',['A liability','A revenue account','An asset'],'The business owes goods or services to a customer who has already paid.'),
  q('Which account appears on a post-closing trial balance?',['Accumulated depreciation','Sales revenue','Owner drawings'],'It is a permanent balance sheet account. Revenue and drawings were closed to zero.')
 ] };