import { q, card, lesson } from '@/components/course/courseHelpers';
export const taxPlanning = { id:'tax-planning', track:'advanced', area:'TAX PLANNING', title:'Personal and corporate tax planning', summary:'Using the rules deliberately: registered plans, incorporation, compensation and estates.',
 lessons:[
  lesson('tp-principles','Planning, avoidance and evasion',4,[
   card('Where the line is','',{rows:[['Tax planning','Arranging your affairs legally to pay less. Expected and legitimate.'],['Abusive avoidance','Within the letter of the law but against its purpose. Can be struck down.'],['Tax evasion','Hiding income or inventing deductions. A crime.']]}),
   card('The general anti-avoidance rule','GAAR lets the CRA deny a tax benefit from a transaction that was arranged mainly to get that benefit and that abuses the purpose of the Act.'),
   card('Three levers','Almost every plan uses one of them.',{rows:[['Defer','Pay the tax later: RRSPs, income left in a corporation'],['Split','Move income to someone taxed at a lower rate: a spousal RRSP, a salary for real work'],['Convert','Turn income into a type taxed more lightly: capital gains, dividends']]}),
   card('Think in marginal rates','A plan is worth the tax saved on the last dollars of income, less what it costs to set up and run. A plan that saves $500 and costs $2,000 in fees is not a plan.')
  ],[
   q('Arranging your affairs legally so that less tax is payable is…',['Tax planning','Tax evasion','Fraud'],'Taxpayers are entitled to order their affairs within the law.'),
   q('Deliberately not reporting cash sales is…',['Tax evasion','Tax avoidance','Tax deferral'],'It is a misrepresentation, and it carries penalties and possible prosecution.'),
   q('A transaction that follows the wording of the Act but defeats its purpose can be challenged under…',['The general anti-avoidance rule','The half-year rule','The small business deduction'],'GAAR targets abusive avoidance.')
  ]),
  lesson('tp-rrsp','The RRSP',5,[
   card('Deduct now, pay later','A contribution is deducted from income. Investments grow without tax. Withdrawals are taxed in full as ordinary income.'),
   card('Contribution room','New room each year is 18% of the previous year’s earned income, up to an annual dollar maximum, less any pension adjustment. Unused room carries forward.',{rows:[['Earned income last year','$80,000'],['New room at 18%','$14,400']],tip:'Contributions in the first 60 days of the year can be deducted on the previous year’s return. The annual maximum changes yearly.'}),
   card('Features worth knowing','',{points:['A spousal RRSP: you contribute and deduct, your spouse owns the plan and is taxed on withdrawals later','The Home Buyers’ Plan lets a first-time buyer borrow from the plan and repay it over time','Over-contributions beyond a $2,000 cushion are charged 1% a month']}),
   card('The end of the plan','By the end of the year the holder turns 71, the RRSP must be converted to a RRIF or an annuity, and minimum withdrawals begin.')
  ],[
   q('Earned income last year was $60,000, with no pension plan and no unused room. This year’s new RRSP room is…',['$10,800','$6,000','$18,000'],'$60,000 × 18% = $10,800.'),
   q('An RRSP must be converted to a RRIF or an annuity by the end of the year the holder turns…',['71','65','60'],'After that, minimum annual withdrawals are required.'),
   q('A spousal RRSP is mainly used to…',['Even out retirement income between spouses','Double the contribution room','Avoid tax on withdrawals'],'Two moderate incomes are taxed less than one large one.')
  ]),
  lesson('tp-tfsa','The TFSA, and choosing between plans',4,[
   card('Pay now, never again','TFSA contributions are not deductible. Growth and withdrawals are tax-free. Room builds every year from age 18 for Canadian residents, and a withdrawal is added back to your room the following January.'),
   card('RRSP against TFSA','$1,000 of pre-tax income, a 40% tax rate today, and an investment that doubles.',{rows:[['RRSP','Invest $1,000. It grows to $2,000. After 40% tax: $1,200.'],['TFSA','Pay tax first and invest $600. It grows to $1,200, tax-free.']],tip:'With the same rate now and later, the result is identical.'}),
   card('What tips the balance','',{rows:[['Lower rate in retirement','The RRSP wins: at 30% it leaves $1,400'],['Higher rate in retirement','The TFSA wins'],['Money needed before retirement','The TFSA: withdrawals are flexible and tax-free']]}),
   card('Other registered plans','The First Home Savings Account combines both: contributions are deductible and qualifying withdrawals for a first home are tax-free. The RESP attracts government grants for a child’s education.',{tip:'Annual limits for every plan change. Look up the current figures.'})
  ],[
   q('A $5,000 TFSA withdrawal made in March…',['Is tax-free, and the room returns next January','Is taxable','Permanently reduces contribution room'],'Re-contributing in the same year without spare room would be an over-contribution.'),
   q('A taxpayer in a 45% bracket today expects a 25% bracket in retirement. For retirement saving, the stronger choice is usually…',['The RRSP','The TFSA','A non-registered account'],'The deduction is worth 45% and the withdrawal will cost 25%.'),
   q('TFSA contributions are…',['Not deductible','Deductible, like RRSP contributions','Deductible only for seniors'],'The tax benefit comes at the other end, on growth and withdrawals.')
  ]),
  lesson('tp-incorporation','When to incorporate',4,[
   card('What changes','A corporation is a separate taxpayer. Business profit is taxed in the company first, at the low small business rate, and again personally only when it is paid out.'),
   card('The deferral','$100,000 of profit, an illustrative 12% combined small business rate, and a 45% personal rate.',{rows:[['Left in the corporation','$88,000 to reinvest'],['Earned personally','$55,000 to reinvest'],['Tax deferred','$33,000']],tip:'This is a deferral, not a saving. Personal tax follows when the money comes out.'}),
   card('Other advantages','',{points:['Limited liability for business debts','A choice of salary, dividends, or both','The lifetime capital gains exemption on a sale of qualifying shares','Easier to bring in partners or pass the business on']}),
   card('When it is not worth it','If the owner needs all the profit to live on, there is nothing to defer. Incorporation adds legal fees, a T2 return and separate books. And losses are trapped in the company instead of offsetting the owner’s other income.')
  ],[
   q('A business earns $200,000. The corporate rate is 12% and the owner’s personal rate is 48% (illustrative). If all the profit stays in the company, the tax deferred is…',['$72,000','$24,000','$96,000'],'The gap between the rates is 36%, and 36% of $200,000 is $72,000.'),
   q('Incorporation offers little tax advantage when the owner…',['Must withdraw all the profit to live on','Has profit to reinvest','Plans to sell the business'],'Deferral only works on money that stays in the corporation.')
  ]),
  lesson('tp-compensation','Tax-efficient compensation',4,[
   card('Designing the mix','Integration makes salary and dividends roughly equal in total tax, so the choice turns on everything else.',{rows:[['Favouring salary','RRSP room, CPP benefits, child care deductions, a steady income to show a lender'],['Favouring dividends','No CPP premiums, simpler administration, using up tax already paid in the company']]}),
   card('Bonuses and timing','A bonus accrued at year-end reduces the corporation’s income for that year, provided it is paid within 179 days after year-end. The owner is taxed when it is received, which can fall in the next calendar year.'),
   card('Paying family','A salary to a spouse or child is deductible only if it is reasonable for work actually done. Dividends to family members who are not active in the business are generally caught by the tax on split income and taxed at the top rate.'),
   card('Leaving money in','Profit beyond what the owner needs can stay in the company and be invested. Watch the passive income: too much of it reduces access to the small business rate.')
  ],[
   q('A bonus accrued at year-end is deductible to the corporation only if it is paid within…',['179 days after year-end','Two years after year-end','The same month'],'Otherwise the deduction moves to the year the bonus is actually paid.'),
   q('A salary paid to a spouse by the family corporation is deductible if…',['It is reasonable for work actually done','The spouse owns shares','It is under $50,000'],'The test is what an arm’s-length employee would be paid for the same work.'),
   q('An owner-manager who wants to build RRSP room should take enough…',['Salary','Dividends','Shareholder loans'],'RRSP room is based on earned income, and dividends are not earned income.')
  ]),
  lesson('tp-splitting','Income splitting and the attribution rules',4,[
   card('Why split','Progressive rates mean two incomes of $60,000 bear less tax than one of $120,000. The Act limits how far a family can rearrange income to take advantage.'),
   card('The attribution rules','If you give or lend money to your spouse to invest, the income is taxed back in your hands. For gifts to minor children, interest and dividends are attributed back, but capital gains are not.'),
   card('Ways that still work','',{points:['A spousal RRSP','Pension income splitting: up to 50% of eligible pension income','A loan to a spouse at the CRA’s prescribed rate, with the interest actually paid by January 30 each year','A reasonable salary for real work in the business','Each spouse investing their own earnings']}),
   card('Tax on split income','Dividends and certain other income received from a family business by someone not actively involved are taxed at the highest rate, removing the benefit. Working regularly in the business is the main way out.')
  ],[
   q('A high-income spouse gives $100,000 to a low-income spouse, who invests it. The interest earned is taxed…',['In the hands of the spouse who gave the money','In the hands of the spouse who invested it','Not at all'],'The attribution rules send the income back to the giver.'),
   q('Eligible pension income can be split with a spouse up to…',['50%','25%','100%'],'The election is made jointly each year on the tax returns.')
  ]),
  lesson('tp-estate','Estate basics',5,[
   card('Death is a tax event','A person is treated as having sold all capital property at fair market value immediately before death. Accrued gains are taxed on the final return.'),
   card('What softens it','',{rows:[['Spousal rollover','Property left to a spouse transfers at cost. The tax waits until the spouse sells or dies.'],['Principal residence exemption','The gain on the family home is usually exempt'],['RRSP or RRIF left to a spouse','Rolls into the spouse’s plan. Otherwise the whole balance is income on the final return.']]}),
   card('The final return','Due April 30 of the following year, or six months after death if that is later. The executor files it and should get a clearance certificate before distributing the estate.'),
   card('Planning ahead','',{points:['An up-to-date will and named beneficiaries on registered plans','Life insurance to fund the tax bill','An estate freeze: the owner swaps common shares for fixed-value preferred shares, so future growth accrues to the next generation']}),
   card('Probate','Provinces charge fees or tax to validate a will, based on the value of the estate. Assets with a named beneficiary or held jointly generally pass outside the estate.')
  ],[
   q('At death, a taxpayer’s capital property is generally treated as…',['Sold at fair market value immediately before death','Passed on with no tax effect','Sold at its original cost'],'This deemed disposition brings accrued gains into the final return.'),
   q('Capital property left to a surviving spouse…',['Can transfer at cost, deferring the tax','Is taxed at a higher rate','Must be taxed at fair market value'],'The rollover postpones the gain until the spouse disposes of the property.'),
   q('An estate freeze is designed to…',['Pass the future growth of a business to the next generation','Avoid filing a final return','Eliminate the tax on past gains'],'The owner’s value, and tax bill, is fixed at today’s amount.')
  ])
 ],
 quiz:[
  q('The three basic levers of tax planning are to defer, to split and to…',['Convert income to a type taxed more lightly','Hide income','Delay filing'],'Hiding income is evasion, not planning.'),
  q('RRSP contributions are…',['Deductible now and taxable when withdrawn','Never taxed','Taxed now and tax-free later'],'The RRSP defers tax to the year of withdrawal.'),
  q('Investment growth inside a TFSA is…',['Tax-free','Taxed each year','Taxed on withdrawal'],'Neither the growth nor the withdrawal is taxed.'),
  q('The main tax advantage of incorporating a profitable business is…',['Deferring tax on income left in the company','Eliminating personal tax','Exemption from GST/HST'],'The low corporate rate applies until the money is paid out.'),
  q('The tax on split income rules are aimed at…',['Dividends paid to family members who are not active in the business','Salaries paid to employees','RRSP withdrawals'],'They tax such income at the top rate.'),
  q('An RRSP balance at death that is not left to a spouse or dependant is…',['Included in full in the final return','Tax-free','Taxed at half the normal rate'],'The whole plan is treated as received immediately before death.')
 ] };