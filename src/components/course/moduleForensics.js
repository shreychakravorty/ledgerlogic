import { q, card, lesson } from '@/components/course/courseHelpers';
export const forensics = { id:'forensics', track:'advanced', area:'FORENSICS & ANALYTICS', title:'Forensic accounting and data analytics', summary:'Finding fraud in the numbers, with Excel and basic SQL as the tools.',
 lessons:[
  lesson('f-role','What forensic accountants do',4,[
   card('Accounting that may end up in court','Forensic accountants investigate suspected fraud, measure financial losses and explain their findings to lawyers, insurers and judges.'),
   card('How it differs from an audit','',{rows:[['Purpose','An audit gives an opinion on the statements. An investigation answers a specific allegation.'],['Materiality','An audit ignores small amounts. An investigation follows every dollar in scope.'],['Evidence','An audit samples. An investigation often examines every transaction.'],['Outcome','An opinion, against a report of facts that may be tested in court']]}),
   card('Evidence must survive challenge','Record where each document or file came from, who has handled it and when. This chain of custody shows that the evidence has not been altered.'),
   card('The expert’s duty','An expert witness’s duty is to the court, not to the party paying the fee. The work has to be objective, documented and reproducible.')
  ],[
   q('Compared with an audit, a forensic investigation…',['Examines a specific allegation in detail, with no materiality threshold','Gives an opinion on the financial statements','Relies on a small sample'],'Its scope is narrow and its depth is complete.'),
   q('Chain of custody matters because…',['Evidence must be shown to be unaltered before a court will rely on it','It speeds up the investigation','It reduces the fee'],'A gap in the record lets the other side question the evidence.')
  ]),
  lesson('f-schemes','Common fraud schemes',5,[
   card('Three families','',{rows:[['Asset misappropriation','Theft of cash, stock or other assets. The most common and usually the smallest.'],['Corruption','Kickbacks, bid rigging, undisclosed conflicts'],['Financial statement fraud','Misstating the accounts. The rarest and by far the most costly.']]}),
   card('Stealing cash','',{rows:[['Skimming','Taking cash before it is recorded'],['Lapping','Covering a stolen customer payment with the next customer’s payment'],['Fictitious vendor','Paying invoices from a supplier that does not exist'],['Ghost employee','Paying wages to someone who does not work there'],['Expense padding','Claiming personal or invented expenses']]}),
   card('Cooking the books','',{points:['Recording sales that never happened','Channel stuffing: shipping more than customers ordered before year-end','Holding the books open past the cut-off','Leaving liabilities and expenses unrecorded','Overvaluing stock or receivables']}),
   card('Behavioural red flags','Living beyond one’s means, never taking holidays, refusing to share duties, and unusually close relationships with a supplier are the classic warning signs.')
  ],[
   q('Using one customer’s payment to cover money stolen from another customer’s account is called…',['Lapping','Skimming','Channel stuffing'],'It has to be kept going indefinitely, which is why forced holidays expose it.'),
   q('A ghost employee scheme involves…',['Paying wages to someone who does not work for the business','Underpaying real staff','Staff working from home'],'The fraudster collects the pay.'),
   q('Shipping more goods to distributors than they ordered just before year-end is…',['Channel stuffing','A kickback','Lapping'],'It inflates this year’s revenue at the cost of returns next year.')
  ]),
  lesson('f-detect','Detecting fraud with data',4,[
   card('Test everything, not a sample','With the full ledger in a spreadsheet or database, every transaction can be checked against a pattern.'),
   card('Benford’s Law','In naturally occurring amounts, small leading digits are far more common than large ones. Invented numbers tend not to follow the pattern.',{rows:[['Leading digit 1','About 30%'],['Leading digit 2','About 18%'],['Leading digit 9','About 5%']],tip:'It does not suit numbers with a built-in range, such as fixed prices or invoice numbers.'}),
   card('Simple tests that find real things','',{rows:[['Duplicates','Same vendor, invoice number and amount paid twice'],['Just under the limit','A cluster of invoices at $4,900 when approval is needed at $5,000'],['Round numbers','Many payments of exactly $1,000 or $5,000'],['Timing','Entries posted at weekends or late at night'],['Matching details','A vendor sharing an address or bank account with an employee'],['Gaps','Missing cheque or invoice numbers']]}),
   card('An anomaly is a question','Each exception needs a document and an explanation. Most turn out to be innocent.')
  ],[
   q('Benford’s Law predicts that the leading digit 1 appears in naturally occurring amounts about…',['30% of the time','11% of the time','50% of the time'],'If every digit were equally likely it would be 11%. Real data is heavily skewed toward low digits.'),
   q('Many invoices just under a $5,000 approval limit suggest that…',['Purchases are being split to avoid approval','Costs are well controlled','Prices happen to be similar'],'Splitting one purchase into several keeps each below the level that needs a second signature.'),
   q('A vendor whose address matches an employee’s home address points to a possible…',['Fictitious vendor','Bad debt','Inventory shortage'],'The employee may be approving payments to themselves.')
  ]),
  lesson('f-excel','Excel for accountants',5,[
   card('Start with a clean table','One row per transaction, one column per field, no blank rows and no merged cells. Turn the range into a Table so that formulas and PivotTables grow with the data.'),
   card('Four functions that do most of the work','',{rows:[['SUMIFS','Totals amounts that meet several conditions: =SUMIFS(Amount, Account, "Rent", Month, 3)'],['COUNTIFS','Counts matches. More than 1 means a duplicate: =COUNTIFS(Vendor, A2, Invoice, B2)'],['XLOOKUP','Fetches a value from another table: =XLOOKUP(A2, Vendors[ID], Vendors[Name])'],['TRIM','Removes stray spaces that make lookups fail']]}),
   card('PivotTables','Drag account to rows, month to columns and amount to values, and 50,000 ledger lines become a summary in seconds. Double-click any figure to see the transactions behind it.'),
   card('Habits that prevent errors','',{points:['Never type a number into the middle of a formula: put it in a labelled cell','Keep the raw data on its own sheet and never edit it','Add a check total that should equal zero','Use conditional formatting to highlight exceptions']})
  ],[
   q('Which Excel function totals the amounts that meet several conditions?',['SUMIFS','XLOOKUP','TRIM'],'It adds only the rows where every condition is true.'),
   q('To summarize 50,000 ledger lines by account and month without writing formulas, use…',['A PivotTable','Conditional formatting','Text to Columns'],'It groups and totals the data interactively.'),
   q('A lookup fails because some vendor names have trailing spaces. Clean them with…',['TRIM','SUMIFS','ROUND'],'To a lookup, “Roast Supply ” and “Roast Supply” are different values.')
  ]),
  lesson('f-sql','Basic SQL for accountants',5,[
   card('Why SQL','Accounting systems store their data in tables. SQL asks those tables questions directly, with no row limit and with a query you can save and rerun.'),
   card('The shape of a query','',{rows:[['SELECT','Which columns to show'],['FROM','Which table'],['WHERE','Which rows to keep'],['ORDER BY','How to sort the result']],tip:'SELECT invoice_no, amount FROM payments WHERE amount > 5000 ORDER BY amount DESC'}),
   card('Totals by group','GROUP BY collapses rows into one line per group, and SUM, COUNT and AVG summarize each group.',{tip:'SELECT vendor_id, SUM(amount) AS total FROM payments GROUP BY vendor_id'}),
   card('Filtering the groups','WHERE filters rows before grouping. HAVING filters the groups afterwards.',{tip:'SELECT vendor_id, SUM(amount) AS total FROM payments GROUP BY vendor_id HAVING SUM(amount) > 100000'})
  ],[
   q('Which SQL clause filters rows before they are grouped?',['WHERE','HAVING','ORDER BY'],'HAVING works on the groups after they have been formed.'),
   q('SELECT vendor_id, SUM(amount) FROM payments GROUP BY vendor_id returns…',['One row per vendor with the total paid','Every payment row','Only the largest payment'],'GROUP BY produces one line per distinct vendor.')
  ]),
  lesson('f-joins','Joins and fraud queries',5,[
   card('Joining tables','A JOIN matches rows in two tables on a shared key, such as the vendor ID.',{tip:'SELECT p.invoice_no, v.name, p.amount FROM payments p JOIN vendors v ON p.vendor_id = v.vendor_id'}),
   card('Finding what is missing','A LEFT JOIN keeps every payment even when no vendor matches. Rows where the vendor side is empty are payments to someone not on the approved list.',{tip:'SELECT p.* FROM payments p LEFT JOIN vendors v ON p.vendor_id = v.vendor_id WHERE v.vendor_id IS NULL'}),
   card('Duplicate payments','Group by the fields that should be unique together and keep the groups that appear more than once.',{tip:'SELECT vendor_id, invoice_no, amount, COUNT(*) FROM payments GROUP BY vendor_id, invoice_no, amount HAVING COUNT(*) > 1'}),
   card('Employees who look like vendors','Join the employee table to the vendor table on address or bank account. Any row returned needs an explanation.',{tip:'SELECT e.name, v.name FROM employees e JOIN vendors v ON e.bank_account = v.bank_account'})
  ],[
   q('To list payments made to vendors that are not in the approved vendor table, use…',['A LEFT JOIN, keeping rows where the vendor is NULL','An ordinary JOIN','ORDER BY amount'],'An ordinary JOIN would drop exactly the rows you are looking for.'),
   q('Which clause keeps only the groups that appear more than once?',['HAVING COUNT(*) > 1','WHERE COUNT(*) > 1','ORDER BY COUNT(*)'],'Aggregate conditions belong in HAVING.')
  ]),
  lesson('f-report','From finding to evidence',4,[
   card('Protect the data first','Take a copy of the original data, record where it came from, and work only on the copy. Never clean or correct the source.'),
   card('Make the work reproducible','Keep every query and formula and note every step, so that someone else can run the same analysis and get the same answer.'),
   card('Quantify, then corroborate','Total the suspect transactions to measure the possible loss. Then go to the documents: invoices, bank records, approvals, delivery notes. Data shows where to look. Documents and interviews establish what happened.'),
   card('Write facts, not verdicts','A report sets out what was examined, what was found and how. Whether someone committed fraud is for a court to decide. Protect personal information throughout.')
  ],[
   q('An analytics test flags 40 unusual payments. They are…',['Leads to investigate, not proof of fraud','Proof of fraud','Errors to be reversed at once'],'Each needs supporting documents and an explanation.'),
   q('Before analysing a client’s data, a forensic accountant should…',['Preserve the original and work on a copy','Tidy up the original file','Delete duplicates in the source system'],'Altering the original destroys its value as evidence.')
  ])
 ],
 quiz:[
  q('The three broad categories of occupational fraud are asset misappropriation, corruption and…',['Financial statement fraud','Tax planning','Bad debts'],'It is the least common of the three and the most expensive.'),
  q('Benford’s Law is used to…',['Spot sets of numbers that may have been invented or manipulated','Calculate depreciation','Forecast sales'],'It compares the leading digits in the data with the expected distribution.'),
  q('In Excel, XLOOKUP is used to…',['Return a value from another table that matches a key','Add up a column','Sort data'],'It replaces the older VLOOKUP.'),
  q('In SQL, GROUP BY is used with functions such as…',['SUM and COUNT','WHERE and FROM','JOIN and ON'],'Aggregates summarize each group.'),
  q('A test for duplicate payments groups the payments by…',['Vendor, invoice number and amount','Payment date only','Bank account only'],'A second row with all three the same is very likely the same invoice paid twice.'),
  q('A forensic report should present…',['The facts and how they were established, not a verdict of guilt','The investigator’s opinion on guilt','Only the anomalies'],'Guilt is a legal conclusion.')
 ] };