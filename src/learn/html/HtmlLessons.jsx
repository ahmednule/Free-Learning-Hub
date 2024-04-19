import React, { useState, useEffect } from 'react';
import HtmlSidebar from '../../components/HtmlSidebar';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import LessonOne from '../../courses/html/LessonOne';
import LessonTwo from '../../courses/html/LessonTwo';
import LessonThree from '../../courses/html/LessonThree';

const HtmlLessons = () => {
  const [lessonId, setLessonId] = useState('');
  const location = useLocation();

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newLessonId = urlParts[urlParts.length - 1];
    setLessonId(newLessonId);
  }, [location]);

  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className='grid md:grid-cols-6'>
          <div className='col-span-4'>
            {/* Render the lesson component based on the current lesson ID */}
            {lessonId === 'l1' && <LessonOne />}
            {lessonId === 'l2' && <LessonTwo />}
            {lessonId === 'l3' && <LessonThree />}
            {/* Add more conditions for additional lesson IDs */}
          </div>
          <div className='hidden md:block col-span-2 text-right pr-5 pt-10'>
            <HtmlSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlLessons;