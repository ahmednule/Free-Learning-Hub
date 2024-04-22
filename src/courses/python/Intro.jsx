import React from 'react';
import { useNavigate } from 'react-router-dom';
import pythonTopics from '../../assets/objects/pythonTopics.json'
import { FaAngleRight } from 'react-icons/fa6';

const Intro = () => {
  const navigate = useNavigate();
  const lessons = pythonTopics;


  return (
    <div className='w-full px-6'>
      <div className='mt-14'>
        <article>
          <h1 className='font-bold text-2xl md:text-3xl'>"Mastering Python: A Comprehensive Course"</h1>
          <p className='mt-5 ml-2 font-md'>Welcome aboard to "Mastering Python: A Comprehensive Course," where we will delve deep into the versatile world of Python programming.</p>
          <p className='mt-5 ml-2 font-md'>Python, a high-level programming language known for its simplicity and readability, is widely used in various domains, including web development, data science, artificial intelligence, and automation. It serves as a powerful tool for both beginners and seasoned developers, offering a wide range of libraries and frameworks to tackle diverse challenges.</p>
          <p className='mt-5 ml-2 font-md'>Throughout this course, we will explore the core concepts and functionalities of Python, enabling you to build robust applications and solve complex problems efficiently. Let's embark on this journey to master Python and unlock its full potential!</p>
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
        <div className='mt-36 flex justify-between'>
          <button onClick={() => navigate("/learn")} className='flex group justify-center dark:text-gray-950 duration-300 transition-all bg-yellow-500 dark:bg-blue-600 py-2 rounded-lg dark:hover:bg-blue-800 hover:bg-yellow-600 px-5 gap-2'>
            <span>
              <FaAngleRight className='group-hover:-translate-x-[5px] duration-300 rotate-180 mt-1' />
            </span>
            <span>ALL TUTORIALS</span>
          </button>
          <button onClick={() => navigate("/learn/python/introduction-hello-world")} className='flex group justify-center dark:text-gray-950 duration-300 transition-all bg-yellow-500 dark:bg-blue-600 py-2 rounded-lg dark:hover:bg-blue-800 hover:bg-yellow-600 px-5 gap-2'>
            <span>Hello World</span>
            <span>
              <FaAngleRight className='group-hover:translate-x-[5px] duration-300 mt-1' />
            </span>
          </button>
        </div>
        <div className='mt-12'>
          <a href="https://github.com/developer-assets/Free-Learning-Hub/blob/main/src/courses/python/Intro.jsx" target='_blank' rel='showcase-website' className='text-yellow-500 hover:underline cursor-pointer dark:text-blue-600'>Edit This Page</a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
