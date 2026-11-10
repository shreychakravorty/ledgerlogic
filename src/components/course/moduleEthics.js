import { q, card, lesson } from '@/components/course/courseHelpers';
export const ethics = { id:'ethics', area:'ETHICS', title:'Professional ethics', summary:'The duties that make an accountant’s word worth something.',
 lessons:[
  lesson('e-code','The CPA Code of Professional Conduct',4,[
   card('Why a code exists','People act on an accountant’s work without being able to check it. The profession is allowed to regulate itself only because it puts the public interest first.'),
   card('Who it binds','Every CPA and CPA student, whether in public practice, industry, government or teaching. The Code is harmonized across Canada and is adopted and enforced by each provincial CPA body.'),
   card('Five fundamental principles','',{rows:[['Professional behaviour','Protect the reputation of the profession'],['Integrity and due care','Be honest, and do the work carefully'],['Objectivity','Let no bias, conflict or pressure override judgment'],['Professional competence','Have and keep the skills the work needs'],['Confidentiality','Protect what you learn through your work']]}),
   card('When the Code is broken','Complaints are investigated by the provincial body. Outcomes range from a reprimand, fine or required training to suspension or expulsion, and decisions are usually published.',{tip:'The Code is a minimum. When a situation is not covered, the principles still apply.'})
  ],[
   q('The CPA Code applies to…',['All members, whether in public practice or not','Only auditors','Only members who sign tax returns'],'A controller in industry is bound by the same principles as a partner in a firm.'),
   q('Complaints about a CPA’s conduct are investigated by…',['The provincial CPA body','The CRA','The client’s lawyer'],'Each provincial body enforces the Code for its own members.')
  ]),
  lesson('e-integrity','Integrity, due care and competence',4,[
   card('Integrity','Be straightforward and honest. A CPA must not be associated with information she knows is false or misleading, and that includes misleading by leaving something out.'),
   card('Due care and competence','Accept only work you can do properly, or bring in someone who can. Supervise staff, keep working papers, and keep learning: continuing professional development is mandatory.'),
   card('Professional behaviour','Obey the law, be honest in advertising, and avoid conduct that would discredit the profession, inside or outside work.'),
   card('In practice','',{rows:[['A client asks you to backdate an invoice','Refuse'],['You lack experience in a specialised tax area','Refer the work or consult a specialist'],['You find your own mistake in last year’s file','Tell the client and correct it']]})
  ],[
   q('A CPA’s employer asks her to record December sales for goods that shipped in January. She should…',['Refuse, because she would be associated with misleading information','Record them, since her employer is responsible','Record them and note her objection privately'],'Integrity applies to members in industry. Following instructions is not a defence.'),
   q('A practitioner is offered an engagement in an industry she has never worked in. She may accept if…',['She can gain the competence or bring in someone who has it','The fee is high enough','The client signs a waiver'],'Competence can be acquired or supplemented, but it cannot be waived.'),
   q('Continuing professional development is required because…',['Competence must be maintained, not just earned once','It raises fees','It replaces practice inspection'],'Standards, tax law and technology keep changing.')
  ]),
  lesson('e-independence','Independence',4,[
   card('Required for assurance work','A CPA must be independent of a client when performing an audit or a review. Bookkeeping and tax work alone do not require independence, though objectivity always applies.'),
   card('Two sides','',{rows:[['Independence of mind','Actually being unbiased'],['Independence in appearance','A reasonable, informed observer would conclude you are unbiased']]}),
   card('Five threats','',{rows:[['Self-interest','A financial stake in the client, or dependence on its fees'],['Self-review','Auditing work your own firm produced'],['Advocacy','Promoting the client’s position'],['Familiarity','A close or long relationship with the client'],['Intimidation','Pressure or threats from the client']]}),
   card('Safeguards, and hard limits','Identify each threat, judge how serious it is, and apply safeguards such as a second-partner review, rotating senior staff or separate teams. If no safeguard is enough, decline.',{tip:'Some situations are prohibited outright, such as an audit team member owning shares in the client.'})
  ],[
   q('An audit firm also prepared the client’s journal entries and financial statements. The main threat is…',['Self-review','Advocacy','Intimidation'],'The firm would be auditing its own work.'),
   q('The lead audit partner owns shares in the company being audited. This is…',['A self-interest threat that no safeguard can cure','Acceptable if disclosed in the report','Acceptable if the holding is small'],'A direct financial interest held by a member of the audit team is prohibited.'),
   q('Independence in appearance means…',['A reasonable, informed observer would conclude the auditor is unbiased','The auditor feels unbiased','The client states the auditor is independent'],'Users must be able to trust the opinion, so how it looks matters as much as how it is.')
  ]),
  lesson('e-confidentiality','Confidentiality',4,[
   card('What it covers','Anything learned through professional work. The duty is not to disclose it and not to use it for your own or anyone else’s advantage. It continues after the engagement or the job ends.'),
   card('When disclosure is allowed','',{points:['The client or employer consents','The law requires it, for example a court order','The provincial body requires it for practice inspection or discipline','You need it to defend yourself in legal or disciplinary proceedings']}),
   card('Everyday risks','',{points:['Discussing clients in public places','Emailing a file to the wrong person','Working on client data on a shared or personal device','A new employer asking about former clients']}),
   card('Not a cover for wrongdoing','Confidentiality never requires a CPA to help conceal something. If staying silent would mean being associated with misleading information, the answer may be to resign. Get legal advice before disclosing anything outside.')
  ],[
   q('Through an engagement a CPA learns that a client is about to be acquired, and buys its shares. She has breached…',['Confidentiality, by using client information for personal gain','Nothing, since she told no one','Only the client’s internal policy'],'The duty covers use as well as disclosure.'),
   q('A competitor of a former client hires a CPA and asks about that client’s pricing. The duty of confidentiality…',['Still applies','Ended with the engagement','Applies only for one year'],'It survives the end of the relationship.'),
   q('Which permits disclosure of client information without the client’s consent?',['A court order','A request from a journalist','A question from another client'],'A legal requirement overrides the duty.')
  ]),
  lesson('e-conflicts','Conflicts of interest',4,[
   card('What a conflict is','A conflict exists when a duty to one client or employer pulls against a duty to another, or against your own interests.'),
   card('Typical conflicts','',{rows:[['Two clients on opposite sides','The buyer and the seller of the same business'],['Client against self','Recommending a product that pays you a commission'],['Employer against self','Approving a contract with a relative’s company'],['Owners in dispute','Advising both partners as they separate']]}),
   card('Three steps','',{points:['1. Identify conflicts before accepting work, and again as things change','2. Evaluate: would a reasonable observer think your judgment is compromised?','3. Manage: disclose to everyone affected and get their consent, add safeguards, or decline']}),
   card('Gifts, commissions and contingent fees','Gifts and hospitality beyond the trivial threaten objectivity. Commissions and referral fees must be disclosed where they are allowed at all. Contingent fees are not permitted for assurance engagements.',{tip:'The detailed rules differ slightly by province. Check your own body’s version.'})
  ],[
   q('A CPA is asked to advise both the buyer and the seller of the same business. She may act only if…',['Both know of the conflict and consent, and she can still serve each objectively','She charges both the same fee','The deal closes quickly'],'Disclosure and informed consent are the minimum. If objectivity is still at risk, she must decline.'),
   q('An audit fee that depends on the client obtaining its bank loan is…',['A contingent fee, which is not permitted for assurance work','Acceptable if disclosed in the report','Acceptable for private companies'],'The auditor would have a financial interest in the outcome.')
  ]),
  lesson('e-decisions','A framework for ethical decisions',4,[
   card('A repeatable method','',{points:['1. Get the facts, and identify who is affected','2. Name the ethical issue and the principles at stake','3. List the options','4. Weigh the consequences of each','5. Decide and act','6. Document what you did and why']}),
   card('Worked example','The owner asks the controller to hold back supplier bills until after year-end so the company meets its loan covenant.',{rows:[['Principles at stake','Integrity and objectivity'],['Who is affected','The bank, the owner, staff, the controller'],['Options','Comply, persuade, escalate or refuse'],['Decision','Explain the problem, refuse to misstate, and document the conversation']]}),
   card('When the pressure comes from above','Raise it inside first: your supervisor, then the next level, then the board or audit committee. Keep notes. The provincial body offers confidential guidance, and legal advice may be needed. Resigning is the last resort, but staying associated with misleading statements is not an option.'),
   card('Two quick tests','Would I be comfortable if this appeared in the news? Would a colleague I respect think it was right?')
  ],[
   q('The first step in resolving an ethical problem is to…',['Establish the facts and who is affected','Resign','Report the matter to the media'],'Decisions made on assumptions tend to be wrong.'),
   q('A controller’s concern about misleading statements is dismissed by her supervisor. Her next step is usually to…',['Raise it with the next level of management or the board','Drop the matter','Quietly change the entries herself'],'Escalate internally, and document each step, before considering anything more drastic.')
  ]),
  lesson('e-errors','Responding to errors and wrongdoing',4,[
   card('An error in a client’s past tax return','Tell the client, explain the consequences and recommend correcting it. You may not inform the CRA without the client’s consent. If the client refuses, you cannot be associated with any return that relies on the error, and should consider ceasing to act.'),
   card('Your own error','Tell the client promptly, correct it, and notify your professional liability insurer. Hiding it turns a mistake into a breach of integrity.'),
   card('Suspected fraud or illegal acts','',{rows:[['As an auditor','Report to an appropriate level of management and to those charged with governance'],['As an employee','Escalate internally, above the people involved'],['In either role','Document everything, and get legal advice before reporting outside']]}),
   card('Other duties','Serious misconduct by another CPA is reported to the provincial body. Some activities also carry anti-money-laundering obligations.')
  ],[
   q('A CPA finds that a client under-reported income two years ago. The client refuses to correct it. The CPA should…',['Refuse to be associated with affected returns, and consider ceasing to act','Report the client to the CRA immediately','Correct the return without telling the client'],'Confidentiality prevents disclosure without consent, and integrity prevents carrying on as if nothing were wrong.'),
   q('A practitioner discovers she made an error in a return already filed for a client. She should…',['Tell the client promptly and help correct it','Wait to see whether the CRA notices','Fix it next year without comment'],'Integrity and due care both require prompt disclosure.')
  ])
 ],
 quiz:[
  q('Which is one of the fundamental principles of the CPA Code?',['Objectivity','Profitability','Loyalty to the client above all'],'The five are professional behaviour, integrity and due care, objectivity, professional competence and confidentiality.'),
  q('Independence is required when a CPA…',['Performs an audit or review','Keeps a client’s books','Prepares a personal tax return'],'Assurance engagements depend on the accountant being free of the client’s influence.'),
  q('Auditing balances that your own firm calculated creates…',['A self-review threat','An advocacy threat','No threat'],'People are slow to find fault with their own work.'),
  q('After an engagement ends, the duty of confidentiality…',['Continues','Ends at once','Lasts until the fee is paid'],'It has no expiry.'),
  q('A conflict of interest that can be managed is usually handled by…',['Disclosing it to those affected and obtaining their consent','Keeping quiet and acting carefully','Lowering the fee'],'Those affected decide whether they are comfortable. If they are not, the CPA declines.'),
  q('A CPA must never be associated with information she knows is…',['False or misleading','Unaudited','Prepared under ASPE'],'This is the core of the integrity principle.')
 ] };