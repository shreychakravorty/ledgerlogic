import { q, card, lesson, dr, cr } from '@/components/course/courseHelpers';
export const gstHst = { id:'gst-hst', area:'TAXATION', title:'Canadian GST/HST', summary:'How Canada’s sales tax works, from registration to filing.',
 lessons:[
  lesson('g-vat','How a value-added tax works',4,[
   card('A tax on the final consumer, collected in stages','Each business charges GST/HST on its sales and claims back the tax it paid on its purchases. Only the difference goes to the CRA.'),
   card('Follow one bag of coffee','At 13% HST:',{rows:[['Roaster sells to Maple for $10','Charges $1.30 and remits $1.30'],['Maple sells to a customer for $20','Charges $2.60, claims back $1.30, remits $1.30'],['The CRA receives in total','$2.60']],tip:'The customer bore the full $2.60. Each business only passed tax along.'}),
   card('The rates','',{rows:[['GST','5%, charged across Canada'],['HST','GST and provincial tax combined in one rate: 13% in Ontario, and higher in the Atlantic provinces'],['Elsewhere','GST plus a separate provincial tax, or GST alone in Alberta and the territories']],tip:'Provincial rates change. Confirm the current rate before advising a client.'}),
   card('On the books','Tax collected is a liability. Tax paid on purchases is a receivable from the CRA. Neither is revenue or expense for a registrant.',{entry:[dr('Inventory',1000),dr('HST receivable',130),cr('Accounts payable',1130)]})
  ],[
   q('In a period Maple collects $2,600 of HST and pays $1,100 of HST on business purchases. It remits…',['$1,500','$2,600','$3,700'],'Net tax is tax collected less input tax credits: $2,600 − $1,100.'),
   q('For a registered business, HST collected on sales is…',['A liability','Revenue','An expense'],'It is held for the CRA and never belongs to the business.'),
   q('Who ultimately bears the GST/HST?',['The final consumer','The manufacturer','Each business in the chain equally'],'Businesses recover the tax they pay. The consumer cannot.')
  ],'tax'),
  lesson('g-register','Registration and the small supplier',4,[
   card('Not everyone has to register','A small supplier has $30,000 or less of worldwide taxable sales over four consecutive calendar quarters. Small suppliers do not have to register or charge GST/HST.'),
   card('Crossing the line','',{rows:[['Over $30,000 within a single quarter','No longer a small supplier at once. The sale that crossed the line is taxable.'],['Over $30,000 across four quarters','No longer a small supplier at the end of the following month']],tip:'Registration is then required within 29 days.'}),
   card('Registering voluntarily','A small supplier can choose to register. It must then charge tax, but it can claim input tax credits. This often suits a new business with large start-up costs, or one that sells to other businesses.'),
   card('Exceptions, and the number','Taxi and ride-share drivers must register from the first dollar. Once registered, the business number with its RT account, such as 123456789 RT0001, goes on invoices so that business customers can claim their credits.')
  ],[
   q('A new consultant bills $9,000, $8,000, $7,000 and $8,000 in her first four quarters. She…',['Has passed the $30,000 threshold and must register','Is still a small supplier','Must register only once she bills $50,000'],'The four quarters total $32,000, which is over the threshold.'),
   q('A main benefit of registering voluntarily is…',['Recovering GST/HST paid on business purchases','Not having to file returns','Charging a lower tax rate'],'Only registrants can claim input tax credits.')
  ]),
  lesson('g-supplies','Taxable, zero-rated and exempt supplies',4,[
   card('Three treatments','',{rows:[['Taxable','Tax is charged at 5%, or the HST rate. Credits can be claimed.'],['Zero-rated','Taxable at 0%. No tax is charged, and credits can still be claimed.'],['Exempt','No tax is charged, and no credits are allowed on related costs.']]}),
   card('Zero-rated examples','',{points:['Basic groceries such as milk, bread and vegetables','Prescription drugs','Most exports','Many medical devices']}),
   card('Exempt examples','',{points:['Long-term residential rent','Most health, medical and dental services','Child care','Most financial services, such as lending','Many educational services']}),
   card('Why the difference matters','A grocer (zero-rated) gets back the HST on its new freezer. A landlord of apartments (exempt) does not: the HST on a new roof is a real cost.',{tip:'Zero-rated sales count toward the $30,000 threshold. Exempt sales do not.'})
  ],[
   q('A business that makes only exempt supplies…',['Cannot claim input tax credits','Claims credits but charges no tax','Charges tax at 0%'],'Exempt supplies sit outside the system, so tax paid on related costs is not recoverable.'),
   q('Basic groceries are…',['Zero-rated','Exempt','Taxable at 5%'],'No tax is charged, yet the grocer can still recover tax paid on its costs.'),
   q('A dentist buys a $10,000 chair plus $1,300 HST for her exempt practice. The cost of the chair in her books is…',['$11,300','$10,000','$8,700'],'The HST cannot be recovered, so it becomes part of the asset’s cost.')
  ]),
  lesson('g-place','Place of supply and provincial rates',4,[
   card('Which rate? It depends on where the supply is made','A business charges the rate of the province where the supply is considered to be made, which is often the customer’s province rather than its own.'),
   card('The general rules','',{rows:[['Goods','Where they are delivered or made available to the buyer'],['Services','Usually the province of the customer’s address'],['Real property','Where the property is located']],tip:'Services tied to a place, such as a haircut or repairs to a building, follow where they are performed or where the property is.'}),
   card('Maple ships coffee','Maple is in Ontario.',{rows:[['To a customer in Ontario','Charge Ontario HST'],['To a customer in Alberta','Charge 5% GST only'],['To a customer in the United States','Zero-rated export']]}),
   card('Provinces with their own tax','British Columbia, Saskatchewan and Manitoba charge a separate PST, which businesses generally cannot recover. Quebec charges QST, which works much like GST. Each has its own registration rules.')
  ],[
   q('An Ontario retailer ships goods to a customer in Alberta. It charges…',['5% GST','13% HST','No tax'],'Goods are supplied where they are delivered. Alberta has GST only.'),
   q('A Nova Scotia web designer builds a site for a client whose business address is in Ontario. She generally charges…',['Ontario’s HST rate','Nova Scotia’s HST rate','GST only'],'For most services the customer’s address decides the place of supply.')
  ]),
  lesson('g-itc','Input tax credits',4,[
   card('Recovering the tax you paid','A registrant claims an input tax credit (ITC) for GST/HST paid on purchases used in its taxable activities, including zero-rated ones.'),
   card('What you need on file','No documents, no credit. The supporting invoice must show enough detail, and more is required as the amount grows.',{points:['The supplier’s name and the date','The total paid and the tax charged','For larger invoices, the supplier’s GST/HST number and your business name']}),
   card('Restricted credits','',{rows:[['Meals and entertainment','Only 50% of the tax is claimable'],['Personal or exempt use','No credit for that portion'],['Passenger vehicles','Credit limited to a prescribed cost ceiling'],['Purchases from small suppliers','No tax was charged, so there is nothing to claim']]}),
   card('Capital purchases','A registrant claims the full ITC on equipment in the period it is bought, not gradually. That is why a business with a big purchase can file for a refund.',{entry:[dr('Equipment',4000),dr('HST receivable',520),cr('Cash',4520)]})
  ],[
   q('Maple pays $200 plus $26 HST for a client lunch. The input tax credit is…',['$13','$26','$0'],'Only half of the tax on meals and entertainment can be claimed.'),
   q('Maple buys a $10,000 oven plus $1,300 HST for its taxable business. The ITC is claimed…',['In full, in the period of purchase','Over the oven’s useful life','Only when the oven is sold'],'ITCs on capital property used in taxable activities are claimed up front.'),
   q('A supplier’s invoice shows no GST/HST number and no tax. Maple can claim…',['Nothing','13% of the total','5% of the total'],'A credit exists only for tax actually charged by a registrant and supported by proper documents.')
  ],'itc'),
  lesson('g-filing','Filing and remitting',5,[
   card('The return in three lines','',{rows:[['GST/HST collected or collectible','$9,100'],['Less input tax credits','($3,400)'],['Net tax to remit','$5,700']],tip:'Collectible matters: tax is owed when it is invoiced, even if the customer has not paid yet.'}),
   card('How often','The reporting period depends on annual taxable sales.',{rows:[['$1.5 million or less','Annual, with the option to file quarterly or monthly'],['Over $1.5 million, up to $6 million','Quarterly'],['Over $6 million','Monthly']]}),
   card('When it is due','',{rows:[['Monthly and quarterly filers','One month after the period ends'],['Annual filers','Three months after the fiscal year-end']],tip:'Self-employed individuals with a December 31 year-end file by June 15 but must pay by April 30. Annual filers with larger balances also pay quarterly instalments.'}),
   card('The remittance entry','',{entry:[dr('HST payable',9100),cr('HST receivable',3400),cr('Cash',5700)]}),
   card('The quick method','A small business can elect to remit a flat percentage of its tax-included sales instead of tracking ITCs on expenses. It helps businesses with few taxable costs and can cost more for those with many.',{tip:'Eligibility and rates depend on revenue, province and type of business. Run the numbers both ways before electing.'})
  ],[
   q('A quarterly filer’s period ends March 31. The return and payment are due…',['April 30','March 31','June 30'],'Quarterly and monthly filers have one month after the period ends.'),
   q('Maple invoiced a customer $1,000 plus $130 HST in March. The customer pays in May. The $130 belongs on the return for…',['The period that includes March','The period that includes May','Whichever Maple prefers'],'Tax becomes collectible when it is invoiced, not when it is paid.'),
   q('Tax collected is $4,000 and input tax credits are $5,200. The return shows…',['A $1,200 refund','A $1,200 balance owing','A $9,200 balance owing'],'Credits exceed tax collected, so the CRA owes the business the difference.')
  ],'quickmethod'),
  lesson('g-errors','Common errors and CRA reviews',4,[
   card('Mistakes that show up again and again','',{points:['Tax typed into the price, so it lands in revenue','Claiming 100% of the tax on meals','Claiming ITCs without a valid invoice','Charging the wrong province’s rate','Recording a tax payment as an expense']}),
   card('Prove the balance','At period-end, the GST/HST accounts in the ledger should agree with the return.',{rows:[['HST payable account','The line for tax collected'],['HST receivable account','The line for ITCs'],['Net of the two','The amount remitted or refunded']]}),
   card('When the CRA asks','Refund claims and unusual returns are often reviewed. The CRA asks for the invoices behind the largest ITCs. Records must be kept for six years.'),
   card('Fixing a past return','Tax under-reported in a filed return is corrected by amending that period, and interest applies to amounts paid late. A missed ITC can usually be claimed on a later return, within the time limit.')
  ],[
   q('The HST payable account shows $3,000, but $3,400 was actually charged to customers. A likely cause is…',['Some sales were recorded with the tax included in revenue','Too many ITCs were claimed','A supplier overcharged'],'If tax is typed into the price with no tax code, the liability account misses it and revenue is overstated.'),
   q('A bookkeeper records the quarterly HST remittance as Tax expense. The effect is…',['Profit is understated and the liability is never cleared','Profit is overstated','No effect, since cash is correct'],'The remittance settles a liability. Expensing it charges the business for tax that was never its cost.')
  ])
 ],
 quiz:[
  q('The small-supplier threshold is…',['$30,000 of taxable sales over four consecutive calendar quarters','$30,000 of profit in a calendar year','$50,000 of sales in a fiscal year'],'It is measured on worldwide taxable supplies across any four consecutive calendar quarters.'),
  q('Prescription drugs are…',['Zero-rated','Exempt','Taxable at the full rate'],'They are taxable at 0%, so the pharmacy keeps its right to input tax credits.'),
  q('Can a residential landlord claim ITCs on repairs to an apartment building?',['No: residential rent is exempt','Yes, in full','Yes, at 50%'],'Costs of making exempt supplies carry no credit.'),
  q('Goods shipped from Ontario to a consumer in Alberta attract…',['5% GST','13% HST','No tax at all'],'The place of supply for goods is where they are delivered.'),
  q('Tax collected is $7,800 and ITCs are $2,300. Net tax is…',['$5,500','$10,100','$7,800'],'$7,800 − $2,300 = $5,500.'),
  q('Under the quick method, a business…',['Remits a flat percentage of sales instead of claiming most ITCs','Stops charging GST/HST','Files only every two years'],'It still charges tax at the normal rate but calculates its remittance with a simplified rate.')
 ] };