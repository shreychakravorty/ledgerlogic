import { q, card, lesson, dr, cr } from '@/components/course/courseHelpers';
export const reporting = { id:'reporting', track:'advanced', area:'ADVANCED FINANCIAL REPORTING', title:'Intermediate and advanced financial reporting', summary:'The harder IFRS and ASPE topics: revenue, leases, instruments, taxes, groups and foreign currency.',
 lessons:[
  lesson('r-frameworks','Choosing between IFRS and ASPE',4,[
   card('Two frameworks, one Handbook','',{rows:[['Part I: IFRS','Required for publicly accountable enterprises'],['Part II: ASPE','Available to private enterprises, which may choose IFRS instead'],['Part III','Private not-for-profit organizations']]}),
   card('What makes information useful','Both frameworks rest on the same qualities.',{rows:[['Relevance','It could change a user’s decision'],['Faithful representation','Complete, neutral and free from error'],['Enhancing qualities','Comparability, verifiability, timeliness and understandability']]}),
   card('Where ASPE is simpler','',{rows:[['Income taxes','May use the taxes payable method'],['Subsidiaries','May use the cost or equity method instead of consolidating'],['Leases','Operating leases stay off the balance sheet'],['Goodwill','Tested for impairment only when events suggest a problem'],['Disclosure','Far fewer notes']]}),
   card('Making the choice','A private company usually picks ASPE for its lower cost. IFRS makes sense when the company plans to go public, has a foreign parent, or has lenders and investors who expect it.')
  ],[
   q('A company whose shares trade on the Toronto Stock Exchange must report under…',['IFRS','ASPE','Either, at its choice'],'It is a publicly accountable enterprise.'),
   q('A private company may prefer ASPE mainly because…',['It is simpler and requires fewer disclosures','It produces a higher profit','The CRA requires it'],'ASPE was written for users who can ask the company for more information directly.'),
   q('Information that is complete, neutral and free from error has…',['Faithful representation','Timeliness','Comparability'],'It is one of the two fundamental qualities, with relevance.')
  ]),
  lesson('r-revenue','Revenue recognition',5,[
   card('The IFRS 15 five-step model','',{points:['1. Identify the contract with the customer','2. Identify the separate performance obligations','3. Determine the transaction price','4. Allocate the price to the obligations','5. Recognize revenue as each obligation is satisfied']}),
   card('Allocating a bundle','A $1,200 contract includes a phone and a year of service. Sold separately they are $600 and $900.',{rows:[['Phone','$600 ÷ $1,500 = 40% of $1,200 = $480, recognized on delivery'],['Service','$900 ÷ $1,500 = 60% of $1,200 = $720, recognized over the year']]}),
   card('Over time or at a point in time','Revenue is recognized when control passes to the customer. For long contracts that can be gradually. A $1,000,000 contract is expected to cost $800,000, and $200,000 has been spent.',{rows:[['Progress','$200,000 ÷ $800,000 = 25%'],['Revenue to date','$1,000,000 × 25% = $250,000']]}),
   card('ASPE','Section 3400 recognizes revenue when the risks and rewards have transferred or the service is performed, the amount is measurable, and collection is reasonably assured. Long contracts use the percentage-of-completion or completed-contract method.',{tip:'The answer is often the same under both frameworks. IFRS 15 is more prescriptive about bundles, variable prices and disclosures.'})
  ],[
   q('A $1,500 contract bundles equipment with a standalone price of $1,200 and installation with a standalone price of $800. Revenue allocated to the equipment is…',['$900','$1,200','$750'],'$1,200 ÷ $2,000 = 60%, and 60% of $1,500 is $900.'),
   q('A $600,000 contract is expected to cost $400,000. Costs to date are $100,000. Revenue recognized to date on a cost-to-cost basis is…',['$150,000','$100,000','$600,000'],'The contract is 25% complete, and 25% of $600,000 is $150,000.'),
   q('Under IFRS 15, revenue is recognized when…',['Control of the good or service passes to the customer','Cash is received','The contract is signed'],'Signing creates the contract. Performing it earns the revenue.')
  ],'wip'),
  lesson('r-leases','Leases',5,[
   card('IFRS 16: almost everything on the balance sheet','At the start, the lessee records a right-of-use asset and a lease liability, both at the present value of the lease payments. Three payments of $10,000 at each year-end, at 5%, have a present value of $27,232.',{entry:[dr('Right-of-use asset',27232),cr('Lease liability',27232)]}),
   card('Year one','',{rows:[['Interest','$27,232 × 5% = $1,362'],['Payment','$10,000, of which $8,638 reduces the liability'],['Depreciation','$27,232 ÷ 3 = $9,077'],['Total expense','$10,439']],tip:'More than the $10,000 paid. The cost is front-loaded, because interest is highest when the liability is largest.'}),
   card('Exemptions','A lessee may simply expense leases of 12 months or less, and leases of low-value items such as a laptop or a phone.'),
   card('ASPE: capital or operating','Section 3065 treats a lease as a capital lease if it transfers substantially all the benefits and risks of ownership. Any one of these normally shows that:',{points:['Ownership transfers, or there is a bargain purchase option','The term is 75% or more of the asset’s economic life','The present value of the payments is 90% or more of the asset’s fair value'],tip:'Otherwise it is an operating lease, and the payments are rent expense.'})
  ],[
   q('A lease liability is $40,000 at the start of the year and the rate is 6%. Interest expense for the first year is…',['$2,400','$6,000','$40,000'],'$40,000 × 6% = $2,400.'),
   q('Under IFRS 16, which lease may be kept off the lessee’s balance sheet?',['A lease of 12 months or less','A ten-year building lease','Any lease the lessee chooses'],'Short-term and low-value leases are the only exemptions.'),
   q('Under ASPE, a lease whose term covers 80% of the asset’s economic life is…',['A capital lease','An operating lease','A short-term lease'],'It passes the 75% test, so the lessee has substantially all the use of the asset.')
  ]),
  lesson('r-instruments','Financial instruments',5,[
   card('Cost or fair value?','',{rows:[['IFRS 9','Amortized cost, fair value through other comprehensive income, or fair value through profit or loss, depending on the business model and the cash flows'],['ASPE 3856','Shares quoted in an active market at fair value. Almost everything else at cost or amortized cost, with an option to choose fair value.']]}),
   card('Fair value through profit or loss','Shares bought for $10,000 are worth $11,500 at year-end. The gain is reported even though nothing was sold.',{entry:[dr('Investments',1500),cr('Unrealized gain on investments',1500)]}),
   card('Amortized cost and effective interest','A $100,000 bond paying 5% is issued for $95,788 when the market rate is 6%.',{rows:[['Interest expense','$95,788 × 6% = $5,747'],['Cash paid','$5,000'],['Discount amortized','$747'],['Carrying amount after one year','$96,535']],tip:'The carrying amount climbs to $100,000 by maturity. ASPE also permits straight-line amortization.'}),
   card('Impairment','IFRS 9 uses an expected credit loss model: losses are estimated and recorded before any default. ASPE records impairment when there is a significant adverse change in expected cash flows.')
  ],[
   q('Shares held for trading cost $20,000 and are worth $18,500 at year-end. Net income includes…',['A $1,500 unrealized loss','Nothing until the shares are sold','A $1,500 gain'],'Fair value changes on trading investments go through profit as they occur.'),
   q('A bond is carried at $90,000 and the market rate when it was issued was 8%. Interest expense this year under the effective interest method is…',['$7,200','$8,000','$900'],'Carrying amount times the market rate at issue: $90,000 × 8%.'),
   q('IFRS 9 recognizes credit losses on loans and receivables…',['On an expected-loss basis, before a default occurs','Only when the debtor defaults','Only at maturity'],'The model is forward-looking.')
  ]),
  lesson('r-taxes','Accounting for income taxes',5,[
   card('Two ASPE methods, one IFRS method','',{rows:[['Taxes payable method (ASPE option)','Tax expense is simply the tax owed for the year'],['Future income taxes method (ASPE option)','Also records tax on timing differences'],['IAS 12 (IFRS)','Deferred tax is required']]}),
   card('Temporary differences','When the books and the tax return recognize an item in different years, the tax follows later. Equipment has a carrying amount of $80,000, but its undepreciated capital cost is $60,000. Tax rate 25%.',{rows:[['Temporary difference','$20,000'],['Deferred tax liability','$20,000 × 25% = $5,000']],tip:'CCA has run ahead of depreciation. The tax saved so far will be paid back in later years.'}),
   card('The entry','Tax expense is current tax plus the change in deferred tax.',{entry:[dr('Income tax expense',5000),cr('Deferred tax liability',5000)]}),
   card('Permanent differences and losses','Items that never reverse, such as the non-deductible half of meals, create no deferred tax. Unused tax losses create a deferred tax asset, but only to the extent future profit is probable.')
  ],[
   q('Equipment has a carrying amount of $50,000 and an undepreciated capital cost of $30,000. At a 25% tax rate the deferred tax liability is…',['$5,000','$20,000','$12,500'],'($50,000 − $30,000) × 25% = $5,000.'),
   q('Current tax is $40,000 and the deferred tax liability rose by $6,000. Income tax expense is…',['$46,000','$34,000','$40,000'],'Expense is current tax plus the increase in the deferred liability.'),
   q('The non-deductible half of meals expense is…',['A permanent difference that creates no deferred tax','A temporary difference','A deferred tax asset'],'It will never be deductible, so there is nothing to reverse.')
  ],'cca'),
  lesson('r-consolidation','Business combinations and consolidation',5,[
   card('Control decides','Under IFRS 10, a parent controls another entity when it has power over it, is exposed to its variable returns, and can use its power to affect them. A controlled entity is consolidated.'),
   card('Goodwill','Parent pays $500,000 for all the shares of a company whose identifiable net assets have a fair value of $420,000.',{rows:[['Price paid','$500,000'],['Fair value of identifiable net assets','($420,000)'],['Goodwill','$80,000']],tip:'Goodwill is not amortized. IFRS tests it for impairment every year. ASPE tests it when events indicate a problem.'}),
   card('Less than 100%','Consolidation still adds in all of the subsidiary’s assets and liabilities. The part the parent does not own appears in equity as the non-controlling interest. Buying 80% for $400,000:',{rows:[['Non-controlling interest','20% × $420,000 = $84,000'],['Goodwill','$400,000 + $84,000 − $420,000 = $64,000']]}),
   card('Eliminate what is internal','Sales, loans and balances between group companies are removed, along with any unrealized profit in stock still held. A group cannot earn profit by selling to itself.'),
   card('Other investments','',{rows:[['Significant influence, often 20% to 50%','Equity method: the investment grows with a share of profit and falls with dividends'],['ASPE choice for subsidiaries','Consolidate, or use the equity or cost method']]})
  ],[
   q('Parent pays $900,000 for 100% of a company whose identifiable net assets have a fair value of $750,000. Goodwill is…',['$150,000','$900,000','$750,000'],'$900,000 − $750,000 = $150,000.'),
   q('A parent sold goods to its subsidiary for $50,000 during the year. In the consolidated income statement that sale is…',['Eliminated','Reported as revenue','Reported as other income'],'It is a transfer inside one economic entity.'),
   q('Under IFRS, an investor with 30% of the voting shares and significant influence normally uses…',['The equity method','Full consolidation','The cost method'],'Influence without control calls for the equity method.')
  ]),
  lesson('r-fx','Foreign currency',4,[
   card('Transactions in another currency','Record at the exchange rate on the transaction date. Maple buys US$10,000 of beans when US$1 = C$1.35, so the payable is C$13,500.'),
   card('At year-end','Monetary items such as cash, receivables and payables are restated at the closing rate. At C$1.38 the payable becomes C$13,800.',{entry:[dr('Foreign exchange loss',300),cr('Accounts payable',300)],tip:'Non-monetary items such as inventory and equipment stay at the rate on the day they were bought.'}),
   card('On settlement','Maple pays when the rate is C$1.36, so it hands over C$13,600 to clear a payable carried at C$13,800: a $200 gain. Over the life of the purchase the net loss is $100.'),
   card('Translating a foreign operation','',{rows:[['IAS 21','Assets and liabilities at the closing rate, income at the average rate, and the difference in other comprehensive income'],['ASPE 1651','An integrated operation uses the temporal method, with gains and losses in net income. A self-sustaining operation uses the current rate method, with the difference in equity.']]})
  ],[
   q('Maple buys goods for US$5,000 when US$1 = C$1.30. The bill is unpaid at year-end, when the rate is C$1.34. Maple records…',['A $200 foreign exchange loss','A $200 foreign exchange gain','Nothing until it pays'],'The payable has grown from C$6,500 to C$6,700.'),
   q('Which item is restated at the closing rate at each year-end?',['A US-dollar account receivable','Inventory bought in US dollars','Equipment bought in US dollars'],'Only monetary items are retranslated.')
  ],'fx')
 ],
 quiz:[
  q('ASPE lets a private company account for income taxes using…',['The taxes payable method','Only the deferred tax method','The cash basis'],'It is a policy choice under ASPE and is not available under IFRS.'),
  q('The first step of the IFRS 15 revenue model is to…',['Identify the contract with the customer','Determine the transaction price','Recognize revenue'],'The other four steps depend on what the contract promises.'),
  q('For a lessee, IFRS 16 puts on the balance sheet…',['A right-of-use asset and a lease liability','Only a prepaid expense','Nothing, only a note'],'Both are measured at the present value of the lease payments.'),
  q('Goodwill arises when the price paid for a business exceeds…',['The fair value of its identifiable net assets','The book value of its equity','Its annual profit'],'It is the part of the price that cannot be assigned to identifiable assets.'),
  q('A non-controlling interest represents…',['The share of a subsidiary not owned by the parent','The parent’s investment account','Goodwill'],'It is shown within equity in the consolidated statements.'),
  q('The exchange gain or loss on settling a foreign-currency payable is reported in…',['Net income','Share capital','Inventory'],'It is a financing effect, separate from the cost of what was bought.')
 ] };