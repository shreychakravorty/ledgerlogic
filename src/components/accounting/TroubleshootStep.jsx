import React,{useState} from 'react';
import { Headphones, Search, CheckCircle2, XCircle } from 'lucide-react';
import { troubleshooting } from '@/components/accounting/troubleshooting';
export default function TroubleshootStep({lesson,onSolved,onMistake,solved=false}){
 const scenario=troubleshooting[lesson.id];
 const [choice,setChoice]=useState(solved?scenario.correct:null),[result,setResult]=useState(solved?true:null);
 const check=()=>{const ok=choice===scenario.correct;setResult(ok);if(ok)onSolved();else onMistake();};
 return <div className="space-y-5"><p className="eyebrow">THE CUSTOMER CALLED</p>
 <div className="flex gap-4 rounded-xl border border-[#e4deee] bg-[#f7f4fb] p-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e4daef] text-[#a089bb]"><Headphones size={20}/></span><p className="text-lg leading-relaxed">“{scenario.complaint}”</p></div>
 <div className="panel p-4"><p className="mb-3 flex items-center gap-2 text-xs font-semibold text-[#9d8ab5]"><Search size={14}/>What you find when you look</p><ul className="space-y-2 text-sm text-[#7d7590]">{scenario.clues.map(c=><li key={c} className="flex gap-2"><span className="text-[#c5b6d5]">•</span>{c}</li>)}</ul></div>
 <h2 className="text-base font-bold">What is the root cause?</h2>
 <div className="space-y-3">{scenario.options.map((o,i)=><button key={o} disabled={result===true} onClick={()=>{setChoice(i);setResult(null);}} className={`w-full rounded-xl border p-4 text-left text-sm ${choice===i?'border-[#aa94d5] bg-[#f0eafb]':'border-[#e7e4ed] bg-white hover:border-[#c9b9e3]'}`}><span className="mr-3 text-[#b0a3c0]">{String.fromCharCode(65+i)}.</span>{o}</button>)}</div>
 {result!==null&&<div role="status" className={`space-y-3 rounded-xl p-5 text-sm leading-relaxed ${result?'bg-[#edf6ee] text-[#4f7a5c]':'bg-[#fff5e7] text-[#8a6a3a]'}`}><h3 className="flex items-center gap-2 font-bold">{result?<CheckCircle2 size={18}/>:<XCircle size={18}/>}{result?'You found the root cause.':`“${scenario.options[choice]}” is a symptom or a guess, not the cause.`}</h3>{!result&&<p><b>Root cause:</b> {scenario.options[scenario.correct]}.</p>}<p>{scenario.why}</p><p className="rounded-lg bg-white/70 p-3 text-xs"><b>The correction plan:</b> {scenario.fix} Next, build the entry the books should hold.</p></div>}
 {result!==true&&<button disabled={choice===null} onClick={check} className="primary-btn">Diagnose</button>}</div>;
}