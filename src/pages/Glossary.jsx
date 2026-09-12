import React,{useState} from 'react';
import { Search, AlertTriangle } from 'lucide-react';
import { terms, glossaryGroups } from '@/components/accounting/glossaryData';
import { taxYear, verifiedOn, reviewBy, payrollRates, movingRules, ratesAreStale } from '@/components/accounting/canadianRates';
const CANADIAN='Canadian tax & payroll';
function RatesCard(){
 const stale=ratesAreStale();
 return <section className="panel mb-7 p-6"><div className="flex flex-wrap items-baseline justify-between gap-3"><h2 className="text-lg font-bold">{taxYear} payroll figures</h2><span className={`rounded-full px-3 py-1 text-[10px] font-semibold ${stale?'bg-[#fbeee7] text-[#a9704f]':'bg-[#eef4ef] text-[#6f9179]'}`}>{stale?'Review overdue':'Verified'} · {verifiedOn}</span></div>
 {stale&&<p className="mt-3 flex gap-2 rounded-lg bg-[#fbeee7] p-3 text-xs leading-relaxed text-[#a9704f]"><AlertTriangle size={15} className="mt-0.5 shrink-0"/>These were due for review on {reviewBy}. The CRA publishes each year’s figures in late autumn — confirm them before quoting any number here.</p>}
 <p className="muted mt-3">Lessons teach the structure, not the numbers, because the numbers move every January. These are the current ones, with the CRA page each came from.</p>
 <dl className="mt-5 divide-y divide-[#f0eef4]">{payrollRates.map(r=><div key={r.label} className="grid gap-1 py-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-4"><dt className="text-xs font-semibold text-[#7f7490]">{r.label}</dt><dd className="text-sm text-[#95889f]"><b className="text-[#6f6380] tabular-nums">{r.value}</b> — {r.detail} <a href={r.source} target="_blank" rel="noreferrer" className="text-[11px] text-[#8f78b5] underline">CRA</a></dd></div>)}</dl>
 <h3 className="mt-6 text-sm font-bold">Where there is no number to memorise</h3>
 <dl className="mt-2 divide-y divide-[#f0eef4]">{movingRules.map(r=><div key={r.label} className="grid gap-1 py-3 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-4"><dt className="text-xs font-semibold text-[#7f7490]">{r.label}</dt><dd className="text-sm text-[#95889f]">{r.detail}</dd></div>)}</dl>
 <p className="mt-5 text-[10px] leading-relaxed text-[#a0a1af]">Reference only, not tax advice. Confirm against the CRA and the client’s accountant before acting.</p></section>;
}
export default function Glossary(){
 const [search,setSearch]=useState(''),[group,setGroup]=useState('All');
 const filtered=terms.filter(t=>(group==='All'||t[6]===group)&&t.join(' ').toLowerCase().includes(search.toLowerCase()));
 const showRates=(group==='All'||group===CANADIAN)&&!search;
 return <div className="page-enter mx-auto max-w-5xl"><p className="eyebrow">SAME IDEA. DIFFERENT WORDS.</p><h1 className="page-title mt-3">The terminology bridge.</h1><p className="muted mt-3">Speak business owner, accountant, Tally, and QuickBooks — {terms.length} terms and the words each side uses for them.</p>
 <div className="panel my-5 flex items-center gap-3 px-5 py-4"><Search size={19} className="text-[#b1a0bf]"/><input aria-label="Search accounting terms" placeholder="Try debtor, bill-wise, ITC, cut-off, cost centre…" value={search} onChange={e=>setSearch(e.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-[#b5aabf]"/></div>
 <div className="mb-7 flex flex-wrap gap-2">{['All',...glossaryGroups].map(g=><button key={g} onClick={()=>setGroup(g)} className={`rounded-lg border px-3 py-2 text-[11px] ${group===g?'border-[#bba7d7] bg-[#eee8f7] font-semibold text-[#8f72b0]':'border-[#e8e4ed] bg-white text-[#a297aa]'}`}>{g}</button>)}</div>
 {showRates&&<RatesCard/>}
 <div className="grid gap-5 md:grid-cols-2">{filtered.map(([term,aliases,meaning,tally,qb,problem])=><article key={term} className="panel p-6"><h2 className="text-lg font-bold">{term}</h2><p className="mt-2 text-[11px] leading-relaxed text-[#b098c1]">{aliases}</p><p className="my-4 text-sm leading-relaxed text-[#96879f]">{meaning}</p><div className="space-y-2 border-t pt-4 text-xs leading-relaxed"><p className="text-[#809ca5]"><b>Tally:</b> {tally}</p><p className="text-[#86a18b]"><b>QuickBooks:</b> {qb}</p></div><p className="mt-4 rounded-lg bg-[#faf7ed] p-3 text-xs italic leading-relaxed text-[#af9d74]">“{problem}”</p></article>)}</div>
 {!filtered.length&&<p className="panel p-10 text-center text-sm text-[#a496af]">No matching terms. Try a shorter word or a business phrase.</p>}
 <p className="mt-7 text-[10px] leading-relaxed text-[#a0a1af]">Conceptual mappings, not click-by-click instructions. Features vary by edition, country and configuration. Canadian HST and Indian GST are different tax systems with different returns; payroll setups are not interchangeable between countries. Rates, ceilings and first-year tax rules change annually — confirm the current year before quoting a number.</p>
 </div>;
}
