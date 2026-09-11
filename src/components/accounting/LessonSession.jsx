import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Trophy, Clock3 } from 'lucide-react';
import { useLearning } from '@/components/accounting/LearningProvider';
import { lessons,getLesson } from '@/components/accounting/lessonData';
import DecisionStep from '@/components/accounting/DecisionStep';
import JournalBuilder from '@/components/accounting/JournalBuilder';
import TransactionFlow from '@/components/accounting/TransactionFlow';
import SoftwareBridge from '@/components/accounting/SoftwareBridge';
import TransferStep from '@/components/accounting/TransferStep';
const steps=['Try it','Build the journal','See the impact','Software connection','Apply it'];
export default function LessonSession({id,daily}){
 const {attempts,completed,topicScore,saveAttempt}=useLearning();
 const [queue]=useState(()=>daily?[...lessons].sort((a,b)=>{const priority=l=>attempts.some(x=>x.activity_id===l.id)&&topicScore(l.topic)<70?0:!completed.includes(l.id)?1:2;const difference=priority(a)-priority(b);if(difference)return difference;if(priority(a)!==2)return lessons.indexOf(a)-lessons.indexOf(b);const rotation=Math.floor(Date.now()/86400000)%lessons.length;return (lessons.indexOf(a)+rotation)%lessons.length-(lessons.indexOf(b)+rotation)%lessons.length;}).slice(0,5):[getLesson(id)]);
 const [index,setIndex]=useState(0),[step,setStep]=useState(0),[ready,setReady]=useState(false),[mistakes,setMistakes]=useState(0),[done,setDone]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');const lesson=queue[index];
 const next=async()=>{if(step<4){setStep(step+1);setReady(step+1===2||step+1===3);return;}setBusy(true);setError('');try{await saveAttempt({activity_id:lesson.id,kind:'lesson',topic:lesson.topic,score:Math.max(40,100-mistakes*15),mistakes});if(index+1<queue.length){setIndex(index+1);setStep(0);setMistakes(0);setReady(false);}else setDone(true);}catch(e){setError(e.message||'Could not save your progress. Please try again.');}finally{setBusy(false);}};
 if(done)return <div className="page-enter mx-auto max-w-2xl py-14 text-center"><div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[#eee7f9] text-[#aa87d2]"><Trophy size={38}/></div><p className="eyebrow">UNDERSTANDING UNLOCKED</p><h1 className="page-title my-4">{daily?'A little practice. A stronger brain.':'That’s a real accounting instinct.'}</h1><p className="muted">Your progress is saved. {daily?'You completed five real-business challenges.':`You followed “${lesson.title}” from a decision to the books and into software.`}</p><p className="muted mt-3">Mastery requires a score of 70% or higher. Revisit tricky concepts anytime.</p><div className="mt-7 flex justify-center gap-3"><Link to="/" className="primary-btn">Back to overview</Link><Link to="/business" className="secondary-btn">Try it at Maple Coffee</Link></div></div>;
 return <div className="page-enter mx-auto max-w-[850px]"><div className="mb-7 flex items-center justify-between"><Link to="/path" className="flex items-center gap-2 text-xs text-[#9e91b1]"><ArrowLeft size={14}/>Learning path</Link><span className="text-xs text-[#a298b0]">{daily?`Workout · ${index+1} of ${queue.length}`:'A bite-sized accounting lesson'}</span></div><p className="eyebrow text-[#aa96c2]">{lesson.topic} · BEGINNER</p><h1 className="page-title mb-7 mt-3">{lesson.title}</h1><div className="mb-7 flex gap-2">{steps.map((s,i)=><div key={s} className="flex-1"><div className={`mb-2 h-1.5 rounded-full ${i<=step?'bg-[#a58acb]':'bg-[#e9e4f0]'}`}/><p className={`hidden text-[10px] sm:block ${step===i?'text-[#8c70b1]':'text-[#b3a8c0]'}`}>{s}</p></div>)}</div><div className="panel p-5 md:p-8" key={`${lesson.id}-${step}`}>
 {step===0&&<DecisionStep lesson={lesson} onSolved={()=>setReady(true)} onMistake={()=>setMistakes(m=>m+1)}/>}
 {step===1&&<JournalBuilder lesson={lesson} onSolved={()=>setReady(true)} onMistake={()=>setMistakes(m=>m+1)}/>}
 {step===2&&<TransactionFlow lesson={lesson}/>}
 {step===3&&<><h2 className="mb-5 text-xl font-bold">Here’s what the software is really doing.</h2><SoftwareBridge lesson={lesson}/></>}
 {step===4&&<TransferStep lesson={lesson} onSolved={()=>setReady(true)} onMistake={()=>setMistakes(m=>m+1)}/>}
 </div>{error&&<p role="alert" className="mt-4 text-sm text-rose-600">{error}</p>}<div className="mt-6 flex items-center justify-between"><span className="flex items-center gap-2 text-[11px] text-[#a99fb4]"><Clock3 size={14}/>One concept. No rush.</span><button className="primary-btn" disabled={!ready||busy} onClick={next}>{busy?'Saving…':step===4?'Finish challenge':'Continue'}<ArrowRight size={16}/></button></div></div>;
}