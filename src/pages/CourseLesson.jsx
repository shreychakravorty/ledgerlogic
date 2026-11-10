import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { findLesson } from '@/components/course/courseData';
import LessonPlayer from '@/components/course/LessonPlayer';
export default function CourseLesson() {
  const id = new URLSearchParams(useLocation().search).get('id');
  const found = findLesson(id);
  return found ? <LessonPlayer key={id} {...found} /> : <Navigate to="/course" replace />;
}