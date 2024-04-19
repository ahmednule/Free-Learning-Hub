import React from 'react'
import htmlTopics from '../assets/objects/htmlTopics.json'
import { useNavigate } from 'react-router-dom';

const HtmlSidebar = () => {
  const navigate = useNavigate();
  const lessons = htmlTopics;



  return (
    <div>
      <h1 className='font-bold text-2xl mb-4 md:text-3xl'>Quick Navigation</h1>
      {
        lessons.map((lesson) => (
          <div key={lesson.id}>
            <ul className='list-none ml-auto text-yellow-500 dark:text-blue-600'>
              {
                lesson.topics.map((topic) => (
                  <li key={topic.id} onClick={() => navigate(topic.link)} className='hover:underline text-right cursor-pointer w-full'> {topic.name} </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default HtmlSidebar