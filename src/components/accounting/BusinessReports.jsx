import React,{useState} from 'react';
import { accounts,money,summarize } from '@/components/accounting/accountingData';
import FinancialTable from '@/components/accounting/FinancialTable';
import JournalTable from '@/components/accounting/JournalTable';
import AgingReport from '@/components/accounting/AgingReport';
import BankPuzzle from '@/components/accounting/BankPuzzle';
import StatementPlayground from '@/components/accounting/StatementPlayground';
const tabs=['General ledger','Trial balance','Income statement','Balance sheet','Cash flow','AR aging','AP aging','Inventory','Bank reconciliation','Profit vs cash lab'];
export default function BusinessReports({transactions}){
 const [tab,setTab]=useState('Income statement'),[account,setAccount]=useState('Cash');const s=summarize(transactions),b=s.balances,day=transactions.at(-1)?.day||0;
 const rows=type=>Object.entries(b).filter(([a,n])=>accounts[a]===type&&n!==0).map(([a,n])=>[a,['Liability','Equity','Revenue'].includes(type)?-n:n]);
 const ledger=transactions.flatMap(t=>t.lines.filter(l=>l.account===account).map(l=>({...l,day:t.day,description:t.description,id:t.id})));let running=0;
 return <div className="space-y-5"><div className="flex flex-wrap gap-2">{tabs.map(t=><button key={t} onClick={()=>setTab(t)} className={`rounded-lg border px-3 py-2 text-[11px] ${tab===t?'border-[#bba7d7] bg-[#eee8f7] font-semibold text-[#8f72b0]':'border-[#e8e4ed] bg-white text-[#a297aa]'}`}>{t}</button>)}</div>
 {tab==='General ledger'&&<><label className="text-xs text-[#9d90a9]">Account <select value={account} onChange={e=>setAccount(e.target.value)} className="ml-3 rounded-lg border bg-white p-2">{Object.keys(accounts).map(a=><option key={a}>{a}</option>)}</select></label><div className="panel overflow-x-auto"><table className="w-full text-left text-xs"><thead className="bg-[#f8f6fc]"><tr>{['Day','Transaction','Debit','Credit','Balance (Dr − Cr)'].map(h=><th key={h} className="p-3 font-medium">{h}</th>)}</tr></thead><tbody>{ledger.map((l,i)=>{running+=l.debit-l.credit;return <tr key={i} className="border-t"><td className="p-3">{l.day}</td><td className="max-w-xs p-3 text-[#9a8da7]">{l.description}</td><td className="p-3">{money(l.debit)}</td><td className="p-3">{money(l.credit)}</td><td className="p-3">{money(running)}</td></tr>;})}</tbody></table>{!ledger.length&&<p className="p-6 text-sm text-[#a194ae]">No postings to this account yet.</p>}</div></>}
 {tab==='Trial balance'&&<JournalTable title={`Maple Coffee · Trial balance · Day ${day}`} lines={Object.entries(b).filter(([,n])=>n!==0).map(([account,n])=>({account,debit:Math.max(n,0),credit:Math.max(-n,0)}))}/>}
 {tab==='Income statement'&&<FinancialTable title={`Income statement · Days 1–${day} · accrual basis`} rows={[["Net revenue",s.revenue],['Cost of goods sold',b['Cost of goods sold']],['Gross profit',s.revenue-b['Cost of goods sold']],...rows('Expense').filter(([a])=>a!=='Cost of goods sold')]} total={s.profit} label="Net income"/>}
 {tab==='Balance sheet'&&<div className="grid gap-4 md:grid-cols-2"><FinancialTable title={`Assets · Day ${day}`} rows={rows('Asset')} total={s.assets}/><FinancialTable title="Liabilities + equity" rows={[...rows('Liability'),...rows('Equity'),['Current period earnings',s.profit]]} total={s.liabilities+s.equity}/><p className="muted md:col-span-2">{s.assets===s.liabilities+s.equity?'The accounting equation balances.':'Review the journal entries: the equation does not balance.'} Current earnings remain separate until closing; this simulation does not post closing entries.</p></div>}
 {tab==='Cash flow'&&<FinancialTable title="Cash flow · direct method · since opening" rows={['Operating','Investing','Financing'].map(c=>[c,transactions.filter(t=>t.cash_category===c).reduce((sum,t)=>sum+t.lines.filter(l=>l.account==='Cash').reduce((n,l)=>n+l.debit-l.credit,0),0)])} total={b.Cash} label="Net change in cash (opening $0)"/>}
 {(tab==='AR aging'||tab==='AP aging')&&<AgingReport transactions={transactions} type={tab.startsWith('AR')?'AR':'AP'} day={day}/>}
 {tab==='Inventory'&&<div className="space-y-4"><FinancialTable title="Coffee bag inventory · $10 unit cost" rows={[[`${s.units} bags on hand`,b.Inventory]]} total={b.Inventory} label="Inventory carrying value"/><p className="muted">All batches cost $10 per bag in this starter simulation. FIFO and average cost therefore produce the same valuation. Espresso equipment is a fixed asset, not stock for resale.</p></div>}
 {tab==='Bank reconciliation'&&<BankPuzzle/>}
 {tab==='Profit vs cash lab'&&<StatementPlayground/>}
 </div>;
}