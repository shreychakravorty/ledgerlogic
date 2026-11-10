import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getModule } from '@/components/course/courseData';
import QuizPlayer from '@/components/course/QuizPlayer';
export default function CourseQuiz() {
  const id = new URLSearchParams(useLocation().search).get('module');
  const module = getModule(id);
  return module ? <QuizPlayer key={id} module={module} /> : <Navigate to="/course" replace />;
}