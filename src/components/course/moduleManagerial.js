import { q, card, lesson } from '@/components/course/courseHelpers';
export const managerial = { id:'managerial', area:'MANAGERIAL & COST ACCOUNTING', title:'Managerial and cost accounting', summary:'Numbers for decisions inside the business: what things cost and what to do about it.',
 lessons:[
  lesson('m-behaviour','Cost behaviour',4,[
   card('Managerial accounting looks forward','Financial accounting reports what happened, by the rules. Managerial accounting helps decide what to do next, and its only rule is usefulness.'),
   card('How a cost reacts to volume','',{rows:[['Variable','Changes in total with activity: beans, cups, card fees'],['Fixed','Stays the same in total: rent, insurance, salaries'],['Mixed','Part of each: a phone plan with a base fee plus usage']]}),
   card('Per unit, they flip','Rent is $2,000 a month.',{rows:[['Sell 1,000 cups','Rent is $2.00 per cup'],['Sell 4,000 cups','Rent is $0.50 per cup']],tip:'Variable cost per unit stays constant. Fixed cost per unit falls as volume rises.'}),
   card('Splitting a mixed cost: the high-low method','Electricity was $900 in a 2,000-cup month and $1,300 in a 4,000-cup month.',{rows:[['Variable rate','($1,300 − $900) ÷ (4,000 − 2,000) = $0.20 per cup'],['Fixed part','$1,300 − 4,000 × $0.20 = $500']]})
  ],[
   q('Output doubles. Total fixed cost…',['Stays the same','Doubles','Halves'],'Fixed costs do not change in total within the normal range of activity. Only the cost per unit falls.'),
   q('Delivery cost was $1,000 for 100 orders and $1,600 for 300 orders. The variable cost per order is…',['$3','$5.33','$10'],'($1,600 − $1,000) ÷ (300 − 100) = $3 per order.'),
   q('Which is a variable cost for a café?',['Coffee beans','The manager’s salary','The lease'],'Bean usage rises and falls with the number of cups sold.')
  ]),
  lesson('m-cvp','Cost-volume-profit and break-even',4,[
   card('Contribution margin','What each sale contributes toward fixed costs, and then profit.',{rows:[['Selling price per cup','$5.00'],['Variable cost per cup','$2.00'],['Contribution margin per cup','$3.00'],['Contribution margin ratio','60%']]}),
   card('Break-even','Fixed costs are $6,000 a month.',{rows:[['Break-even in units','$6,000 ÷ $3 = 2,000 cups'],['Break-even in sales','$6,000 ÷ 60% = $10,000']]}),
   card('Hitting a profit target','To earn $3,000 a month, treat the target like extra fixed cost.',{rows:[['Cups needed','($6,000 + $3,000) ÷ $3 = 3,000']]}),
   card('Margin of safety','Maple sells 2,500 cups a month.',{rows:[['Margin of safety','2,500 − 2,000 = 500 cups'],['As a percentage','500 ÷ 2,500 = 20%']],tip:'Sales could fall 20% before Maple starts losing money.'})
  ],[
   q('Price $40, variable cost $25, fixed costs $30,000. Break-even is…',['2,000 units','1,200 units','750 units'],'Contribution margin is $15, and $30,000 ÷ $15 = 2,000 units.'),
   q('Price $40, variable cost $25, fixed costs $30,000. Units needed for a $15,000 profit:',['3,000','2,000','1,000'],'($30,000 + $15,000) ÷ $15 = 3,000 units.'),
   q('If variable cost per unit rises and nothing else changes, break-even…',['Rises','Falls','Is unchanged'],'Each sale contributes less, so more sales are needed to cover the same fixed costs.')
  ]),
  lesson('m-job','Job-order costing',4,[
   card('Costing made-to-order work','When every job is different, such as a catering order or a renovation, costs are tracked job by job.'),
   card('Three ingredients','',{rows:[['Direct materials','Traced to the job'],['Direct labour','Traced to the job'],['Manufacturing overhead','Indirect costs, applied with a rate']]}),
   card('The predetermined overhead rate','Budgeted overhead is $60,000 and budgeted direct labour is 4,000 hours.',{rows:[['Rate','$60,000 ÷ 4,000 = $15 per labour hour']],tip:'The rate is set before the year starts so jobs can be costed as they finish.'}),
   card('Costing one job','',{rows:[['Direct materials','$800'],['Direct labour: 20 hours at $25','$500'],['Overhead applied: 20 hours at $15','$300'],['Job cost','$1,600']],tip:'If actual overhead for the year differs from the amount applied, the difference is over- or under-applied overhead, usually closed to cost of goods sold.'})
  ],[
   q('Budgeted overhead is $90,000 and budgeted machine hours are 6,000. A job using 40 machine hours is charged overhead of…',['$600','$15','$2,250'],'The rate is $90,000 ÷ 6,000 = $15 per hour, and 40 × $15 = $600.'),
   q('Actual overhead was $62,000 and $60,000 was applied to jobs. Overhead is…',['Under-applied by $2,000','Over-applied by $2,000','Correctly applied'],'Jobs absorbed less than was actually spent, so costs are understated by $2,000.'),
   q('Job-order costing suits…',['A custom cabinet maker','An oil refinery','A soft-drink bottler'],'Each cabinet job is distinct. The others make identical units continuously.')
  ],'jobcost'),
  lesson('m-process','Process costing',4,[
   card('Costing identical units','When thousands of identical units flow through a process, such as roasting coffee, cost is averaged over the units produced.'),
   card('Equivalent units','Half-finished units count for the work done so far. 1,000 bags that are 40% complete equal 400 finished bags of work.'),
   card('A month of roasting','9,000 bags were finished. 1,000 bags are still in process, 40% complete. Costs for the month were $28,200.',{rows:[['Equivalent units','9,000 + 1,000 × 40% = 9,400'],['Cost per equivalent unit','$28,200 ÷ 9,400 = $3.00']]}),
   card('Assigning the cost','',{rows:[['Finished bags','9,000 × $3 = $27,000'],['Ending work in process','400 × $3 = $1,200'],['Total accounted for','$28,200']],tip:'Materials and conversion costs are often at different stages of completion, so they are usually calculated separately.'})
  ],[
   q('2,000 units are 25% complete. They represent…',['500 equivalent units','2,000 equivalent units','1,500 equivalent units'],'2,000 × 25% = 500 units’ worth of work.'),
   q('Costs are $50,000. 4,000 units were finished and 2,000 are 50% complete. Cost per equivalent unit is…',['$10','$8.33','$12.50'],'Equivalent units are 4,000 + 1,000 = 5,000, and $50,000 ÷ 5,000 = $10.')
  ]),
  lesson('m-abc','Activity-based costing',4,[
   card('One overhead rate can mislead','If overhead is spread by labour hours alone, a simple high-volume product can end up paying for the complexity of a fussy low-volume one.'),
   card('Cost the activities instead','',{rows:[['1. Identify activities','Setups, purchasing, quality checks'],['2. Pool the cost of each','Setups cost $20,000 a year'],['3. Pick a driver','Number of setups: 100'],['4. Compute a rate','$200 per setup']]}),
   card('What changes','House blend: 10 setups for 10,000 bags. Seasonal blend: 40 setups for 1,000 bags.',{rows:[['House blend','$2,000 ÷ 10,000 = $0.20 per bag'],['Seasonal blend','$8,000 ÷ 1,000 = $8.00 per bag']]}),
   card('When it is worth it','ABC costs more to run. It pays off when overhead is large, products differ a lot in complexity, and pricing or product-mix decisions depend on accurate costs.')
  ],[
   q('Purchasing costs $30,000 a year for 600 purchase orders. A product needing 12 orders is assigned…',['$600','$50','$2,500'],'The rate is $30,000 ÷ 600 = $50 per order, and 12 × $50 = $600.'),
   q('Under a single labour-hour overhead rate, complex low-volume products tend to be…',['Under-costed','Over-costed','Costed accurately'],'They use many support activities but few labour hours, so they absorb too little overhead.')
  ]),
  lesson('m-budget','Budgeting and the master budget',4,[
   card('A budget is a plan in numbers','It forces decisions before the year starts, coordinates the parts of the business, and gives actual results something to be compared with.'),
   card('Everything starts with sales','',{points:['1. Sales budget','2. Production or purchases budget','3. Expense budgets','4. Cash budget','5. Budgeted income statement and balance sheet']}),
   card('A purchases budget','Maple expects to sell 3,000 bags, wants 400 on hand at month-end, and starts with 300.',{rows:[['Needed','3,000 + 400 = 3,400'],['Less opening stock','(300)'],['Bags to buy','3,100']]}),
   card('The cash budget','Profit and cash differ in timing. April sales are $20,000: 60% is collected in April and 40% in May. March sales were $15,000.',{rows:[['From April sales','$20,000 × 60% = $12,000'],['From March sales','$15,000 × 40% = $6,000'],['April collections','$18,000']],tip:'A cash budget shows a shortfall early enough to arrange financing.'})
  ],[
   q('Expected sales 5,000 units, desired ending stock 800, opening stock 600. Units to purchase:',['5,200','4,800','6,400'],'5,000 + 800 − 600 = 5,200.'),
   q('Sales: May $30,000, June $40,000. 70% is collected in the month of sale and 30% the next month. June collections are…',['$37,000','$40,000','$33,000'],'$40,000 × 70% + $30,000 × 30% = $28,000 + $9,000.'),
   q('Which budget is prepared first?',['Sales','Cash','Purchases'],'Every other budget depends on the expected level of sales.')
  ]),
  lesson('m-variance','Standard costs and variance analysis',5,[
   card('A standard is what it should cost','Compare actual cost with the standard allowed for what was actually produced. The gap is a variance: favourable if cost is lower, unfavourable if higher.'),
   card('Flex the budget first','A budget for 1,000 units cannot fairly judge a month that made 1,200. Recalculate the budget at the actual volume, then compare.'),
   card('Materials: price and quantity','Standard: 2 kg per unit at $5 per kg. Actual: 1,000 units made, using 2,100 kg bought at $4.80.',{rows:[['Price variance','2,100 × ($4.80 − $5.00) = $420 favourable'],['Quantity variance','(2,100 − 2,000) × $5 = $500 unfavourable'],['Total','$80 unfavourable']]}),
   card('Labour: rate and efficiency','Standard: 0.5 hours per unit at $20. Actual: 520 hours at $21 for 1,000 units.',{rows:[['Rate variance','520 × ($21 − $20) = $520 unfavourable'],['Efficiency variance','(520 − 500) × $20 = $400 unfavourable']],tip:'A variance is a question, not an answer. Cheaper material that wastes more may explain both material variances above.'})
  ],[
   q('Standard price is $10 per kg. Maple bought and used 500 kg at $11. The price variance is…',['$500 unfavourable','$500 favourable','$5,500 unfavourable'],'500 × ($11 − $10) = $500 more than standard.'),
   q('The standard allows 300 hours for actual output. 280 hours were worked. The standard rate is $25. The efficiency variance is…',['$500 favourable','$500 unfavourable','$7,000 favourable'],'(280 − 300) × $25 = $500 less than standard.')
  ]),
  lesson('m-relevant','Relevant costs for decisions',4,[
   card('Only the future, and only what differs','A cost is relevant to a decision if it will happen in the future and differs between the options.',{rows:[['Sunk cost','Already spent. Ignore it.'],['Opportunity cost','What you give up by choosing. Include it.'],['Unavoidable fixed cost','The same either way. Ignore it.']]}),
   card('A special order','Maple has spare capacity. A hotel offers $7 a bag for 500 bags. The normal price is $12, variable cost is $5, and fixed costs will not change.',{rows:[['Extra revenue','$3,500'],['Extra variable cost','($2,500)'],['Extra profit','$1,000']],tip:'Accept, provided it will not undercut regular sales. Full cost per bag is not the test.'}),
   card('Make or buy','Maple makes syrup for $4 a bottle: $3 variable, and $1 of rent that continues anyway. A supplier offers it at $3.50.',{rows:[['Cost avoided by buying','$3.00'],['Price to buy','$3.50']],tip:'Keep making it. Only $3 would actually be saved.'}),
   card('Dropping a product','A line shows a $2,000 loss after $5,000 of allocated head-office cost. If that cost continues anyway, dropping the line loses its $3,000 contribution.')
  ],[
   q('Maple paid $8,000 last year for a machine it now might replace. In the decision, the $8,000 is…',['A sunk cost and irrelevant','An opportunity cost','A relevant cost'],'It is already spent and is the same whichever option is chosen.'),
   q('Spare capacity exists. Variable cost is $30, allocated fixed cost is $15, and a one-time order offers $38 per unit. Each unit adds profit of…',['$8','−$7','$38'],'Fixed costs do not change, so only the $30 variable cost is relevant: $38 − $30 = $8.')
  ]),
  lesson('m-capital','Capital budgeting',4,[
   card('Big, long-lived decisions','Buying a roaster or opening a second shop ties up money for years. Capital budgeting compares the cash put in with the cash expected back.'),
   card('Payback: how fast is the money returned?','A $24,000 roaster saves $8,000 of cash a year.',{rows:[['Payback period','$24,000 ÷ $8,000 = 3 years']],tip:'Simple, but it ignores everything after payback and the time value of money.'}),
   card('A dollar later is worth less','At a 10% required return, $1,100 received in one year is worth $1,100 ÷ 1.10 = $1,000 today. That is its present value.'),
   card('Net present value','Invest $9,000 today for $5,500 in one year and $6,050 in two years, at 10%.',{rows:[['Year 1','$5,500 ÷ 1.10 = $5,000'],['Year 2','$6,050 ÷ 1.21 = $5,000'],['Present value of inflows','$10,000'],['Net present value','$10,000 − $9,000 = $1,000']],tip:'A positive NPV means the project earns more than the required return. Accept it.'})
  ],[
   q('A $60,000 machine generates $15,000 of cash a year. Payback is…',['4 years','3 years','5 years'],'$60,000 ÷ $15,000 = 4 years.'),
   q('At a 5% required return, $2,100 received in one year has a present value of…',['$2,000','$2,205','$1,995'],'$2,100 ÷ 1.05 = $2,000.'),
   q('A project’s net present value is negative. It…',['Earns less than the required return','Must lose money in accounting terms','Has no payback period'],'It may still be profitable, but not by enough to cover the cost of the money invested.')
  ])
 ],
 quiz:[
  q('Contribution margin is…',['Sales minus variable costs','Sales minus fixed costs','Sales minus all costs'],'It is what remains to cover fixed costs and then provide profit.'),
  q('Price $20, variable cost $12, fixed costs $16,000. Break-even units:',['2,000','800','1,333'],'$16,000 ÷ ($20 − $12) = 2,000 units.'),
  q('A predetermined overhead rate is calculated from…',['Budgeted overhead and budgeted activity','Actual overhead and actual activity','Last month’s overhead'],'It is set in advance so jobs can be costed during the year.'),
  q('Equivalent units are used in…',['Process costing','Job-order costing','Capital budgeting'],'They convert partly finished units into the equivalent number of finished ones.'),
  q('Actual material used was 1,050 kg. The standard allowed was 1,000 kg at $4. The quantity variance is…',['$200 unfavourable','$200 favourable','$50 unfavourable'],'(1,050 − 1,000) × $4 = $200 over standard.'),
  q('Which cost should be ignored in a decision?',['Money already spent that cannot be recovered','The contribution lost from the next best option','A cost that only one option incurs'],'A sunk cost is the same whatever is decided, so it cannot affect the choice.')
 ] };