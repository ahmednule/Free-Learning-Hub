import React, { useState, useEffect } from 'react';
import HtmlSidebar from '../../components/HtmlSidebar';
import Navbar from '../../components/Navbar';
import { useLocation } from 'react-router-dom';
import LessonOne from '../../courses/html/LessonOne';
import LessonTwo from '../../courses/html/LessonTwo';
import LessonThree from '../../courses/html/LessonThree';
import LessonFour from '../../courses/html/LessonFour';
import { FaCircle } from 'react-icons/fa6';
import CodeEditor from '../../components/CodeEditor';

const HtmlLessons = () => {
  const [expanded, setExpanded] = useState(false);
  const [lessonId, setLessonId] = useState('');
  const location = useLocation();

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newLessonId = urlParts[urlParts.length - 1];
    setLessonId(newLessonId);
  }, [location]);

  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto'>
      <div className='container max-w-7xl mx-auto pb-12'>
        <div>
          <Navbar />
        </div>
        <div className='grid md:grid-cols-6 pt-16'>
          <div className='col-span-4'>
            {/* Render the lesson component based on the current lesson ID */}
            {lessonId === 'l1' && <LessonOne />}
            {lessonId === 'l2' && <LessonTwo />}
            {lessonId === 'l3' && <LessonThree />}
            {lessonId === 'l4' && <LessonFour />}

            {/* Add more conditions for additional lesson IDs */}
          </div>
          <div className='hidden md:block col-span-2 text-right pr-5 pt-10'>
            <HtmlSidebar />
          </div>
        </div>
      </div>
      <div className='hidden lg:block'>
        <div className='w-screen overflow-hidden fixed bg-gray-200 dark:bg-gray-800 border border-yellow-500 dark:border-blue-600 rounded-md z-[10] bottom-0 left-0'>
          <div className='flex justify-start gap-10 items-center h-8 pl-4'>
            <button onClick={() => setExpanded(false)} className='text-red-500 cursor-pointer'>
              <FaCircle />
            </button>
            <button onClick={() => setExpanded(true)} className='text-green-500 cursor-pointer'>
              <FaCircle />
            </button>
          </div>
          <hr className={expanded ? 'h-[1px] w-[97%] mx-auto border-none bg-gray-950 mt-2 mb-4 dark:bg-gray-50' : 'hidden'} />
          {/* Extended panel body */}
          <div className={expanded ? 'h-[90vh] duration-300' : 'h-0 duration-300'}>
            <CodeEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HtmlLessons;