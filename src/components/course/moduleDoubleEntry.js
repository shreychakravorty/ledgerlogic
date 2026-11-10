import { q, card, lesson, dr, cr } from '@/components/course/courseHelpers';
export const doubleEntry = { id:'double-entry', area:'FOUNDATIONS', title:'Double-entry bookkeeping', summary:'Debits, credits, T-accounts, journal entries and the trial balance.',
 lessons:[
  lesson('d-debits','Debits and credits',4,[
   card('Debit means left. Credit means right.','That is all the words mean. Every account has a left side and a right side, and neither side is good or bad.',{tip:'Dr and Cr are just the abbreviations.'}),
   card('Which side makes an account grow?','',{rows:[['Assets','grow with a debit'],['Expenses','grow with a debit'],['Liabilities','grow with a credit'],['Equity','grows with a credit'],['Revenue','grows with a credit']],tip:'The side that increases an account is called its normal balance.'}),
   card('Why those sides?','Follow the equation. Assets sit on the left of Assets = Liabilities + Equity, so they grow on the left. Liabilities and equity sit on the right, so they grow on the right.',{points:['Revenue increases equity, so it grows with a credit too.','Expenses reduce equity, so they grow with a debit.']}),
   card('Your bank statement says the opposite','When the bank “credits” your account, it is speaking from its own books: your deposit is money the bank owes you, a liability for the bank. In your books that same cash is an asset, so it is a debit.'),
   card('Debits always equal credits','Every entry has at least one debit and one credit, and the totals match. That is double entry, and it is what keeps the equation balanced.')
  ],[
   q('Maple receives cash from a customer. Cash is…',['Debited, because an asset is increasing','Credited, because money came in','Credited, because the bank credits deposits'],'Cash is an asset and assets grow on the debit side. The bank’s wording describes the bank’s books, not Maple’s.'),
   q('Which account normally carries a credit balance?',['Accounts payable','Equipment','Rent expense'],'Accounts payable is a liability, and liabilities grow with credits. Equipment and expenses grow with debits.'),
   q('To decrease a liability you…',['Debit it','Credit it','Leave it and credit cash only'],'An account shrinks on the side opposite its normal balance. Liabilities grow with credits, so they shrink with debits.')
  ]),
  lesson('d-taccounts','T-accounts and the ledger',3,[
   card('A T-account is one account, drawn simply','Debits go on the left of the T, credits on the right. The difference between the two sides is the balance.'),
   card('Maple’s Cash account','',{rows:[['Debit: owner investment','$20,000'],['Debit: cash sale','$2,500'],['Credit: rent paid','$2,000'],['Credit: machine bought','$4,000'],['Balance','$16,500 debit']],tip:'Debits total $22,500 and credits total $6,000. The $16,500 difference sits on the debit side, where an asset belongs.'}),
   card('The ledger is every T-account together','The general ledger holds one account for each line in the chart of accounts. Its balances are what the financial statements are built from.'),
   card('An odd balance is a clue','If Cash shows a credit balance, the books say the business has less than no money. Either the account is overdrawn or something was recorded on the wrong side.',{tip:'Unusual balances are one of the fastest ways to spot an error in a client file.'})
  ],[
   q('Accounts payable has credits of $9,000 and debits of $5,500. Its balance is…',['$3,500 credit','$3,500 debit','$14,500 credit'],'Credits exceed debits by $3,500, so that is the balance, on the credit side where a liability normally sits.'),
   q('Inventory shows a credit balance. This most likely means…',['Sales were recorded before the purchases that supplied them','The business is very profitable','Inventory is a liability'],'An asset cannot truly be negative. A credit balance says more stock left the books than ever came in, so a purchase is missing or misdated.'),
   q('The general ledger is…',['The full set of accounts and their balances','A list of unpaid customer invoices','The bank statement'],'The ledger gathers every account in one place. Reports for customers or the bank are narrower views.')
  ]),
  lesson('d-journal','Journal entries',4,[
   card('Transactions enter through the journal','Each transaction starts with evidence, such as an invoice, receipt or bank line, and is written as a journal entry in date order.',{points:['The date','Accounts debited, listed first','Accounts credited, indented','A short description']}),
   card('Four questions build any entry','',{points:['Which accounts are affected?','What type is each one?','Did each go up or down?','So is each a debit or a credit?']}),
   card('Try it: coffee bought on credit','Roast Supply delivers $3,000 of coffee bags, to be paid next month. Inventory (asset) went up, so debit. Accounts payable (liability) went up, so credit.',{entry:[dr('Inventory',3000),cr('Accounts payable',3000)]}),
   card('Then part of the bill is paid','Maple pays $2,000 of it. Accounts payable went down, so debit. Cash went down, so credit. No expense appears, because nothing new was used up.',{entry:[dr('Accounts payable',2000),cr('Cash',2000)]})
  ],[
   q('The owner invests $20,000 in Maple. The entry is…',['Debit Cash, credit Owner capital','Debit Owner capital, credit Cash','Debit Cash, credit Revenue'],'Cash (asset) increased, so debit. The owner’s stake (equity) increased, so credit. Nothing was earned from a customer.'),
   q('Maple pays $250 cash for electricity used this month. The entry is…',['Debit Utilities expense, credit Cash','Debit Cash, credit Utilities expense','Debit Accounts payable, credit Cash'],'An expense increased, so debit. Cash decreased, so credit. No bill had been recorded earlier, so no payable is involved.'),
   q('In a standard journal entry, which line comes first?',['The debit','The credit','The larger amount'],'By convention debits are listed first and credits are indented below them.')
  ],'capital'),
  lesson('d-compound','Compound entries and posting',4,[
   card('Some transactions touch three or more accounts','A compound entry simply has more lines. The rule does not change: total debits equal total credits.'),
   card('A sale with HST','Maple sells a $1,000 service in Ontario plus 13% HST, paid on the spot.',{entry:[dr('Cash',1130),cr('Revenue',1000),cr('HST payable',130)],tip:'Only $1,000 was earned. The $130 is held for the CRA.'}),
   card('A sale of goods is really two entries','Selling inventory records the sale, and also moves the cost of those goods from asset to expense.',{entry:[dr('Cash',2500),cr('Revenue',2500),dr('Cost of goods sold',1000),cr('Inventory',1000)]}),
   card('Posting moves entries into the ledger','Each line of the journal is copied to its account in the ledger. Software does this the moment a transaction is saved.',{tip:'Customer and supplier balances live in subledgers. Their totals must agree with the Accounts receivable and Accounts payable control accounts.'})
  ],[
   q('Payroll: gross wages $1,500, $300 withheld for the CRA, $1,200 paid to staff. Wages expense is debited for…',['$1,500','$1,200','$300'],'The full $1,500 of work was used. Cash is credited $1,200 and the $300 withheld is credited to a payroll liability.'),
   q('Maple sells goods for $900 cash that cost $350. Besides Cash and Revenue, which accounts move?',['Cost of goods sold up, Inventory down','Inventory up, Accounts payable up','Cost of goods sold down, Inventory up'],'The goods left the shelf, so the asset falls and their cost becomes an expense.'),
   q('A compound entry has debits of $1,130 and credits of $1,000 so far. What is missing?',['A $130 credit','A $130 debit','Nothing, it is complete'],'Debits must equal credits. The entry needs another $130 on the credit side.')
  ],'tax'),
  lesson('d-trial','The trial balance',4,[
   card('The trial balance is a balance check','List every account with its balance, debits in one column and credits in the other. The two columns should total the same.'),
   card('What a small one looks like','',{rows:[['Cash','$16,500 debit'],['Inventory','$2,000 debit'],['Equipment','$4,000 debit'],['Cost of goods sold','$1,000 debit'],['Rent expense','$2,000 debit'],['Accounts payable','$3,000 credit'],['Owner capital','$20,000 credit'],['Revenue','$2,500 credit']],tip:'Both columns total $25,500.'}),
   card('Balanced does not mean correct','A trial balance only proves that debits equal credits. These errors slip straight through:',{points:['A transaction never recorded','The right amount in the wrong account','An entry recorded twice','Debit and credit swapped']}),
   card('When it does not balance','The size of the difference points to the cause.',{rows:[['Divisible by 9','Two digits were transposed, such as 540 entered as 450'],['Divisible by 2','An amount of half the difference is on the wrong side'],['Equals one balance','That account was left off the list']]})
  ],[
   q('Rent of $2,000 was recorded as a debit to Equipment. The trial balance will…',['Still balance','Be out by $2,000','Be out by $4,000'],'A debit was still matched by a credit. The mistake is in which account was used, and a trial balance cannot see that.'),
   q('The trial balance is out by $90. A good first check is…',['Look for two transposed digits','Look for a missing $90 account','Re-enter every transaction'],'A difference divisible by 9 is the signature of a transposition, such as 540 typed as 450.'),
   q('A $300 debit was posted as a $300 credit. The trial balance is out by…',['$600','$300','$150'],'The debit side is $300 too low and the credit side is $300 too high, a gap of $600. That is why halving the difference finds the amount.')
  ],'trialbalance')
 ],
 quiz:[
  q('An increase in an expense is recorded as a…',['Debit','Credit','Either, depending on the amount'],'Expenses reduce equity, and equity shrinks on the debit side.'),
  q('Maple buys a $4,000 machine with cash. The entry is…',['Debit Equipment, credit Cash','Debit Cash, credit Equipment','Debit Equipment expense, credit Cash'],'One asset increased and another decreased. A machine that lasts for years is not an expense on purchase.'),
  q('A customer pays a $1,000 invoice recorded last month. The credit goes to…',['Accounts receivable','Revenue','Cash'],'The revenue was recorded when the invoice was issued. The payment clears what the customer owed.'),
  q('Cash has debits of $30,000 and credits of $21,500. The balance is…',['$8,500 debit','$8,500 credit','$51,500 debit'],'Debits exceed credits by $8,500, on the debit side where an asset normally sits.'),
  q('Which error would stop the trial balance from balancing?',['Posting a debit as a credit','Recording a transaction twice','Using the wrong expense account'],'Only an error that makes debits differ from credits shows up. The other two keep both sides equal.'),
  q('Revenue normally has a credit balance because…',['It increases equity','Cash is credited when sales are made','Customers are creditors'],'Revenue adds to the owner’s stake, and equity grows on the credit side.')
 ] };