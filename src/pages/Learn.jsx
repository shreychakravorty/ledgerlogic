import React from 'react';
import { useLocation } from 'react-router-dom';
import LessonSession from '@/components/accounting/LessonSession';
import { useLearning } from '@/components/accounting/LearningProvider';
export default function Learn(){const {search}=useLocation();const {difficulty}=useLearning();const params=new URLSearchParams(search);return <LessonSession key={`${search}-${difficulty}`} id={params.get('id')} daily={params.get('mode')==='daily'}/>;}