import { q, card, lesson, dr, cr } from '@/components/course/courseHelpers';
export const financial = { id:'financial', area:'FINANCIAL ACCOUNTING', title:'Assets, liabilities and equity in depth', summary:'The harder measurement questions behind each line of the balance sheet.',
 lessons:[
  lesson('fa-cash','Cash and internal control',4,[
   card('Cash is the easiest asset to lose','It is small, valuable and untraceable, so businesses build routines called internal controls to protect it and to keep the records reliable.'),
   card('Split the duties','',{rows:[['Custody','Handling the cash or signing the cheque'],['Recording','Entering the transaction in the books'],['Authorization','Approving the payment or refund']],tip:'No one person should do all three. In a tiny business, the owner reviewing the bank statement is the substitute control.'}),
   card('The bank reconciliation is a control','Each month, explain every difference between the bank statement and the books.',{rows:[['Outstanding cheques','In the books, not yet at the bank: subtract from the bank balance'],['Deposits in transit','In the books, not yet at the bank: add to the bank balance'],['Bank fees and interest','At the bank, not yet in the books: record them'],['Errors','Fix whichever side is wrong']]}),
   card('Worked example','The bank statement shows $9,200. A $600 deposit is in transit and $1,100 of cheques are outstanding. The books show $8,735 before a $35 bank fee.',{rows:[['Adjusted bank balance','$9,200 + $600 − $1,100 = $8,700'],['Adjusted book balance','$8,735 − $35 = $8,700']],tip:'Only the book-side items need journal entries.'})
  ],[
   q('Which combination of duties is the biggest risk?',['One person opens the mail, deposits cheques and records customer payments','One person records sales and another deposits the cash','The owner signs cheques prepared by the bookkeeper'],'Someone with both custody and recording can take a cheque and hide it in the books.'),
   q('The bank shows $5,000. Deposits in transit are $800 and outstanding cheques are $1,300. The adjusted bank balance is…',['$4,500','$5,500','$7,100'],'$5,000 + $800 − $1,300 = $4,500.'),
   q('Which reconciling item needs a journal entry in the company’s books?',['A bank service charge','An outstanding cheque','A deposit in transit'],'The books already include the cheque and the deposit. Only the bank charge is missing from them.')
  ],'bank'),
  lesson('fa-receivables','Receivables and credit losses',4,[
   card('Not every invoice gets paid','Selling on credit creates receivables, and some will fail. The balance sheet should show what Maple expects to collect, not everything it is owed.'),
   card('The allowance method','Estimate the loss in the period of the sale, before knowing which customer will fail.',{entry:[dr('Bad debt expense',200),cr('Allowance for doubtful accounts',200)],tip:'Receivables $10,000 less allowance $200 = $9,800 expected to be collected.'}),
   card('Aging makes the estimate smarter','The older an invoice, the less likely it is to be paid.',{rows:[['Current: $6,000 at 1%','$60'],['31 to 60 days: $3,000 at 5%','$150'],['Over 90 days: $1,000 at 40%','$400'],['Allowance needed','$610']]}),
   card('Writing off a dead account','When Oak Café’s $150 is confirmed uncollectible, use up the allowance. No new expense is recorded.',{entry:[dr('Allowance for doubtful accounts',150),cr('Accounts receivable',150)],tip:'IFRS calls the estimate an expected credit loss and makes it forward-looking. ASPE records an impairment when collection is in doubt. The mechanics are the same.'})
  ],[
   q('The aging schedule says the allowance should be $610. It currently holds $200. Bad debt expense for the period is…',['$410','$610','$810'],'The entry tops the allowance up to the required balance: $610 − $200 = $410.'),
   q('Writing off a specific customer against the allowance changes net receivables by…',['Nothing','The amount written off, downward','The amount written off, upward'],'Receivables and the allowance fall by the same amount, so the net figure does not move.'),
   q('Why not simply expense bad debts when a customer finally fails?',['The loss would land in a later period than the sale that caused it','It would overstate expenses','It would overstate receivables forever'],'Matching puts the expected cost of selling on credit in the same period as the revenue.')
  ],'baddebt'),
  lesson('fa-inventory','Inventory costing',4,[
   card('Identical goods, different costs','Maple buys 100 bags at $10, then 100 more at $12, and sells 150. Which costs left the shelf? A cost formula decides.'),
   card('FIFO: oldest costs out first','',{rows:[['Cost of goods sold','100 × $10 + 50 × $12 = $1,600'],['Ending inventory','50 × $12 = $600']]}),
   card('Weighted average: one blended cost','',{rows:[['Average cost','$2,200 ÷ 200 = $11'],['Cost of goods sold','150 × $11 = $1,650'],['Ending inventory','50 × $11 = $550']],tip:'Both methods split the same $2,200. LIFO is not permitted under ASPE or IFRS.'}),
   card('Lower of cost and net realisable value','If stock can only be sold for less than it cost, write it down. Net realisable value is the expected selling price less the costs of selling. Here, 50 bags that cost $600 will now fetch only $300.',{entry:[dr('Inventory write-down',300),cr('Inventory',300)]})
  ],[
   q('Prices are rising. Compared with weighted average, FIFO gives…',['Lower cost of goods sold and higher profit','Higher cost of goods sold and lower profit','The same profit'],'FIFO releases the older, cheaper costs first, leaving the newer, dearer costs in inventory.'),
   q('Maple buys 10 units at $20, then 10 at $30, and sells 5. Under weighted average, cost of goods sold is…',['$125','$100','$150'],'Average cost is $500 ÷ 20 = $25, and 5 × $25 = $125.'),
   q('Stock that cost $1,000 can be sold for $900, with $150 of selling costs. It is reported at…',['$750','$900','$1,000'],'Net realisable value is $900 − $150 = $750, which is lower than cost.')
  ],'fifo'),
  lesson('fa-ppe','Property, plant and equipment',5,[
   card('What goes into cost','Capitalize everything needed to get the asset ready to use.',{rows:[['Purchase price','Yes'],['Delivery and installation','Yes'],['Taxes that cannot be recovered','Yes'],['Staff training and routine repairs','No: expense them']]}),
   card('Three ways to spread it','',{rows:[['Straight-line','The same amount each year'],['Declining balance','A fixed percentage of the remaining book value: more early, less later'],['Units of production','Based on actual use, such as kilometres driven']],tip:'ASPE calls this amortization. IFRS calls it depreciation. Same idea.'}),
   card('Declining balance in numbers','A $10,000 van at 30% a year.',{rows:[['Year 1','$10,000 × 30% = $3,000'],['Year 2','$7,000 × 30% = $2,100'],['Book value after two years','$4,900']]}),
   card('Selling or scrapping','Remove the cost and the accumulated depreciation, then compare the proceeds with book value. Here a $4,000 machine with $2,400 of accumulated depreciation sells for $1,000.',{entry:[dr('Cash',1000),dr('Accumulated depreciation',2400),dr('Loss on disposal',600),cr('Equipment',4000)],tip:'IFRS also requires significant parts of an asset to be depreciated separately, and allows revaluation to fair value. ASPE keeps to cost.'})
  ],[
   q('Maple buys an oven for $8,000, pays $400 for delivery and $600 for installation. The asset is recorded at…',['$9,000','$8,000','$8,400'],'All costs needed to bring the oven into use are part of its cost.'),
   q('A $20,000 machine is depreciated at 25% declining balance. Year 2 depreciation is…',['$3,750','$5,000','$2,500'],'Year 1 is $5,000, leaving $15,000. Year 2 is $15,000 × 25% = $3,750.'),
   q('An asset with a book value of $1,600 is sold for $2,000. Maple records…',['A $400 gain','A $400 loss','$2,000 of revenue'],'Proceeds exceed book value by $400. It is a gain on disposal, not sales revenue.')
  ],'disposal'),
  lesson('fa-liabilities','Current liabilities and payroll',5,[
   card('Due within a year','',{rows:[['Accounts payable','Supplier bills'],['Accrued liabilities','Costs incurred but not yet billed'],['Unearned revenue','Customer money for work still to do'],['GST/HST payable','Tax collected, less credits'],['Payroll remittances','Amounts withheld for the CRA'],['Current portion of long-term debt','Principal due in the next 12 months']]}),
   card('Payroll creates two layers of cost','Gross pay is the first. On top of it, the employer pays its own share of CPP and EI.',{points:['The employer matches the employee’s CPP dollar for dollar','The employer pays 1.4 times the employee’s EI premium'],tip:'Rates change every January. Learn the structure, and look up the year’s figures.'}),
   card('A payroll entry','Gross pay $2,000. Withheld from the employee: $300 income tax, $110 CPP and $30 EI. (Illustrative amounts.)',{entry:[dr('Wages expense',2000),cr('Payroll remittances payable',440),cr('Cash',1560)]}),
   card('Then the employer’s share','CPP match of $110, plus EI of 1.4 × $30 = $42.',{entry:[dr('Employer payroll expense',152),cr('Payroll remittances payable',152)],tip:'Total owed to the CRA: $592. The true cost of this $2,000 pay is $2,152.'}),
   card('Uncertain liabilities','A lawsuit or warranty claim may or may not cost money.',{rows:[['ASPE','Record it when a loss is likely and can be estimated'],['IFRS','Record a provision when a loss is more likely than not']],tip:'Otherwise, disclose it in the notes.'})
  ],[
   q('An employee has $50 of EI withheld. The employer’s own EI cost is…',['$70','$50','$120'],'The employer pays 1.4 times the employee premium: 1.4 × $50 = $70.'),
   q('Maple has a $30,000 loan and will repay $6,000 of principal in the next year. The balance sheet shows…',['$6,000 current and $24,000 long-term','$30,000 long-term','$30,000 current'],'The part due within 12 months is a current liability.'),
   q('Amounts withheld from employees’ pay are…',['A liability until remitted','An expense when remitted','Revenue for the employer'],'The money belongs to the CRA. The wage expense was the gross pay.')
  ],'payrollemployer'),
  lesson('fa-debt','Long-term debt and leases',4,[
   card('Every loan payment has two parts','Interest is an expense. Principal is a reduction of the liability. Only the interest reaches the income statement.'),
   card('A blended payment','Maple owes $12,000 at 6% and pays $500 a month. Interest is $12,000 × 6% ÷ 12 = $60, so $440 repays principal and the balance falls to $11,560.',{entry:[dr('Interest expense',60),dr('Loan payable',440),cr('Cash',500)]}),
   card('Leases: renting, or buying in disguise?','',{rows:[['ASPE','A capital lease goes on the balance sheet when it transfers substantially all the risks and rewards of ownership. Otherwise it is an operating lease, expensed as rent.'],['IFRS 16','Lessees put almost every lease on the balance sheet, as a right-of-use asset and a lease liability.']]}),
   card('Why it matters','A lease on the balance sheet adds both an asset and a debt. That changes the ratios a lender looks at, even though the cash payments are identical.')
  ],[
   q('A loan balance is $20,000 at 9% a year. This month’s $650 payment includes interest of…',['$150','$1,800','$650'],'$20,000 × 9% ÷ 12 = $150. The other $500 repays principal.'),
   q('Under IFRS 16, a five-year equipment lease is recorded by the lessee as…',['A right-of-use asset and a lease liability','Rent expense only','A prepaid expense'],'IFRS brings almost all leases onto the lessee’s balance sheet.'),
   q('Recording a whole loan payment as interest expense would…',['Understate profit and overstate the loan','Overstate profit','Leave the balance sheet correct'],'The principal portion is not an expense. Expensing it lowers profit and leaves the liability too high.')
  ],'interest'),
  lesson('fa-equity','Partnerships and corporations',4,[
   card('Three ways to own a business','',{rows:[['Proprietorship','One owner. Owner capital and drawings.'],['Partnership','Two or more owners. A capital account for each partner.'],['Corporation','A separate legal person. Share capital and retained earnings.']]}),
   card('Sharing partnership income','Ana and Ben earn $90,000 and share it 2:1.',{rows:[['Ana','$90,000 × 2/3 = $60,000'],['Ben','$90,000 × 1/3 = $30,000']],tip:'With no agreement, partners share equally. Each partner is taxed personally on their share, whether or not they withdraw it.'}),
   card('Issuing shares','A corporation raises $50,000 by issuing common shares.',{entry:[dr('Cash',50000),cr('Share capital',50000)]}),
   card('Dividends','A dividend becomes a liability on the day the directors declare it, not the day it is paid.',{entry:[dr('Retained earnings',5000),cr('Dividends payable',5000)],tip:'Dividends are a distribution of profit, never an expense. A shareholder who takes money without a salary or dividend creates a shareholder loan.'})
  ],[
   q('Partners share income 3:2. Income is $100,000. The first partner’s share is…',['$60,000','$50,000','$40,000'],'Three of five parts: $100,000 × 3/5 = $60,000.'),
   q('A corporation declares a $10,000 dividend to be paid next month. Today…',['Retained earnings falls and a liability is recorded','Nothing is recorded until payment','Dividend expense is recorded'],'Declaration creates the obligation. Dividends reduce retained earnings directly.'),
   q('In a corporation, the owners’ original investment is recorded in…',['Share capital','Retained earnings','Owner capital'],'Share capital holds what shareholders paid in. Retained earnings holds accumulated profit.')
  ],'shareholder')
 ],
 quiz:[
  q('Receivables are $40,000 and the allowance for doubtful accounts is $1,500. The balance sheet shows net receivables of…',['$38,500','$41,500','$40,000'],'The allowance is a contra-asset: $40,000 − $1,500.'),
  q('Purchases: 50 units at $8, then 50 at $10. 60 are sold. FIFO cost of goods sold is…',['$500','$540','$600'],'50 × $8 + 10 × $10 = $500.'),
  q('Which cost is capitalized as part of a new machine?',['Installation','The first year of repairs','Operator wages'],'Installation is needed to bring the asset into use. Repairs and wages are running costs.'),
  q('ASPE’s word for depreciation is…',['Amortization','Impairment','Depletion'],'ASPE uses amortization for the systematic allocation of an asset’s cost.'),
  q('A dividend is…',['A distribution of profit to shareholders','An operating expense','A liability from the day the company is formed'],'It reduces retained earnings and never appears on the income statement.'),
  q('In a finished bank reconciliation, the adjusted bank balance and the adjusted book balance are…',['Equal','Different by the outstanding cheques','Different by the bank fees'],'Once every reconciling item is applied to the right side, both show the true cash balance.')
 ] };