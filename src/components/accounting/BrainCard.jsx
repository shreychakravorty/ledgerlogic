import React from 'react';
import { Brain, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLearning } from '@/components/accounting/LearningProvider';
const topics=['Transaction Logic','Financial Statements','AR/AP','Bank Reconciliation','Inventory','GST/HST','Payroll','Adjusting Entries','Long-term Assets','Closing & Equity','Troubleshooting'];
const colors=['#9481d8','#8c9bd5','#7ebaaa','#d8b375','#b28aca','#91b9cf','#92aca0','#c9a37c','#7fa8c9','#a9b78a','#cf99ae'];
export default function BrainCard(){
 const {topicScore,attempts}=useLearning(); const weak=topics.filter(t=>attempts.some(a=>a.topic===t)&&topicScore(t)<70);
 return <div className="panel p-5">
 <div className="flex items-center justify-between"><h2 className="flex items-center gap-2 text-sm font-bold"><Brain size={18} className="text-[#9989c6]"/> Your accounting brain</h2><span className="rounded-md bg-[#f4f2fa] px-2 py-1 text-[9px] text-[#a295c1]">SKILL MAP</span></div>
 <p className="mt-2 text-[11px] text-[#999bab]">Little by little, it starts to click.</p>
 <div className="mt-6 space-y-4">{topics.map((t,i)=><div key={t}>
 <div className="mb-1.5 flex justify-between text-[10px]"><span className="text-[#7d8093]">{t}</span><span className="text-[#a4a5b3]">{topicScore(t)}%</span></div>
 <div className="flex gap-1">{Array.from({length:10},(_,n)=><div key={n} className="h-[7px] flex-1 rounded-[2px]" style={{background:n<Math.round(topicScore(t)/10)?colors[i]:'#f0f0f5'}}/>)}</div>
 </div>)}</div>
 <div className="mt-6 border-t border-[#eff0f5] pt-4"><p className="text-[10px] font-semibold text-[#9a8cab]">{weak.length?'A LITTLE EXTRA PRACTICE':'YOUR NEXT BREAKTHROUGH'}</p><p className="mt-2 text-xs leading-relaxed text-[#9293a3]">{weak.length?`Revisit ${weak.slice(0,2).join(' and ')} in your next workout.`:'Every solved problem builds a stronger accounting instinct.'}</p><Link to="/learn?mode=daily" className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#8872c9]">Give your brain a workout <ArrowUpRight size={13}/></Link></div>
 </div>;
}