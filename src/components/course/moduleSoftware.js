import { q, card, lesson, dr, cr } from '@/components/course/courseHelpers';
export const software = { id:'software', area:'ACCOUNTING SOFTWARE', title:'Accounting software', summary:'Setting up, running and troubleshooting QuickBooks and Sage properly.',
 lessons:[
  lesson('s-coa','Designing a chart of accounts',4,[
   card('The chart is the skeleton','Every report the software produces is built from the chart of accounts. A poor chart gives poor reports however carefully the transactions are entered.'),
   card('A numbering scheme','',{rows:[['1000s','Assets'],['2000s','Liabilities'],['3000s','Equity'],['4000s','Revenue'],['5000s','Cost of sales and expenses']],tip:'Sage 50 numbers its accounts by default. In QuickBooks Online, account numbers are an optional setting.'}),
   card('Design rules','',{points:['Use as few accounts as will answer the owner’s questions','One account for each bank account and credit card','Separate accounts for GST/HST collected and GST/HST paid','Separate liability accounts for payroll deductions','Get detail from customers, items, classes or projects, not from more accounts']}),
   card('Think about year-end','A corporation’s T2 return reports its statements using standard GIFI codes, so a chart that maps cleanly to them saves time. In QuickBooks, each account’s type decides which statement it appears on.')
  ],[
   q('A client wants to see sales for each of 200 products. The better design is…',['Set the products up as items and report by item','Create 200 revenue accounts','Create 200 customers'],'Items give the detail without swelling the income statement.'),
   q('In a conventional numbering scheme, account 2100 is most likely…',['A liability','An expense','Revenue'],'The 2000s are liabilities.'),
   q('Choosing the type Expense for an account that should be an asset causes…',['The balance to appear on the wrong financial statement','Nothing, since only the name matters','The bank feed to stop'],'The account type, not the name, decides where the software reports it.')
  ]),
  lesson('s-qbo','QuickBooks Online workflows',5,[
   card('Forms, not journal entries','In QuickBooks you fill in a form, and the software posts the journal entry behind it. Choosing the right form is choosing the right entry.'),
   card('The sales cycle','',{rows:[['Invoice','Debit Accounts receivable, credit revenue and sales tax'],['Receive payment','Debit Undeposited funds, credit Accounts receivable'],['Bank deposit','Debit the bank, credit Undeposited funds']],tip:'Undeposited funds, called Payments to deposit in newer versions, holds receipts until they are grouped into the deposit that appears on the bank statement.'}),
   card('The purchase cycle','',{rows:[['Bill','Debit an expense or asset, credit Accounts payable'],['Pay bills','Debit Accounts payable, credit the bank'],['Expense or cheque','Paid on the spot: no payable is created']]}),
   card('Products and services','Each item is mapped to an income account. Inventory items also carry an asset account and a cost of goods sold account. Sales tax codes are applied line by line.'),
   card('The classic mistakes','',{points:['Adding a bank deposit as new income when an invoice already exists','Entering an expense when a bill already exists','Leaving payments sitting in Undeposited funds']})
  ],[
   q('In QuickBooks, a customer’s payment against an existing invoice is recorded with…',['Receive payment','A new sales receipt','A journal entry to revenue'],'Receive payment clears the invoice. A sales receipt would record the sale a second time.'),
   q('Undeposited funds grows month after month. The likely cause is…',['Deposits are being added from the bank feed instead of matched to recorded payments','Customers are paying late','Too many bills are being entered'],'The recorded payments are never moved to the bank, and the income is counted twice.'),
   q('A supplier’s bill was entered last week. To record paying it today, use…',['Pay bills','A new expense','A new bill'],'Pay bills clears the payable. A new expense would count the cost twice.')
  ],'qboitems'),
  lesson('s-sage','Sage 50 workflows',5,[
   card('Organised by module','',{rows:[['General','The chart of accounts and journal entries'],['Payables','Suppliers, purchase invoices and payments'],['Receivables','Customers, sales invoices and receipts'],['Payroll','Employees and paycheques'],['Inventory and Services','Items, quantities and costs']]}),
   card('Linked accounts','Each module is told which ledger accounts to post to automatically: Receivables to Accounts receivable, sales tax to the GST/HST accounts, and so on. A wrong linked account makes every transaction wrong, quietly.'),
   card('Session date and history','The session date is the working date for entries. A new company file starts in history mode, where opening balances are entered. Sage will not let you finish history until customer and supplier balances agree with their control accounts.'),
   card('Corrections leave a trail','A posted entry is adjusted or reversed, and Sage keeps the reversing entry. Nothing is silently erased.',{tip:'Menu names vary by version and edition. The logic underneath does not.'}),
   card('Same event, two dialects','',{rows:[['A credit sale','QuickBooks: Invoice. Sage 50: Sales invoice in Receivables.'],['A customer pays','QuickBooks: Receive payment. Sage 50: Receipt.'],['A supplier bills you','QuickBooks: Bill. Sage 50: Purchase invoice in Payables.'],['You pay the supplier','QuickBooks: Pay bills. Sage 50: Payment.']]})
  ],[
   q('In Sage 50, linked accounts are…',['The ledger accounts each module posts to automatically','Bank accounts connected to the internet','Accounts shared between two companies'],'They connect each module to the general ledger.'),
   q('Sage 50 will not let a new company finish entering history until…',['Customer and supplier balances agree with their control accounts','A full year of transactions is entered','Payroll is switched on'],'The subledgers and the general ledger must start in agreement.'),
   q('To fix a posted sales invoice in Sage 50, you…',['Adjust or reverse it, which leaves an audit trail','Delete it from the database','Change the session date'],'The original and its reversal both remain visible.')
  ]),
  lesson('s-bank','Bank feeds and reconciliations',5,[
   card('Feeds save typing, not thinking','Each imported bank line needs a decision.',{rows:[['Match','The transaction is already in the books: an invoice payment or bill payment'],['Add','It is not in the books yet: a bank fee or card purchase'],['Transfer','Money moving between the business’s own accounts'],['Exclude','A duplicate, or a personal item that does not belong']]}),
   card('Bank rules','A rule categorises a recurring line automatically. Review the rules now and then: a wrong rule repeats its mistake every month without anyone noticing.'),
   card('Reconcile every month','Enter the statement’s ending date and balance, tick off what has cleared, and the difference must be zero.',{rows:[['Statement balance','$12,400'],['Less outstanding cheques','($900)'],['Add deposits in transit','$500'],['Book balance','$12,000']]}),
   card('When it will not balance','',{points:['The opening balance is off: a reconciled transaction was edited or deleted','A transaction was entered twice','Digits were transposed: the difference divides evenly by 9','The wrong statement date was entered']}),
   card('Never force it','An adjusting entry to make the difference disappear hides the error and carries it into every later month.')
  ],[
   q('The bank feed shows a $1,130 deposit, and an invoice payment of $1,130 is already recorded. You should…',['Match the deposit to the recorded payment','Add it as sales income','Exclude it and delete the recorded payment'],'Adding it would record the same money twice.'),
   q('A reconciliation’s opening balance no longer agrees with last month’s ending balance. The usual cause is…',['A previously reconciled transaction was changed or deleted','The bank made an error','A cheque is still outstanding'],'Outstanding items do not affect the opening balance. An edited cleared item does.'),
   q('A reconciliation is out by $63. Because 63 divides evenly by 9, first look for…',['Two digits typed in the wrong order','A missing bank fee','A deposit entered twice'],'Transposing two digits always produces a difference that is a multiple of 9.'),
   q('Statement balance $8,000, outstanding cheques $1,500, deposits in transit $700. The reconciled book balance is…',['$7,200','$8,800','$6,500'],'$8,000 − $1,500 + $700 = $7,200.')
  ],'qbobankrules'),
  lesson('s-payroll','Payroll basics in software',4,[
   card('Setup before the first pay','',{points:['A payroll program account with the CRA','Each employee’s federal and provincial TD1 forms','Pay frequency and vacation pay policy','The expense and liability accounts payroll will post to']}),
   card('What a pay run posts','The software works out CPP, EI and income tax from its tax tables.',{rows:[['Gross wages','An expense'],['Employee deductions','A liability, owed to the CRA'],['Employer CPP and EI','An expense and a liability'],['Net pay','Out of the bank']],tip:'Install each tax-table update as the vendor releases it. Out-of-date tables produce wrong deductions.'}),
   card('Remitting','Pay the CRA through the software’s payroll liability or remittance function so that the payment clears the liability. Regular remitters pay by the 15th of the following month.',{tip:'Recording the remittance as a plain expense counts the cost twice.'}),
   card('Year-end','T4 slips and the T4 summary are due by the last day of February. A Record of Employment is issued whenever an employee has an interruption of earnings. Before filing, agree the year’s remittances to the T4 totals.')
  ],[
   q('Payroll software calculates an employee’s income tax deduction from…',['The employee’s TD1 claim amounts and the current tax tables','The employer’s profit','Last year’s T4'],'The TD1 gives the personal credits and the tables give the rates.'),
   q('A bookkeeper pays the CRA remittance with a plain expense coded to Wages. The result is…',['Wage cost is counted twice and the payroll liability never clears','The CRA rejects the payment','Net pay is overstated'],'The cost was already expensed on payday. The remittance should reduce the liability.'),
   q('Before T4s are filed, the year’s payroll remittances should be agreed to…',['The deductions reported on the T4s','The bank loan balance','The GST/HST return'],'A difference means something was under- or over-remitted during the year.')
  ],'payroll'),
  lesson('s-controls','Period locks, audit trail and access',4,[
   card('Protect closed periods','Once a period has been reported, lock it. QuickBooks Online sets a closing date with a password. Sage 50 can block transactions dated before a date you choose.',{tip:'A change to a closed period alters a GST/HST return or year-end that has already been filed.'}),
   card('User roles','Give each person only the access the job needs.',{rows:[['Owner or accountant','Everything, including users and settings'],['Bookkeeper','Transactions and reports, not user management'],['Sales staff','Invoices and customers only'],['Time entry','Their own hours only']]}),
   card('The audit trail','The software records who created or changed each transaction, and when. In QuickBooks Online this is the audit log. It is the first place to look when a balance changes unexpectedly.'),
   card('Backups and documents','Cloud software is backed up by the vendor. A desktop Sage 50 file is your responsibility: back it up on a schedule and keep a copy somewhere else. Attach source documents to transactions, and keep records for six years.')
  ],[
   q('A user edits a March invoice after the March GST/HST return was filed. The risk is…',['The books no longer agree with the return that was filed','The invoice number changes','The bank feed disconnects'],'The ledger now says something different from what was reported.'),
   q('Which tool shows who changed a transaction and when?',['The audit log','The trial balance','The aging report'],'It records every creation, edit and deletion by user.'),
   q('For a desktop Sage 50 company file, backups are…',['The user’s responsibility to make and store safely','Unnecessary','Made automatically by the CRA'],'The file lives on the user’s own computer or server.')
  ]),
  lesson('s-migration','Setup, migration and opening balances',4,[
   card('Pick a clean cut-over date','The first day of a fiscal year is ideal. Otherwise use the first day of a month, after the last month has been reconciled.'),
   card('What to bring over','',{points:['The closing trial balance at the cut-over date','Each open customer invoice, one by one','Each open supplier bill, one by one','Inventory quantities and costs','Uncleared bank items','Year-to-date payroll, if switching mid-year']}),
   card('The balancing account','QuickBooks posts the other side of opening entries to Opening balance equity. When everything is in, that account should be zero.',{entry:[dr('Cash',8000),dr('Accounts receivable',5000),cr('Accounts payable',3000),cr('Opening balance equity',10000)],tip:'What remains is the owners’ equity at cut-over. Move it to retained earnings or owner capital only once it is fully explained.'}),
   card('Prove it','',{rows:[['Trial balance at cut-over','Agrees with the old system'],['Receivables aging','Agrees with the Accounts receivable account'],['Payables aging','Agrees with the Accounts payable account'],['First bank reconciliation','Balances']]})
  ],[
   q('After a migration is complete and equity has been reclassified, Opening balance equity should show…',['Zero','The old system’s sales','Total assets'],'A balance left there means an opening entry is missing or wrong.'),
   q('Why enter open customer invoices one by one instead of a single lump receivable?',['So payments can be applied to them and aging reports work','To increase revenue','Because journal entries cannot be dated in the past'],'The subledger needs the individual invoices.'),
   q('The first check after bringing in opening balances is that…',['The new trial balance agrees with the old system’s at the cut-over date','Every customer has an email address','The logo prints correctly'],'If the starting point is wrong, everything after it is wrong.')
  ],'openingbalance')
 ],
 quiz:[
  q('Sage 50’s default numbering puts revenue accounts in the…',['4000s','1000s','2000s'],'Assets are 1000s, liabilities 2000s, equity 3000s, revenue 4000s and expenses 5000s.'),
  q('In QuickBooks, which form creates an accounts payable balance?',['A bill','An expense','A sales receipt'],'A bill records what is owed. An expense records something already paid.'),
  q('In a bank feed, a line that is already recorded in the books should be…',['Matched','Added','Split'],'Matching links the bank line to the existing transaction instead of duplicating it.'),
  q('A bank reconciliation is finished when the difference is…',['Zero','Under $10','Posted to a suspense account'],'Any remaining difference is an unexplained error.'),
  q('Setting a closing date in the software…',['Guards periods already reported against accidental changes','Deletes old transactions','Files the tax return'],'It protects figures that have already been filed or handed to the accountant.'),
  q('Payroll deductions withheld from employees are posted by the software to…',['A liability account','Revenue','Owner equity'],'They are owed to the CRA until remitted.')
 ] };