import React from 'react';
import { useLocation } from 'react-router-dom';
import LessonSession from '@/components/accounting/LessonSession';
export default function Learn(){const {search}=useLocation();const params=new URLSearchParams(search);return <LessonSession key={search} id={params.get('id')} daily={params.get('mode')==='daily'}/>;}