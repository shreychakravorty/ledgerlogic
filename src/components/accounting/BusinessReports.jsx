import React,{useState} from 'react';
import { accounts,money,summarize,isContra,contraOf } from '@/components/accounting/accountingData';
import FinancialTable from '@/components/accounting/FinancialTable';
import JournalTable from '@/components/accounting/JournalTable';
import AgingReport from '@/components/accounting/AgingReport';
import BankPuzzle from '@/components/accounting/BankPuzzle';
import StatementPlayground from '@/components/accounting/StatementPlayground';
const tabs=['General ledger','Trial balance','Income statement','Balance sheet','Cash flow','AR aging','AP aging','Inventory','Bank reconciliation','Profit vs cash lab'];
const phaseOf=t=>t.phase||'Operations';
// Trial balance stages. "Unadjusted" is what the bank and the invoices produced; "adjusted" adds
// the period-end entries; "post-closing" is what carries into the next period. Seeing the three
// side by side is the clearest demonstration of what adjusting and closing entries actually do.
const stages=[['Unadjusted',t=>phaseOf(t)==='Operations'],['Adjusted',t=>phaseOf(t)!=='Close'],['Post-closing',()=>true]];
export default function BusinessReports({transactions}){
 const [tab,setTab]=useState('Income statement'),[account,setAccount]=useState('Cash'),[stage,setStage]=useState('Adjusted');
 const s=summarize(transactions),b=s.balances,day=transactions.at(-1)?.day||0;
 // The income statement is always read before closing: after closing, revenue and expenses are
 // zero by design, which is correct bookkeeping and a useless report.
 const operating=summarize(transactions.filter(t=>phaseOf(t)!=='Close')),ob=operating.balances;
 const closed=transactions.some(t=>phaseOf(t)==='Close');
 const adjusted=transactions.some(t=>phaseOf(t)==='Year-end');
 // Contra accounts belong with what they offset, labelled as deductions rather than shown as
 // ordinary negative balances.
 // A contra balance needs no sign special-case — it is already opposite — only a label that says
 // what it deducts from, and a position after the accounts it offsets.
 const rows=(type,source=b)=>Object.entries(source).filter(([a,n])=>accounts[a]===type&&n!==0)
   .sort(([a],[c])=>(isContra(a)?1:0)-(isContra(c)?1:0))
   .map(([a,n])=>[isContra(a)?`Less: ${a.toLowerCase()} (against ${contraOf[a]})`:a,['Liability','Equity','Revenue'].includes(type)?-n:n]);
 const stageFilter=stages.find(([name])=>name===stage)?.[1]||(()=>true);
 const stageBalances=summarize(transactions.filter(stageFilter)).balances;
 const ledger=transactions.flatMap(t=>t.lines.filter(l=>l.account===account).map(l=>({...l,day:t.day,description:t.description,phase:phaseOf(t),id:t.id})));let running=0;
 return <div className="space-y-5"><div className="flex flex-wrap gap-2">{tabs.map(t=><button key={t} onClick={()=>setTab(t)} className={`rounded-lg border px-3 py-2 text-[11px] ${tab===t?'border-[#bba7d7] bg-[#eee8f7] font-semibold text-[#8f72b0]':'border-[#e8e4ed] bg-white text-[#a297aa]'}`}>{t}</button>)}</div>
 {tab==='General ledger'&&<><label className="text-xs text-[#9d90a9]">Account <select value={account} onChange={e=>setAccount(e.target.value)} className="ml-3 rounded-lg border bg-white p-2">{Object.keys(accounts).map(a=><option key={a}>{a}</option>)}</select></label><div className="panel overflow-x-auto"><table className="w-full text-left text-xs"><thead className="bg-[#f8f6fc]"><tr>{['Day','Transaction','Debit','Credit','Balance (Dr − Cr)'].map(h=><th key={h} className="p-3 font-medium">{h}</th>)}</tr></thead><tbody>{ledger.map((l,i)=>{running+=l.debit-l.credit;return <tr key={i} className="border-t"><td className="p-3">{l.phase==='Operations'?l.day:l.phase==='Close'?'Close':'Adj'}</td><td className="max-w-xs p-3 text-[#9a8da7]">{l.description}</td><td className="p-3">{money(l.debit)}</td><td className="p-3">{money(l.credit)}</td><td className="p-3">{money(running)}</td></tr>;})}</tbody></table>{!ledger.length&&<p className="p-6 text-sm text-[#a194ae]">No postings to this account yet.</p>}</div></>}
 {tab==='Trial balance'&&<div className="space-y-4"><div className="flex flex-wrap gap-2">{stages.map(([name])=><button key={name} onClick={()=>setStage(name)} className={`rounded-lg border px-3 py-2 text-[11px] ${stage===name?'border-[#bba7d7] bg-[#eee8f7] font-semibold text-[#8f72b0]':'border-[#e8e4ed] bg-white text-[#a297aa]'}`}>{name}</button>)}</div>
  <JournalTable title={`Maple Coffee · ${stage} trial balance`} lines={Object.entries(stageBalances).filter(([,n])=>n!==0).map(([account,n])=>({account,debit:Math.max(n,0),credit:Math.max(-n,0)}))}/>
  <p className="muted">{stage==='Unadjusted'?'Trading entries only — what the bank statement and the invoices produced. Nothing has been accrued, depreciated or counted yet.':stage==='Adjusted'?`Trading plus the quarter-end adjustments.${adjusted?'':' Post the adjusting entries to see this change.'} This is the version financial statements are prepared from.`:`After closing, revenue and expense accounts read zero and the period’s result sits in Owner capital.${closed?'':' Post the closing entries to see this change.'} Only balance sheet accounts carry forward.`}</p></div>}
 {tab==='Income statement'&&<div className="space-y-4"><FinancialTable title={`Income statement · Days 1–${Math.min(day,90)} · accrual basis`} rows={[["Net revenue",operating.revenue],['Cost of goods sold',ob['Cost of goods sold']],['Gross profit',operating.revenue-ob['Cost of goods sold']],...rows('Expense',ob).filter(([a])=>a!=='Cost of goods sold')]} total={operating.profit} label={operating.profit<0?'Net loss':'Net income'}/>{closed&&<p className="muted">Read before the closing entries, which is how an income statement is always prepared. After closing, these accounts are zero by design.</p>}</div>}
 {tab==='Balance sheet'&&<div className="grid gap-4 md:grid-cols-2"><FinancialTable title={`Assets · Day ${Math.min(day,90)}`} rows={rows('Asset')} total={s.assets}/><FinancialTable title="Liabilities + equity" rows={[...rows('Liability'),...rows('Equity'),...(closed?[]:[['Current period earnings',s.profit]])]} total={s.liabilities+s.equity}/><p className="muted md:col-span-2">{s.assets===s.liabilities+s.equity?'The accounting equation balances.':'Review the journal entries: the equation does not balance.'} {closed?'The period is closed, so the result now sits inside Owner capital rather than as a separate earnings line.':'Current earnings stay separate until the closing entries are posted.'}</p></div>}
 {tab==='Cash flow'&&<FinancialTable title="Cash flow · direct method · since opening" rows={['Operating','Investing','Financing'].map(c=>[c,transactions.filter(t=>t.cash_category===c).reduce((sum,t)=>sum+t.lines.filter(l=>l.account==='Cash').reduce((n,l)=>n+l.debit-l.credit,0),0)])} total={b.Cash} label="Net change in cash (opening $0)"/>}
 {(tab==='AR aging'||tab==='AP aging')&&<AgingReport transactions={transactions.filter(t=>phaseOf(t)==='Operations')} type={tab.startsWith('AR')?'AR':'AP'} day={Math.min(day,90)}/>}
 {tab==='Inventory'&&<div className="space-y-4"><FinancialTable title="Coffee bag inventory · $10 unit cost" rows={[[`${s.units} bags on hand`,b.Inventory]]} total={b.Inventory} label="Inventory carrying value"/><p className="muted">All batches cost $10 per bag in this starter simulation. FIFO and average cost therefore produce the same valuation. Espresso equipment is a fixed asset, not stock for resale. The quarter-end count adjusts the books down to what was physically there.</p></div>}
 {tab==='Bank reconciliation'&&<BankPuzzle/>}
 {tab==='Profit vs cash lab'&&<StatementPlayground/>}
 </div>;
}
