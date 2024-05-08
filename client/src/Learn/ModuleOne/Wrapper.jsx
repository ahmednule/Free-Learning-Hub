import React, { useState, useEffect, Suspense } from 'react'
import Header from '../../Components/General/Header'
import Sidebar from '../../Components/Lessons/Sidebar'
import htmlTopics from '../../Data/HtmlTopics.json'
import { useLocation } from 'react-router-dom'
import { LuLoader2 } from "react-icons/lu";

const LessonOne = React.lazy(() => import('./LessonOne/LessonOne'));

const Wrapper = () => {
  const [lessonId, setLessonId] = useState('');

  const location = useLocation();

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newLessonId = urlParts[urlParts.length - 1];
    setLessonId(newLessonId);
  }, [location]);

  return (
    <div>
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      {/* Main info */}
      <div>
        <div className='grid md:grid-cols-6 gap-5 pt-16 min-h-screen w-full'>
          <div className='hidden md:block col-span-2'>
            <div className='fixed overflow-y-scroll h-screen'>
              <Sidebar data={htmlTopics} />
            </div>
          </div>
          <div className='pl-2 md:pl-10 lg:pl-0 pt-5 col-span-4'>
            {/* Render the lesson component based on the current lesson ID */}
            <Suspense fallback={<div className='mx-auto mt-28'>
              <div className="flex-col gap-4 w-full flex items-center justify-center">
                <LuLoader2 size={40} className='animate-spin' />
              </div>
            </div>}>
              {lessonId === 'basic-elements' && <LessonOne />}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper