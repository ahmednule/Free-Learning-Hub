import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intro = () => {
  const navigate = useNavigate();


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
          <div className='mt-4 '>
            <h3 className='text-xl'>1. Introduction to HTML & CSS</h3>
            <ul className='list-disc pl-8 mt-2 text-yellow-500 dark:text-blue-600'>
              <li onClick={() => navigate('/learn/html/l1')} className='hover:underline cursor-pointer w-fit'>Overview of HTML and CSS</li>
              <li onClick={() => navigate('/learn/html/l2')} className='hover:underline cursor-pointer w-fit'>Roles of HTML and CSS</li>
              <li onClick={() => navigate('/learn/html/l2')} className='hover:underline cursor-pointer w-fit'>Setting up IDE</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Intro;
