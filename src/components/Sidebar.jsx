import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaAngleDown,  } from 'react-icons/fa6';

const Sidebar = ({data}) => {
  const [openLesson, setOpenLesson] = useState(0);
  const navigate = useNavigate();
  const lessons = data;

  const toggleLesson = (lessonId) => {
    if(lessonId === openLesson){
      setOpenLesson(0);
    } else {
      setOpenLesson(lessonId);
    }
  }

  return (
    <div className='pb-32 pt-6 mr-6'>
      {
            lessons.map((lesson) => (
              <div className='mt-1' key={lesson.id}>
                <div
                  onClick={() => toggleLesson(Number(lesson.id))}
                  className='text-xs sm:text-base bg-yellow-500 dark:bg-blue-600 h-8 flex justify-between rounded-md cursor-pointer items-center px-4'
                >
                  <h3> {`${lesson.id}. ${lesson.name}`} </h3>
                </div>
                <ul className='list-disc mt-1 text-yellow-500 dark:text-blue-600'>
                  {
                    lesson.topics.map((topic) => (
                      <div className='text-xs sm:text-base flex flex-col'>
                        <li key={topic.id} onClick={() => navigate(topic.link)} className={openLesson === lesson.id ? 'block border pl-5 mt-[3px] rounded cursor-pointer border-yellow-500 dark:border-blue-600 py-[2px] w-full' : 'hidden'}> {topic.name} </li>
                      </div>
                    ))
                  }
                </ul>
              </div>
            ))
          }
    </div>
  )
}

export default Sidebar