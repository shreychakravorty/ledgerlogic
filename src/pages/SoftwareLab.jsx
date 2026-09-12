import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { lessons } from '@/components/accounting/lessonData';
import SoftwareBridge from '@/components/accounting/SoftwareBridge';
import JournalTable from '@/components/accounting/JournalTable';
import TransactionFlow from '@/components/accounting/TransactionFlow';
// Drop the trailing "…which TWO…?" prompt: here the scenario is read, not answered.
const asStatement = scenario => scenario.replace(/[^.?!]*[Ww]hich TWO.*$/,'').trim();
const topics = [...new Set(lessons.map(l => l.topic))];
export default function SoftwareLab(){
 const [id,setId]=useState(lessons[0].id),[view,setView]=useState('compare'),[topic,setTopic]=useState('All');
 const lesson=lessons.find(l=>l.id===id)||lessons[0];
 const shown=topic==='All'?lessons:lessons.filter(l=>l.topic===topic);
 return <div className="page-enter mx-auto max-w-5xl"><p className="eyebrow">THE TERMINOLOGY CHANGES. THE LOGIC DOESN’T.</p><h1 className="page-title mt-3">Tally <span className="font-normal text-[#b5a1c9]">↔</span> QuickBooks</h1><p className="muted mt-3">Learn what the software is doing, not just which button to click. {lessons.length} transactions, both dialects.</p>
 <div className="mt-6 flex flex-wrap gap-2">{['All',...topics].map(t=><button key={t} onClick={()=>setTopic(t)} className={`rounded-full border px-3 py-1.5 text-[10px] ${topic===t?'border-[#c3b0da] bg-[#f1ebf9] font-semibold text-[#8f72b0]':'border-[#ebe7ef] bg-white text-[#aaa0b3]'}`}>{t}</button>)}</div>
 <div className="mb-7 mt-3 flex flex-wrap gap-2">{shown.map(l=><button key={l.id} onClick={()=>{setId(l.id);setView('compare');}} className={`rounded-lg border px-4 py-2.5 text-xs ${l.id===id?'border-[#baa5d5] bg-[#efe8f8] text-[#9675b5]':'border-[#e7e2ed] bg-white text-[#a194ac]'}`}>{l.short}</button>)}</div>
 <div className="panel mb-5 p-6"><p className="eyebrow mb-3">{lesson.topic.toUpperCase()} · ONE REAL-WORLD TRANSACTION</p><h2 className="text-xl font-semibold leading-relaxed">{asStatement(lesson.scenario)}</h2><div className="mt-4 flex flex-wrap gap-2">{lesson.impact.map(i=><span key={i} className="rounded-full bg-[#f3eff8] px-3 py-1.5 text-[11px] text-[#a18bb4]">{i}</span>)}</div></div>
 <div className="mb-5 flex gap-3"><button className={view==='compare'?'primary-btn':'secondary-btn'} onClick={()=>setView('compare')}>Compare workflows</button><button className={view==='flow'?'primary-btn':'secondary-btn'} onClick={()=>setView('flow')}>Follow the accounting</button></div>
 {view==='compare'?<div className="space-y-5"><SoftwareBridge lesson={lesson}/><JournalTable lines={lesson.journal} title="The accounting entry underneath"/></div>:<TransactionFlow key={lesson.id} lesson={lesson}/>}
 <Link to={`/learn?id=${lesson.id}`} className="primary-btn mt-6">Try this transaction yourself <ArrowRight size={15}/></Link>
 <div className="mt-6 rounded-xl border border-[#eee5d3] bg-[#fffaf0] p-4 text-xs leading-relaxed text-[#ab956c]">Canada / India distinction: “sundry debtor,” “sundry creditor,” “voucher” and “bill-wise details” are Tally terms, not different accounting. What is <i>not</i> portable is configuration: Indian GST (CGST/SGST/IGST) is not Canadian HST, and an Indian payroll setup does not describe CPP, EI and source deductions. Verify the local edition, the tax module and the current year’s rates before advising a client.</div></div>;
}
