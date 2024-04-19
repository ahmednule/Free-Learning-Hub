import React from 'react';
import { useNavigate } from 'react-router-dom';
import htmlTopics from '../../assets/objects/htmlTopics.json'

const Intro = () => {
  const navigate = useNavigate();
  const lessons = htmlTopics;


  return (
    <div className='w-full px-6'>
      <div className='mt-14'>
        <article>
          <h1 className='font-bold text-2xl md:text-3xl'>"Mastering HTML & CSS: A Comprehensive Course"</h1>
          <p className='mt-5 ml-2 font-md'>Welcome aboard to "Mastering HTML & CSS: A Comprehensive Course," where we will dive deep into the fundamental building blocks of the web – HTML and CSS.</p>
          <p className='mt-5 ml-2 font-md'>HTML (HyperText Markup Language) serves as the cornerstone of web development, providing the structural framework upon which content is built. CSS (Cascading Style Sheets), on the other hand, brings life to HTML elements by defining their visual presentation, layout, and behavior. Together, these two technologies empower developers to create stunning and responsive web experiences.</p>
        </article>
        <article className='mt-10'>
          <h1 className='font-bold text-2xl md:text-3xl'>Whats Covered</h1>
          {
            lessons.map((lesson) => (
              <div className='mt-4' key={lesson.id}>
                <h3 className='text-xl'> {`${lesson.id}. ${lesson.name}`} </h3>
                <ul className='list-disc pl-8 mt-2 text-yellow-500 dark:text-blue-600'>
                  {
                    lesson.topics.map((topic) => (
                      <li key={topic.id} onClick={() => navigate(topic.link)} className='hover:underline cursor-pointer w-fit'> {topic.name} </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </article>
      </div>
    </div>
  );
}

export default Intro;
