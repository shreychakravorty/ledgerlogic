import { q, card, lesson } from '@/components/course/courseHelpers';
export const auditing = { id:'auditing', area:'AUDITING', title:'Auditing and assurance', summary:'How an independent accountant decides whether statements can be trusted.',
 lessons:[
  lesson('a-engagements','Audit, review and compilation',4,[
   card('Three levels of comfort','An outside accountant can attach three different levels of assurance to a set of financial statements.',{rows:[['Audit','Reasonable assurance and a positive opinion, under Canadian Auditing Standards (CAS)'],['Review','Limited assurance, based mostly on inquiry and analysis, under CSRE 2400'],['Compilation','No assurance. The accountant assembles the statements, under CSRS 4200']]}),
   card('Reasonable is not absolute','An audit gives high assurance, never a guarantee. Auditors test samples, rely on judgment, and can be deceived by collusion or forged documents.'),
   card('Who needs which','',{rows:[['Public companies','An audit is required'],['Private companies','Whatever lenders, shareholders or legislation ask for'],['Owner-managed businesses','Often a compilation, for the bank and the tax return']],tip:'The more assurance, the more work and the higher the fee.'}),
   card('Whose statements are they?','Management prepares the financial statements and is responsible for them. The auditor’s job is to express an opinion on them. The engagement letter records this split before work begins.')
  ],[
   q('A review engagement provides…',['Limited assurance','Reasonable assurance','No assurance'],'A review sits between an audit and a compilation. The conclusion is that nothing came to the accountant’s attention.'),
   q('In an audit, who is responsible for preparing the financial statements?',['Management','The auditor','The bank'],'The auditor only gives an opinion. Preparing the statements herself would mean auditing her own work.'),
   q('A lender wants a private company’s statements to carry the highest level of assurance. The company needs…',['An audit','A review','A compilation'],'Only an audit provides reasonable assurance.')
  ]),
  lesson('a-risk','Audit risk',4,[
   card('The risk an auditor worries about','Audit risk is the risk of giving a clean opinion on statements that are materially misstated.'),
   card('Three components','',{rows:[['Inherent risk','How likely an item is to be misstated before any controls: complex estimates, cash, unusual transactions'],['Control risk','The risk that the client’s controls fail to prevent or catch a misstatement'],['Detection risk','The risk that the auditor’s own procedures miss it']]}),
   card('Only one is the auditor’s to set','Inherent and control risk together are the risk of material misstatement. The auditor assesses it (CAS 315) and responds by setting detection risk (CAS 330).',{rows:[['High risk of misstatement','Detection risk must be low: more evidence, better evidence, closer to year-end'],['Low risk of misstatement','Detection risk can be higher: less testing is needed']]}),
   card('Understand the business first','Risk assessment starts with inquiry, analysis, observation and inspection of how the client really operates.',{tip:'Risk is assessed for the statements as a whole and for each assertion in each significant account.'})
  ],[
   q('The auditor assesses the risk of material misstatement in inventory as high. Detection risk must be set…',['Low, so more evidence is gathered','High, so less evidence is gathered','At the same level as last year'],'The higher the risk of misstatement, the less risk the auditor can accept of missing it.'),
   q('Which risk does the auditor directly control?',['Detection risk','Inherent risk','Control risk'],'Inherent and control risk belong to the client. The auditor can only assess them.'),
   q('A client’s revenue depends on complex estimates for long-term contracts. This mainly raises…',['Inherent risk','Detection risk','Sampling risk'],'Complexity and judgment make an item more likely to be misstated, whatever the controls.')
  ]),
  lesson('a-materiality','Materiality',4,[
   card('Not every error matters','A misstatement is material if it could reasonably be expected to influence the decisions of people who use the statements (CAS 320).'),
   card('Setting a number','The auditor applies a percentage to a benchmark. An illustration:',{rows:[['Profit before tax','$400,000'],['Overall materiality at 5%','$20,000'],['Performance materiality at 75%','$15,000']],tip:'The percentages are common practice, not rules. Revenue or total assets are used when profit is small or volatile.'}),
   card('Performance materiality','A lower working figure. Testing to it leaves a cushion, so that undetected and uncorrected misstatements together are unlikely to exceed overall materiality.'),
   card('Size is not everything','A small misstatement can still be material if it turns a loss into a profit, hides a breach of a loan covenant, or involves fraud or related parties.')
  ],[
   q('Profit before tax is $600,000 and the auditor uses 5% of it. Overall materiality is…',['$30,000','$3,000','$60,000'],'$600,000 × 5% = $30,000.'),
   q('A $2,000 error is the only thing that lets a client meet its bank covenant. The error is…',['Potentially material because of its nature','Immaterial because it is small','Material only if the bank complains'],'Materiality has a qualitative side. This error changes a decision a user would make.')
  ]),
  lesson('a-control','Internal control',4,[
   card('What controls are for','Reliable financial reporting, efficient operations, compliance with the law and the safeguarding of assets.'),
   card('Five components','',{rows:[['Control environment','The tone set by owners and management'],['Risk assessment','How the business spots what could go wrong'],['Information system','How transactions are captured and reported'],['Control activities','Approvals, reconciliations, segregation of duties'],['Monitoring','Checking that the controls keep working']]}),
   card('Preventive or detective','',{rows:[['Preventive','Stops the problem: approval before payment, passwords, locked stockroom'],['Detective','Finds it afterwards: bank reconciliation, review of exception reports']]}),
   card('Every system has limits','Collusion, management override, human error and cost all limit what controls can do.',{tip:'The auditor tests whether a control works only when she plans to rely on it. Significant deficiencies she finds are reported in writing to those charged with governance.'})
  ],[
   q('A monthly bank reconciliation reviewed by the owner is…',['A detective control','A preventive control','An inherent risk'],'It finds errors and theft after they happen.'),
   q('Which is an inherent limitation of any control system?',['Two employees can collude to get around it','Controls cost nothing to run','Controls remove the need for an audit'],'Segregation of duties fails when the people it separates work together.'),
   q('The auditor tests the operating effectiveness of a control when…',['She plans to rely on it to reduce other testing','The client asks her to','Materiality is low'],'If she will not rely on the control, she tests the balance directly instead.')
  ]),
  lesson('a-evidence','Assertions and audit evidence',5,[
   card('What management is claiming','Each number in the statements carries implied claims, called assertions.',{rows:[['Existence','The asset or transaction is real'],['Completeness','Nothing has been left out'],['Accuracy and valuation','The amount is right'],['Cut-off','It is in the correct period'],['Rights and obligations','The asset belongs to the entity, and the debt is the entity’s'],['Presentation','It is classified and disclosed properly']]}),
   card('Ways to gather evidence','',{rows:[['Inspection','Examining documents or the asset itself'],['Observation','Watching a process, such as a stock count'],['External confirmation','A reply sent straight to the auditor by a bank or customer'],['Recalculation and reperformance','Redoing the arithmetic or the control'],['Analytical procedures','Comparing a number with what was expected'],['Inquiry','Asking. Never enough on its own.']]}),
   card('Not all evidence is equal','CAS 500 asks for evidence that is sufficient and appropriate.',{points:['Evidence from outside the client beats evidence from inside','Evidence the auditor obtains directly beats evidence handed over','Documents beat conversations','Originals beat copies']}),
   card('Direction matters','',{rows:[['Testing existence','Start in the ledger and go back to the supporting document'],['Testing completeness','Start with the source document and follow it into the ledger']],tip:'Assets and revenue are tested mainly for overstatement. Liabilities and expenses are tested mainly for understatement.'})
  ],[
   q('To test that every shipment was invoiced, the auditor starts from…',['Shipping documents, and traces them to the sales records','The sales ledger, and looks for shipping documents','The bank statement'],'Completeness is tested from the source forward. Starting in the ledger can only find what was recorded.'),
   q('Which is the most reliable evidence of a receivable balance?',['A confirmation received directly from the customer','A verbal assurance from the client’s credit manager','An invoice copy printed by the client'],'It comes from an independent outside party and reaches the auditor directly.'),
   q('Attending the year-end inventory count mainly supports the assertion of…',['Existence','Rights and obligations','Presentation'],'Seeing and counting the stock shows that it is really there.')
  ]),
  lesson('a-procedures','Testing and sampling',4,[
   card('Two kinds of testing','',{rows:[['Tests of controls','Did the control operate as designed?'],['Substantive procedures','Is the number right? These are tests of details and analytical procedures.']],tip:'Substantive procedures are always performed on material balances, however strong the controls.'}),
   card('An analytical procedure','Build an expectation, then compare. Ten staff at an average of $50,000 should cost about $500,000. If wages expense shows $590,000, the difference needs an explanation.'),
   card('Sampling','Testing less than 100% of a population (CAS 530). Sampling risk is the chance that the sample leads to a different conclusion than testing everything would have. Every item must have a chance of being selected.'),
   card('Projecting what the sample found','',{rows:[['Population','$500,000'],['Sample tested','$50,000'],['Errors found','$1,000, which is 2% of the sample'],['Projected misstatement','$500,000 × 2% = $10,000']],tip:'Compare the projection with materiality, not just the errors actually found.'})
  ],[
   q('A sample of $40,000 from a $400,000 population contains $800 of overstatement. The projected misstatement is…',['$8,000','$800','$80,000'],'The error rate is $800 ÷ $40,000 = 2%, and 2% of $400,000 is $8,000.'),
   q('Sampling risk is the risk that…',['The sample leads to a different conclusion than testing every item would','The client refuses to provide documents','The auditor adds up the sample incorrectly'],'It exists whenever fewer than all items are tested.'),
   q('Comparing this year’s gross margin with last year’s and investigating a sharp change is…',['An analytical procedure','A test of controls','An external confirmation'],'It evaluates a number by its relationship to other data.')
  ]),
  lesson('a-report','The auditor’s report',4,[
   card('The opinion comes first','The report opens with the opinion, then the basis for it, then the responsibilities of management and of the auditor (CAS 700). An unmodified opinion says the statements present fairly, in all material respects, in accordance with ASPE or IFRS.'),
   card('When the opinion is modified','CAS 705 sets out three alternatives.',{rows:[['Qualified','A problem that is material but not pervasive: “except for”'],['Adverse','Misstatements that are material and pervasive: the statements do not present fairly'],['Disclaimer','Evidence could not be obtained and the possible effect is pervasive: no opinion is given']]}),
   card('Two possible causes','Either the statements are misstated and management will not correct them, or the auditor could not obtain enough evidence. How widespread the effect is decides which opinion applies.'),
   card('Other paragraphs a reader may see','',{rows:[['Material uncertainty related to going concern','Significant doubt about the entity’s ability to continue, properly disclosed in the notes'],['Key audit matters','The areas that needed the most attention. Required for listed entities.'],['Emphasis of matter','Points the reader to an important disclosure']],tip:'None of these three changes the opinion itself.'})
  ],[
   q('The auditor could not attend the inventory count. Inventory is material but the effect is not pervasive. The opinion is…',['Qualified','Adverse','Unmodified'],'A scope limitation that is material but confined to one area leads to an “except for” opinion.'),
   q('The statements are so misstated that they are misleading as a whole. The auditor issues…',['An adverse opinion','A disclaimer of opinion','A qualified opinion'],'The auditor has the evidence and concludes the statements do not present fairly.'),
   q('An unmodified opinion says the statements…',['Present fairly, in all material respects','Are exactly correct','Contain no fraud of any size'],'The opinion is bounded by materiality and by reasonable assurance.')
  ]),
  lesson('a-fraud','Fraud and professional scepticism',4,[
   card('Error or fraud?','Intent is the difference. Fraud comes in two forms.',{rows:[['Fraudulent financial reporting','Deliberately misstating the statements, often to meet a target'],['Misappropriation of assets','Theft, usually hidden by false entries']]}),
   card('The fraud triangle','',{rows:[['Pressure','Debts, bonuses, covenants, targets'],['Opportunity','Weak controls or the power to override them'],['Rationalization','“I will pay it back.” “Everyone does it.”']]}),
   card('Professional scepticism','A questioning mind: neither assuming management is dishonest nor assuming it is honest. CAS 240 presumes a risk of fraud in revenue recognition and in management override of controls, so auditors test journal entries, look for bias in estimates and examine unusual transactions.'),
   card('Who is responsible','Management and those charged with governance are responsible for preventing and detecting fraud. The auditor obtains reasonable assurance that the statements are free of material misstatement, whether from fraud or error.',{tip:'Suspected fraud is reported to a level of management above those involved.'})
  ],[
   q('A bookkeeper who alone handles deposits and the customer ledger has, in fraud-triangle terms,…',['Opportunity','Rationalization','Pressure'],'Custody plus recording gives the means to take money and conceal it.'),
   q('Under CAS 240 the auditor presumes a risk of fraud in…',['Revenue recognition','Petty cash','Prepaid insurance'],'Overstating revenue is the most common way statements are deliberately misstated.'),
   q('Primary responsibility for preventing and detecting fraud rests with…',['Management and those charged with governance','The external auditor','The CRA'],'The auditor’s responsibility is limited to material misstatement of the statements.')
  ])
 ],
 quiz:[
  q('Audits in Canada are performed under…',['Canadian Auditing Standards','The Income Tax Act','ASPE'],'ASPE and IFRS are the accounting frameworks. CAS governs how the audit is done.'),
  q('Audit risk is the risk that the auditor…',['Gives an inappropriate opinion on materially misstated statements','Loses the client','Misses any error at all'],'It concerns material misstatements only.'),
  q('Inquiry of management, used alone, is…',['Not sufficient audit evidence','The most reliable evidence','A test of details'],'What management says must be corroborated.'),
  q('A material misstatement confined to one account, which management refuses to correct, leads to…',['A qualified opinion','A disclaimer of opinion','An unmodified opinion'],'Material but not pervasive means “except for”.'),
  q('Performance materiality is set…',['Below overall materiality','Above overall materiality','Equal to the largest account balance'],'It leaves a margin for misstatements that are not detected.'),
  q('A compilation engagement provides…',['No assurance','Limited assurance','Reasonable assurance'],'The accountant assembles information supplied by management without testing it.')
 ] };