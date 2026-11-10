import { q, card, lesson, dr, cr } from '@/components/course/courseHelpers';
export const publicSector = { id:'public-sector', track:'advanced', area:'PUBLIC SECTOR & NOT-FOR-PROFIT', title:'Public sector and not-for-profit accounting', summary:'Accounting where the goal is accountability rather than profit.',
 lessons:[
  lesson('p-landscape','Who follows which standards',4,[
   card('No owners, no profit motive','Governments and not-for-profits exist to deliver services. Their statements answer a different question: was the money raised and spent as intended?'),
   card('The standards','',{rows:[['Governments','Public Sector Accounting Standards (PSAS), set by the Public Sector Accounting Board'],['Government not-for-profits','PSAS, with or without its not-for-profit sections'],['Private not-for-profits','Accounting standards for not-for-profit organizations (Part III of the Handbook), or IFRS']],tip:'Where Part III is silent, a private not-for-profit applies ASPE.'}),
   card('Who reads the statements','Taxpayers, legislators, donors, funders and members. Most cannot demand extra information, so the statements must show compliance with budgets and restrictions.'),
   card('What stays the same','Double entry, accrual accounting, assets and liabilities all work as they do in a business. What changes is the names, the presentation and the treatment of restricted money.')
  ],[
   q('A provincial government prepares its financial statements under…',['Public Sector Accounting Standards','ASPE','IFRS'],'PSAS applies to federal, provincial, territorial and local governments.'),
   q('A privately run food bank most likely reports under…',['Accounting standards for not-for-profit organizations','PSAS','The Income Tax Act'],'It is a private not-for-profit, so Part III applies.')
  ]),
  lesson('p-psas','Government financial statements',5,[
   card('A different balance sheet','A government’s statement of financial position separates what can pay debts from what delivers services.',{rows:[['Financial assets','Cash, receivables, investments'],['Liabilities','Payables, debt, pension obligations'],['Net debt','Liabilities minus financial assets'],['Non-financial assets','Tangible capital assets such as roads and buildings, and prepaid expenses'],['Accumulated surplus or deficit','Non-financial assets minus net debt']]}),
   card('In numbers','',{rows:[['Financial assets','$40 million'],['Liabilities','$65 million'],['Net debt','$25 million'],['Non-financial assets','$90 million'],['Accumulated surplus','$65 million']],tip:'Net debt shows how much future revenue is already committed to paying for past decisions.'}),
   card('The other statements','',{rows:[['Statement of operations','Revenue and expenses, with the annual surplus or deficit'],['Statement of change in net debt','Why net debt moved'],['Statement of cash flow','Cash by activity']]}),
   card('Actual against budget','PSAS requires actual results to be shown beside the budget that the council or legislature approved. Being held to the budget is the point.')
  ],[
   q('A government has financial assets of $30 million and liabilities of $50 million. Its net debt is…',['$20 million','$80 million','$30 million'],'$50 million − $30 million.'),
   q('Net debt is $20 million and non-financial assets are $70 million. The accumulated surplus is…',['$50 million','$90 million','$20 million'],'$70 million − $20 million.'),
   q('Under PSAS, roads and bridges are classified as…',['Non-financial assets','Financial assets','Expenses in the year they are built'],'They are capitalized and amortized, but they cannot be used to settle liabilities.')
  ]),
  lesson('p-revenue','Government revenue, transfers and capital assets',4,[
   card('Tax revenue','Recognized when the event being taxed happens and the tax has been authorized, not when the cash arrives. Property tax is revenue of the year it is levied for.'),
   card('Government transfers','Grants from one government to another. The recipient recognizes revenue when the transfer is authorized and the eligibility criteria are met.',{tip:'If stipulations create an obligation, such as money that must be returned unless a bridge is built, the recipient reports a liability until they are met.'}),
   card('Tangible capital assets','Governments capitalize roads, buildings, vehicles and water systems, and amortize them over their useful lives, just as a business does.'),
   card('Obligations that come later','Closing a landfill, or removing asbestos when a building is retired, will cost money. PSAS requires a liability for these retirement obligations while the asset is still in use.')
  ],[
   q('A municipality receives a provincial transfer that must be repaid unless a specific bridge is built. Until the bridge is built, the municipality reports…',['A liability','Revenue in full','A tangible capital asset'],'The stipulation creates an obligation, so revenue is deferred.'),
   q('PSAS requires the statement of operations to compare actual results with…',['The approved budget','Other governments','Next year’s forecast'],'Accountability to the budget is central to public sector reporting.')
  ]),
  lesson('p-contributions','Contributions and the deferral method',5,[
   card('Three kinds of contribution','',{rows:[['Unrestricted','The organization may use it as it sees fit'],['Restricted','The donor has specified the purpose'],['Endowment','The principal must be kept permanently. Only the income can be spent.']]}),
   card('The deferral method','Match contributions with the expenses they pay for.',{rows:[['Unrestricted contribution','Revenue when received'],['Restricted for expenses','Deferred, then revenue as the expenses are incurred'],['Restricted for a capital asset','Deferred, then revenue as the asset is amortized'],['Endowment contribution','A direct increase in net assets, never revenue']]}),
   card('In numbers','A charity receives a $50,000 grant restricted to a literacy program.',{entry:[dr('Cash',50000),cr('Deferred contributions',50000)]}),
   card('As the money is spent','It spends $30,000 on the program this year, so $30,000 is earned and $20,000 stays deferred.',{entry:[dr('Deferred contributions',30000),cr('Contribution revenue',30000)]})
  ],[
   q('Under the deferral method, a charity receives $80,000 restricted to a program and spends $50,000 on it this year. Contribution revenue is…',['$50,000','$80,000','$30,000'],'Revenue follows the related expenses. The other $30,000 remains deferred.'),
   q('Under the deferral method, an endowment contribution is reported as…',['A direct increase in net assets','Revenue when received','Deferred revenue'],'It can never be spent, so it never passes through operations.'),
   q('A donor gives $100,000 to buy a van that will be amortized over five years. Under the deferral method, revenue each year is…',['$20,000','$100,000 in the first year','Nothing'],'The contribution is recognized on the same basis as the asset is amortized.')
  ]),
  lesson('p-fund','Fund accounting',4,[
   card('What a fund is','A self-balancing set of accounts kept for a specific purpose. Each fund has its own assets, liabilities, revenue and expenses.',{rows:[['General fund','Day-to-day operations'],['Capital fund','Buildings and equipment, and the money raised for them'],['Endowment fund','Donations that must be kept permanently'],['Other restricted funds','A scholarship fund, a building campaign']]}),
   card('The restricted fund method','Restricted contributions are revenue of the matching restricted fund as soon as they are received. Endowment contributions are revenue of the endowment fund.',{tip:'A restricted contribution with no matching fund is deferred in the general fund, as under the deferral method.'}),
   card('Reading the columns','The statement of operations shows one column for each fund and a total. A reader can see at once how much of the surplus is actually free to spend.'),
   card('Interfund transfers','Moving money from the general fund to the capital fund is a transfer. It is not revenue or an expense, and it does not change the organization’s total net assets.')
  ],[
   q('Under the restricted fund method, a contribution restricted for a building, where a capital fund exists, is recognized as…',['Revenue of the capital fund when received','Deferred revenue in the general fund','A direct increase in net assets'],'The fund structure itself shows the restriction.'),
   q('A $10,000 transfer from the general fund to the capital fund is…',['An interfund transfer, not revenue or expense','Revenue of the capital fund','An expense of the organization'],'No resources entered or left the organization.')
  ]),
  lesson('p-statements','Not-for-profit statements and net assets',4,[
   card('The statements','',{rows:[['Statement of financial position','Assets, liabilities and net assets'],['Statement of operations','Revenue and expenses'],['Statement of changes in net assets','How each category of net assets moved'],['Statement of cash flows','Cash by activity']]}),
   card('Net assets, not equity','Nobody owns a not-for-profit. The difference between assets and liabilities is shown by restriction.',{rows:[['Unrestricted','Free to use'],['Internally restricted','Set aside by the board, which can reverse its decision'],['Externally restricted','Restricted by donors, including endowments'],['Invested in capital assets','Tied up in buildings and equipment']]}),
   card('Pledges and gifts in kind','A pledge is recorded as a receivable only when the amount can be reasonably estimated and collection is reasonably assured. Donated goods and services may be recorded when their fair value can be determined and the organization would otherwise have bought them.'),
   card('Relief for small organizations','A not-for-profit with average annual revenue under $500,000 may expense capital assets as they are bought, with disclosure, instead of capitalizing and amortizing them.')
  ],[
   q('The board sets aside $50,000 of unrestricted money for future repairs. This amount is…',['Internally restricted net assets','Externally restricted net assets','Deferred contributions'],'Only an outside party can create an external restriction.'),
   q('A pledge is recognized as a receivable when…',['The amount can be reasonably estimated and collection is reasonably assured','The donor first mentions it','The pledge is five years old'],'Many pledges are never honoured, so both tests must be met.')
  ]),
  lesson('p-compliance','Charities, filings and accountability',4,[
   card('Charity or non-profit?','A registered charity can issue official donation receipts and must meet the CRA’s rules for charities. Other non-profit organizations, such as clubs and associations, are generally tax-exempt but cannot issue receipts.'),
   card('The annual return','A registered charity files Form T3010 within six months of its fiscal year-end. Much of it is public. Failing to file can cost the charity its registration.'),
   card('Rules that shape the books','',{points:['Receipts must show the eligible amount of each gift','A minimum amount must be spent on charitable activities each year','Charities and many public bodies recover part of the GST/HST they pay through a rebate, not through input tax credits']}),
   card('Showing where the money went','Funders often ask for a report on each grant. Tracking expenses by program and by funder, with classes or projects in the software, makes those reports and the audit far easier.')
  ],[
   q('A registered charity must file its T3010 information return within…',['Six months of its fiscal year-end','Thirty days of its fiscal year-end','Two years of its fiscal year-end'],'The deadline is fixed by the fiscal period, not the calendar year.'),
   q('An official donation receipt for tax purposes may be issued by…',['A registered charity','Any non-profit club','Any business'],'Receipting is a privilege of registration.')
  ])
 ],
 quiz:[
  q('Public Sector Accounting Standards are set by…',['The Public Sector Accounting Board','The CRA','The Auditing and Assurance Standards Board'],'PSAB issues the standards in the Public Sector Accounting Handbook.'),
  q('On a government’s statement of financial position, net debt is…',['Liabilities minus financial assets','Total liabilities','The accumulated deficit'],'It measures the future revenue needed to pay for past transactions.'),
  q('The two methods a not-for-profit may use to account for contributions are…',['The deferral method and the restricted fund method','Cash and accrual','FIFO and weighted average'],'An organization chooses one and applies it consistently.'),
  q('In not-for-profit accounting, a fund is…',['A self-balancing set of accounts for a specific purpose','A bank account','A type of investment'],'One bank account can hold money belonging to several funds.'),
  q('Under the deferral method, contributions restricted for expenses are recognized as revenue…',['When the related expenses are incurred','When they are pledged','Never'],'Until then they are a liability called deferred contributions.'),
  q('The not-for-profit equivalent of equity is…',['Net assets','Share capital','Retained earnings'],'There are no owners, so there is no owners’ equity.')
 ] };