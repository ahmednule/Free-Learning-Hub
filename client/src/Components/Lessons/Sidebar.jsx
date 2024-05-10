import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
  };

  return (
    <div className='pb-32 pt-6 mr-2'>
      {
        lessons.map((lesson) => (
          <div key={lesson.id} className='mt-1'>
            <div
              onClick={() => toggleLesson(Number(lesson.id))}
              className='text-xs sm:text-base text-gray-300 bg-blue-500/20 h-8 border border-blue-500/70 flex justify-between rounded-md cursor-pointer items-center px-4'
            >
              <h3> {`${lesson.id}. ${lesson.name}`} </h3>
            </div>
            <ul className='list-disc mt-1 text-gray-400'>
              {
                lesson.topics.map((topic) => (
                  <div key={topic.id} className='text-xs sm:text-base flex flex-col'>
                    <li onClick={() => navigate(topic.link)} className={openLesson === lesson.id ? 'block border pl-5 mt-[3px] rounded cursor-pointer border-blue-500/70 py-[2px] w-full' : 'hidden'}> {topic.name} </li>
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