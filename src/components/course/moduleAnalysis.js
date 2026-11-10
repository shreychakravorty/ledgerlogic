import { q, card, lesson } from '@/components/course/courseHelpers';
export const analysis = { id:'analysis', area:'ANALYSIS', title:'Financial statement analysis', summary:'Reading statements the way a lender, investor or adviser does.',
 lessons:[
  lesson('an-trend','Horizontal and vertical analysis',4,[
   card('A number means little alone','Is $30,000 of profit good? It depends on last year, on the size of the business and on what competitors earn. Analysis is comparison.'),
   card('Horizontal: across time','',{rows:[['Sales last year','$400,000'],['Sales this year','$500,000'],['Change','$100,000'],['Percentage change','$100,000 ÷ $400,000 = 25%']],tip:'Always divide by the earlier year.'}),
   card('Vertical: within one year','Each line of the income statement as a percentage of sales. This is a common-size statement.',{rows:[['Sales','$500,000 = 100%'],['Cost of goods sold','$300,000 = 60%'],['Gross profit','$200,000 = 40%'],['Operating expenses','$150,000 = 30%'],['Net income','$30,000 = 6%']],tip:'On the balance sheet, each item is shown as a percentage of total assets.'}),
   card('Read them together','Sales up 25% looks strong. If expenses rose 40% over the same year, margins are shrinking. Several years of trend tell more than any single year.')
  ],[
   q('Sales rose from $200,000 to $230,000. The horizontal change is…',['15%','13%','30%'],'$30,000 ÷ $200,000 = 15%.'),
   q('In a common-size income statement, every line is shown as a percentage of…',['Sales','Net income','Total assets'],'Sales is the 100% base for the income statement.'),
   q('Sales grew 10% while cost of goods sold grew 18%. The gross margin percentage…',['Fell','Rose','Did not change'],'Costs grew faster than sales, so less of each sales dollar is left.')
  ]),
  lesson('an-liquidity','Liquidity',4,[
   card('Can it pay its bills?','Liquidity is the ability to meet obligations due within the next year.'),
   card('Three measures','Maple has $20,000 cash, $50,000 receivables and $60,000 inventory, against $65,000 of current liabilities.',{rows:[['Working capital','$130,000 − $65,000 = $65,000'],['Current ratio','$130,000 ÷ $65,000 = 2.0'],['Quick ratio','($20,000 + $50,000) ÷ $65,000 = 1.08']]}),
   card('Why the quick ratio leaves out inventory','Stock has to be sold and then collected before it can pay anyone. The quick ratio asks what happens if sales stop tomorrow.'),
   card('Reading the result','Too low signals risk. Too high can mean idle cash or bloated stock. A current ratio built on old inventory and overdue receivables is not real liquidity.',{tip:'Lenders often write a minimum current ratio into the loan agreement.'})
  ],[
   q('Current assets are $90,000 and current liabilities are $60,000. The current ratio is…',['1.5','0.67','3.0'],'$90,000 ÷ $60,000 = 1.5.'),
   q('Cash $10,000, receivables $20,000, inventory $40,000, current liabilities $30,000. The quick ratio is…',['1.0','2.33','0.33'],'($10,000 + $20,000) ÷ $30,000 = 1.0. Inventory is excluded.'),
   q('A company uses cash to pay a supplier’s bill. Its working capital…',['Does not change','Falls','Rises'],'Current assets and current liabilities fall by the same amount.')
  ]),
  lesson('an-solvency','Solvency and leverage',4,[
   card('Can it survive the long term?','Solvency is about carrying debt for years: how much has been borrowed, and how easily the interest is covered.'),
   card('Three measures','Maple has total assets of $300,000, liabilities of $180,000 and equity of $120,000. Profit before interest and tax is $50,000 and interest is $10,000.',{rows:[['Debt to equity','$180,000 ÷ $120,000 = 1.5'],['Debt to assets','$180,000 ÷ $300,000 = 60%'],['Times interest earned','$50,000 ÷ $10,000 = 5 times']]}),
   card('Leverage cuts both ways','Borrowing at 6% to earn 10% lifts the owners’ return. When earnings fall, the interest is still due, and the same leverage magnifies the loss.'),
   card('Compare like with like','Under IFRS 16 most leases sit on the balance sheet as debt. Under ASPE many do not. Two identical businesses can show different debt ratios purely because of the framework.')
  ],[
   q('Total liabilities are $240,000 and equity is $160,000. Debt to equity is…',['1.5','0.67','0.6'],'$240,000 ÷ $160,000 = 1.5.'),
   q('Profit before interest and tax is $80,000 and interest expense is $20,000. Times interest earned is…',['4','0.25','3'],'$80,000 ÷ $20,000 = 4 times.'),
   q('Two identical companies lease their premises. One reports under IFRS 16 and the other under ASPE with an operating lease. The IFRS company’s debt ratios look…',['Higher, because the lease is on its balance sheet','Lower','Identical'],'The economics are the same. Only the presentation differs.')
  ]),
  lesson('an-profit','Profitability and the DuPont breakdown',4,[
   card('Margins','Maple: sales $500,000, gross profit $200,000, operating profit $50,000, net income $30,000.',{rows:[['Gross margin','$200,000 ÷ $500,000 = 40%'],['Operating margin','$50,000 ÷ $500,000 = 10%'],['Net margin','$30,000 ÷ $500,000 = 6%']]}),
   card('Returns','',{rows:[['Return on assets','$30,000 ÷ $300,000 = 10%'],['Return on equity','$30,000 ÷ $120,000 = 25%']],tip:'Analysts often use the average of opening and closing balances.'}),
   card('DuPont: where the return comes from','',{rows:[['Net margin','6%'],['Asset turnover','$500,000 ÷ $300,000 = 1.67'],['Financial leverage','$300,000 ÷ $120,000 = 2.5'],['Return on equity','6% × 1.67 × 2.5 = 25%']]}),
   card('Why break it down','Two companies can both earn 25% on equity. One does it with rich margins, one with fast turnover, one with heavy debt. They carry very different risks.')
  ],[
   q('Net income is $45,000 and sales are $900,000. Net margin is…',['5%','20%','4.5%'],'$45,000 ÷ $900,000 = 5%.'),
   q('Net margin 4%, asset turnover 2.5, financial leverage 2.0. Return on equity is…',['20%','8.5%','10%'],'4% × 2.5 × 2.0 = 20%.'),
   q('A grocer with thin margins can still earn a strong return on equity through…',['High asset turnover','High prices','Low sales volume'],'Selling a lot from a small asset base makes up for a low margin on each sale.')
  ]),
  lesson('an-efficiency','Efficiency and the cash conversion cycle',4,[
   card('How hard are the assets working?','Efficiency ratios measure how quickly receivables are collected, stock is sold and suppliers are paid.'),
   card('Receivables','Maple: credit sales $500,000 and receivables $50,000.',{rows:[['Receivables turnover','$500,000 ÷ $50,000 = 10 times'],['Days sales outstanding','365 ÷ 10 = 36.5 days']]}),
   card('Inventory and payables','Cost of goods sold $300,000, inventory $60,000, payables $40,000.',{rows:[['Inventory turnover','$300,000 ÷ $60,000 = 5 times'],['Days in inventory','365 ÷ 5 = 73 days'],['Days payables','$40,000 ÷ $300,000 × 365 = about 49 days']]}),
   card('The cash conversion cycle','How long cash is tied up between paying suppliers and collecting from customers.',{rows:[['Days in inventory','73'],['Plus days sales outstanding','36.5'],['Less days payables','(49)'],['Cash conversion cycle','About 61 days']],tip:'A shorter cycle frees cash without borrowing.'})
  ],[
   q('Credit sales are $730,000 and receivables are $60,000. Days sales outstanding is…',['30 days','12 days','60 days'],'$60,000 ÷ $730,000 × 365 = 30 days.'),
   q('Cost of goods sold is $240,000 and inventory is $40,000. Inventory turnover is…',['6 times','0.17 times','4 times'],'$240,000 ÷ $40,000 = 6 times a year.'),
   q('Days in inventory 50, days sales outstanding 40, days payables 30. The cash conversion cycle is…',['60 days','120 days','20 days'],'50 + 40 − 30 = 60 days.')
  ]),
  lesson('an-cash','Analysing cash flows',4,[
   card('Profit includes estimates. Cash does not.','The cash flow statement shows whether reported profit is turning into money.'),
   card('Three sections','',{rows:[['Operating','Cash from the core business. Should be positive over time.'],['Investing','Buying and selling long-term assets. Usually negative in a growing business.'],['Financing','Borrowing, repaying, owner contributions and dividends']]}),
   card('Compare operating cash with profit','',{rows:[['Net income','$30,000'],['Add back depreciation','$20,000'],['Less increase in receivables','($15,000)'],['Less increase in inventory','($10,000)'],['Cash from operations','$25,000']]}),
   card('Free cash flow','What is left after keeping the business equipped.',{rows:[['Cash from operations','$25,000'],['Less capital expenditures','($18,000)'],['Free cash flow','$7,000']],tip:'This is the cash available to repay debt or pay the owners.'})
  ],[
   q('Net income is $50,000, depreciation is $10,000 and receivables rose by $25,000. Cash from operations is…',['$35,000','$85,000','$60,000'],'$50,000 + $10,000 − $25,000 = $35,000.'),
   q('Cash from operations is $70,000 and capital expenditures are $45,000. Free cash flow is…',['$25,000','$115,000','$45,000'],'$70,000 − $45,000 = $25,000.'),
   q('A company reports rising profit but negative operating cash flow three years running. The likeliest explanation is…',['Profit is tied up in growing receivables and inventory','Depreciation is too high','It repaid too much debt'],'Depreciation adds to operating cash and debt repayment is a financing item. Working capital is absorbing the profit.')
  ]),
  lesson('an-quality','Quality of earnings and red flags',4,[
   card('Good profit and poor profit','High-quality earnings are repeatable, backed by cash and based on cautious estimates.'),
   card('Red flags','',{points:['Receivables growing faster than sales','Inventory growing faster than cost of goods sold','Profit rising while operating cash falls','One-time gains inside operating results','Changes in estimates or policies that lift profit','“Non-recurring” charges that appear every year']}),
   card('Worked example','Sales rose 10% and receivables rose 40%. Days sales outstanding has jumped. Either collection has slowed, credit has been loosened to win sales, or revenue is being recorded too early.'),
   card('The limits of ratios','',{points:['Policies differ: FIFO or average cost, ASPE or IFRS','Year-end balances may not be typical in a seasonal business','Industry norms differ widely','A ratio raises a question. It does not answer it.']})
  ],[
   q('Sales grew 5% and receivables grew 35%. An analyst should first suspect…',['Collection problems or revenue recorded too early','Improved efficiency','Lower credit risk'],'Receivables should grow roughly in line with sales.'),
   q('This year’s profit includes a large gain on selling a building. For forecasting, the analyst should…',['Exclude it, because it will not recur','Treat it as normal operating profit','Double it'],'A forecast should rest on earnings the business can repeat.')
  ])
 ],
 quiz:[
  q('Vertical analysis of a balance sheet expresses each item as a percentage of…',['Total assets','Sales','Net income'],'Total assets is the 100% base for the balance sheet.'),
  q('Current assets are $150,000, including $60,000 of inventory. Current liabilities are $75,000. The quick ratio is…',['1.2','2.0','0.8'],'($150,000 − $60,000) ÷ $75,000 = 1.2.'),
  q('Return on equity equals net margin times asset turnover times…',['Financial leverage','Gross margin','The current ratio'],'That is the DuPont breakdown.'),
  q('A falling inventory turnover usually means…',['Stock is selling more slowly','Stock is selling faster','Suppliers are being paid sooner'],'The same sales are being supported by more stock.'),
  q('Times interest earned measures…',['How comfortably profit covers interest','How quickly customers pay','The return to shareholders'],'It divides profit before interest and tax by interest expense.'),
  q('Operating cash flow that stays well below net income year after year suggests…',['Lower-quality earnings','Strong liquidity','Low leverage'],'Profit that never becomes cash deserves a closer look.')
 ] };