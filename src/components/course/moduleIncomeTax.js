import { q, card, lesson } from '@/components/course/courseHelpers';
export const incomeTax = { id:'income-tax', area:'TAXATION', title:'Canadian income tax', summary:'Personal and corporate income tax for small-business clients.',
 lessons:[
  lesson('t-structure','How income tax is organised',4,[
   card('One Act, two levels of government','The federal Income Tax Act sets the rules, and each province adds its own tax on top. The CRA administers both, except that Quebec runs its own personal and corporate system and Alberta collects its own corporate tax.'),
   card('Who files what','',{rows:[['Individuals, including sole proprietors','T1 return'],['Corporations','T2 return'],['Trusts','T3 return'],['Partnerships','An information return. The partners pay the tax.']]}),
   card('From income to tax','',{points:['1. Net income: add up each source of income','2. Taxable income: subtract certain deductions, such as prior-year losses','3. Tax: apply the rates','4. Subtract tax credits','5. Compare with tax already paid']}),
   card('Deduction or credit?','',{rows:[['Deduction','Reduces income. Worth more to someone in a higher bracket.'],['Credit','Reduces tax directly.']],tip:'The books and the tax return differ. Accounting profit follows ASPE or IFRS; taxable income follows the Act. Reconciling the two is a core part of an accountant’s work.'})
  ],[
   q('A sole proprietor reports business profit on…',['Her personal T1 return','A T2 return','A T3 return'],'A proprietorship is not separate from its owner for tax. The profit is the owner’s income.'),
   q('A $1,000 deduction saves a taxpayer in a 40% bracket…',['$400','$1,000','$150'],'A deduction reduces income, so it saves tax at the marginal rate: $1,000 × 40%.')
  ]),
  lesson('t-residency','Residency and the sources of income',4,[
   card('Residents are taxed on worldwide income','Canada taxes by residency, not citizenship. A resident reports income from everywhere. A non-resident is taxed only on certain Canadian-source income.'),
   card('What makes someone resident','Residential ties decide it.',{points:['A home in Canada','A spouse or dependants in Canada','Secondary ties: bank accounts, a driver’s licence, a health card'],tip:'Someone who stays in Canada for 183 days or more in a year can be deemed a resident.'}),
   card('Four sources','',{rows:[['Employment','Salary, wages and most benefits'],['Business','Profit from a trade or profession'],['Property','Interest, dividends and rent'],['Capital gains','Profit on selling capital property, half of it taxable']]}),
   card('Why the source matters','Each source has its own rules for what is deductible and when income is recognised. A receipt that fits no source, such as a lottery win or a gift, is generally not taxed.')
  ],[
   q('A Canadian resident earns rent from a condo in Florida. In Canada it is…',['Taxable, because residents report worldwide income','Not taxable, because it is foreign','Taxable only if the money is brought into Canada'],'Residency brings worldwide income into the Canadian return. A foreign tax credit can relieve double tax.'),
   q('Interest earned on a savings account is income from…',['Property','Business','Employment'],'It is a return on money invested, earned without active work.')
  ]),
  lesson('t-employment','Employment income and deductions',4,[
   card('Taxed when received','Employment income is reported in the year it is received, and includes most benefits provided by the employer.',{rows:[['Taxable','Salary, bonuses, personal use of a company car, employer-paid life insurance'],['Not taxable','Employer contributions to a registered pension plan or a private health plan']]}),
   card('The employer withholds','Income tax, CPP and EI come off each pay and go to the CRA. The T4 slip reports the year’s totals by the end of February.'),
   card('Few deductions are allowed','Employees can deduct only what the Act specifically lists.',{points:['Registered pension plan contributions and union dues','Some expenses of commissioned or travelling employees, with a signed Form T2200','Home office costs, in limited cases']}),
   card('Employee or contractor?','The label on the contract does not decide it. The CRA looks at control, ownership of tools, chance of profit and risk of loss. A misclassified worker leaves the payer owing unremitted CPP and EI.')
  ],[
   q('An employee earns a December bonus that is paid in January. It is taxed…',['In the year it is received','In the year it is earned','Half in each year'],'Employment income is taxed when it is received.'),
   q('A worker uses the payer’s tools, keeps set hours and cannot subcontract. She is most likely…',['An employee','A contractor','A partner'],'Control by the payer and no financial risk point to employment, whatever the contract says.')
  ],'t4roe'),
  lesson('t-business','Business income and deductible expenses',4,[
   card('Start with accounting profit','Business income for tax begins with profit under accounting principles, on the accrual basis. It is then adjusted wherever the Act says something different.'),
   card('The basic test','An expense is deductible if it was incurred to earn business income and is reasonable in amount. Personal costs are not.'),
   card('Common adjustments','',{rows:[['Meals and entertainment','Only 50% deductible'],['Depreciation','Not deductible. Capital cost allowance is claimed instead.'],['Fines and penalties','Generally not deductible'],['Club dues and most life insurance','Generally not deductible'],['Home office and vehicle','Business-use portion only']]}),
   card('Reconciling book to tax','',{rows:[['Accounting profit','$40,000'],['Add back depreciation','$6,000'],['Add back half of $2,000 of meals','$1,000'],['Deduct capital cost allowance','($8,000)'],['Income for tax','$39,000']],tip:'On a T2 this reconciliation is Schedule 1. A proprietor reports business income on Form T2125.'})
  ],[
   q('Accounting profit is $50,000 after deducting $4,000 of client meals and $5,000 of depreciation. CCA is $7,000. Income for tax is…',['$50,000','$52,000','$48,000'],'$50,000 + $2,000 (half the meals) + $5,000 − $7,000 = $50,000.'),
   q('Why is depreciation added back on the tax return?',['The Act replaces it with capital cost allowance','It is not a real cost','The CRA has already deducted it'],'Tax uses its own prescribed rates, so every business writes assets off the same way.'),
   q('The owner’s family vacation, paid for by the business, is…',['Not deductible','Deductible at 50%','Fully deductible as travel'],'It was not incurred to earn business income.')
  ]),
  lesson('t-cca','Capital cost allowance',5,[
   card('Tax depreciation, by class','Assets are grouped into classes. Each has a prescribed rate, usually applied on a declining balance to the class’s undepreciated capital cost (UCC).',{rows:[['Class 1','Most buildings: 4%'],['Class 8','Furniture and equipment: 20%'],['Class 10','Vehicles: 30%'],['Class 50','Computers: 55%']]}),
   card('A pool, not an asset','Additions go into the class. Proceeds of disposals, up to original cost, come out. CCA is the rate times the balance.',{rows:[['Opening UCC, Class 8','$10,000'],['CCA at 20%','($2,000)'],['Closing UCC','$8,000']]}),
   card('The first year is special','Traditionally only half the normal CCA is allowed on net additions in the year of purchase. This is the half-year rule. Temporary incentives have at times allowed more.',{tip:'First-year rules have changed several times. Always check what applies to the year being filed.'}),
   card('CCA is optional','A business may claim any amount up to the maximum. Claiming less in a loss year saves the deduction for a profitable one.'),
   card('When the class empties','',{rows:[['Recapture','Proceeds push the pool below zero: too much CCA was claimed. It is added to income.'],['Terminal loss','The last asset is gone and a balance remains. It is deducted from income.']]})
  ],[
   q('Class 10 has an opening UCC of $20,000 and no additions or disposals. Maximum CCA at 30% is…',['$6,000','$3,000','$20,000'],'$20,000 × 30% = $6,000.'),
   q('A business with a loss this year may want to…',['Claim less CCA than the maximum','Claim double CCA','Skip filing'],'CCA is discretionary. Unclaimed amounts stay in the pool for future years.'),
   q('The only asset in a class is sold for more than the UCC but less than its original cost. The result is…',['Recapture','A terminal loss','A capital gain'],'The pool goes below zero, showing that more CCA was claimed than the asset actually lost in value.')
  ],'cca'),
  lesson('t-gains','Capital gains and losses',4,[
   card('Only half is taxed','A capital gain arises when capital property, such as shares, land or a building, is sold for more than its cost. Half of the gain is included in income.',{rows:[['Proceeds','$50,000'],['Adjusted cost base','($30,000)'],['Selling costs','($1,000)'],['Capital gain','$19,000'],['Taxable capital gain (50%)','$9,500']]}),
   card('Losses have limits','Half of a capital loss is an allowable capital loss. It can only be deducted against taxable capital gains, and can be carried back three years or forward indefinitely.'),
   card('Income or capital?','Selling something you held to use or to earn income from is capital. Selling something you bought to resell is business income, fully taxable. Intention and frequency decide.'),
   card('Notable reliefs','',{points:['The principal residence exemption','The lifetime capital gains exemption on qualifying small business shares and on farm or fishing property'],tip:'The exemption limit changes. Look up the current amount.'})
  ],[
   q('Shares bought for $8,000 are sold for $14,000. The taxable capital gain is…',['$3,000','$6,000','$14,000'],'The gain is $6,000 and half of it is included in income.'),
   q('An allowable capital loss can be deducted against…',['Taxable capital gains only','Any income','Employment income only'],'Capital losses are restricted to offsetting capital gains.')
  ]),
  lesson('t-personal','Personal tax: the T1',5,[
   card('Progressive rates','Income is taxed in brackets. Each slice of income is taxed at its own rate, so moving into a higher bracket never reduces take-home pay.',{tip:'An illustration with made-up rates: the first $50,000 at 15% and the next $20,000 at 20% gives $7,500 + $4,000 = $11,500 of tax on $70,000. Real brackets are indexed every year.'}),
   card('Marginal and average','',{rows:[['Marginal rate','Tax on the next dollar: 20% in the illustration'],['Average rate','Total tax ÷ income: $11,500 ÷ $70,000 = 16.4%']],tip:'Use the marginal rate to judge the value of a deduction or of extra income.'}),
   card('Common deductions','',{points:['RRSP contributions','Child care expenses','Moving expenses for work','Part of the CPP paid on self-employment income']}),
   card('Common credits','Most are non-refundable: they can reduce tax to zero but no further, and are calculated at the lowest tax rate.',{points:['The basic personal amount','CPP and EI paid as an employee','Medical expenses, donations and tuition']}),
   card('Deadlines','',{rows:[['Most individuals','File and pay by April 30'],['Self-employed individuals and their spouses','File by June 15, but pay by April 30']]})
  ],[
   q('Using illustrative rates of 15% on the first $50,000 and 20% above that, tax on $60,000 is…',['$9,500','$12,000','$9,000'],'$50,000 × 15% + $10,000 × 20% = $7,500 + $2,000.'),
   q('A self-employed consultant must pay any balance owing by…',['April 30','June 15','December 31'],'The filing deadline is June 15, but interest runs on unpaid tax from April 30.'),
   q('An RRSP contribution is…',['A deduction from income','A non-refundable credit','A refundable credit'],'It reduces income, so it saves tax at the contributor’s marginal rate.')
  ]),
  lesson('t-corporate','Corporate tax: the T2',4,[
   card('A corporation is a separate taxpayer','It files its own T2 return and pays tax on its own taxable income, at flat rates rather than brackets.'),
   card('The small business deduction','A Canadian-controlled private corporation (CCPC) pays a much lower rate on its first $500,000 of active business income each year.',{rows:[['Federal small business rate','9%'],['Federal general rate','15%'],['In addition','Provincial tax on top of each']],tip:'The $500,000 limit must be shared among associated corporations.'}),
   card('Investment income is different','Passive income inside a CCPC, such as interest and rent, is taxed at a high rate, part of which is refunded when the company pays taxable dividends. Large passive income can also shrink the small business limit.'),
   card('Deadlines','',{rows:[['File the T2','Within six months of the year-end'],['Pay the balance','Within two months, or three for qualifying CCPCs']],tip:'The balance is due before the return is. Interest starts at the payment date.'})
  ],[
   q('A CCPC earns $200,000 of active business income. Federal tax at the small business rate is…',['$18,000','$30,000','$76,000'],'$200,000 × 9% = $18,000, before provincial tax.'),
   q('A corporation with a December 31 year-end must file its T2 by…',['June 30','April 30','March 31'],'The return is due six months after the end of the tax year.'),
   q('Two associated CCPCs each have active business income of $400,000. Together they can claim the small business rate on…',['$500,000','$800,000','$1,000,000'],'Associated corporations share one business limit.')
  ]),
  lesson('t-compensation','Owner compensation: salary or dividends',4,[
   card('Two ways out of the company','',{rows:[['Salary','Deductible to the corporation. Taxed as employment income. Payroll deductions apply.'],['Dividends','Paid from after-tax profit. Not deductible. Taxed at a lower personal rate.']]}),
   card('Integration','The system aims for the same total tax whether income is earned personally or through a corporation and then paid out. The dividend is grossed up, and a dividend tax credit gives the shareholder credit for tax the company already paid.',{rows:[['Eligible dividends','From income taxed at the general rate: larger credit'],['Non-eligible dividends','From income taxed at the small business rate: smaller credit']]}),
   card('What salary does that dividends do not','',{points:['Creates RRSP contribution room','Builds CPP entitlement, at the cost of both halves of CPP','Is a deductible expense for the corporation']}),
   card('Shareholder loans','Money taken out with no salary or dividend declared is a loan from the company. If it is not repaid within one year after the end of the corporation’s tax year, it is generally included in the shareholder’s income.')
  ],[
   q('Which payment to an owner-manager is deductible to the corporation?',['Salary','Dividends','Repayment of a shareholder loan'],'Salary is a business expense. Dividends are a distribution of profit that has already been taxed.'),
   q('Why does a dividend carry a tax credit?',['The corporation already paid tax on that income','Dividends are a reward for investing','To encourage saving'],'The credit prevents the same income from being fully taxed twice.'),
   q('An owner who takes only dividends…',['Creates no new RRSP room','Pays CPP on them','Reduces the corporation’s taxable income'],'RRSP room is based on earned income, such as salary. Dividends do not count.')
  ],'shareholder'),
  lesson('t-compliance','Instalments, deadlines and penalties',4,[
   card('Paying during the year','Employees pay through withholding. Others may have to pay instalments.',{rows:[['Individuals','Quarterly, when net tax owing is over $3,000 this year and in either of the two previous years'],['Corporations','Usually monthly, when tax is over $3,000. Small CCPCs may pay quarterly.']],tip:'The individual threshold is $1,800 for Quebec residents.'}),
   card('Late filing','With a balance owing, the penalty is 5% of the balance plus 1% for each full month late, up to 12 months. Repeat late filers pay more.',{rows:[['Balance owing','$4,000'],['Filed three months late','5% + 3% = 8%'],['Penalty','$320, plus interest']]}),
   card('Interest','Interest is charged on unpaid tax, penalties and late instalments at a prescribed rate, compounded daily. It is not deductible.'),
   card('Records and reassessment','Keep books and supporting documents for six years. The CRA can normally reassess an individual or a CCPC for three years after the notice of assessment, and longer where there is misrepresentation.',{tip:'File on time even if you cannot pay. The late-filing penalty is avoided and only interest runs.'})
  ],[
   q('A taxpayer owes $2,000 and files two full months late. The late-filing penalty is…',['$140','$100','$40'],'5% + 2 × 1% = 7%, and $2,000 × 7% = $140.'),
   q('A client cannot afford to pay their balance by the deadline. The best advice is…',['File on time anyway','Wait to file until the money is available','Send a payment estimate with no return'],'Filing on time avoids the late-filing penalty. Only interest is charged on the unpaid amount.')
  ])
 ],
 quiz:[
  q('Canada taxes individuals based on…',['Residency','Citizenship','Where they were born'],'Residents are taxed on their worldwide income.'),
  q('The portion of a capital gain included in income is…',['50%','100%','25%'],'Half of the gain is a taxable capital gain.'),
  q('Capital cost allowance is…',['The tax version of depreciation','A tax credit','A penalty'],'Accounting depreciation is added back and CCA is deducted at prescribed rates.'),
  q('A CCPC’s small business rate applies to active business income up to…',['$500,000','$30,000','$1.5 million'],'That is the annual business limit, shared among associated corporations.'),
  q('Meals with clients are generally deductible at…',['50%','100%','0%'],'The Act limits meals and entertainment to half of the amount spent.'),
  q('Most individuals must file their T1 by…',['April 30','June 15','March 31'],'April 30 is the general deadline. Self-employed individuals have until June 15 to file.')
 ] };