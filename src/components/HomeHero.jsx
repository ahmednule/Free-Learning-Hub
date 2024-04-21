import React from 'react';
import LogoWhite from '../assets/images/logo-white.png';
import LogoDark from '../assets/images/logo-dark.png';
import { FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
  const navigate = useNavigate();
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const HomeSelections = [
    {
      "id": 1,
      "name": "Code Playground",
      "description": "Explore, experiment, and learn in our interactive Code Playground. Test your code, try out new techniques, and unleash your creativity in a safe and supportive environment.",
      "link": "/code-playground"
    },
    {
      "id": 2,
      "name": "HTML & CSS",
      "description": "Master the essential languages of web development: HTML and CSS. Learn to create structurally sound, responsive and visually appealing websites.",
      "link": "/learn/html"
    },
    {
      id: 4,
      name: "Python",
      description: "Python is a versatile, high-level, interpreted, object-oriented programming language renowned for its simplicity and extensive libraries, making it ideal for various applications.",
      link: "/"
    },
    {
      id: 5,
      name: "JavaScript",
      description: "JavaScript is a versatile, high-level, interpreted programming language known for its flexibility and ability to create interactive web applications.",
      link: "/"
    }
  ];

  const projectSelection = [
    {
      "id": 1,
      "name": "Code Playground",
      "description": "Explore, experiment, and learn in our interactive Code Playground. Test your code, try out new techniques, and unleash your creativity in a safe and supportive environment.",
      "link": "/code-playground"
    },
    {
      "id": 2,
      "name": "HTML & CSS",
      "description": "This project collection includes various challenges to help you practice and improve your skills in HTML and CSS to be able to create structurally sound, responsive and visually appealing websites.",
      "link": "/projects/html"
    }
  ]



  return (
    <div className='min-h-screen'>
      <div className='flex justify-center mt-14'>
        <img src={isDarkTheme ? LogoDark : LogoWhite} className='w-[40%] block' alt="Logo" />
      </div>
      <div className='text-center mt-8 text-xl'>
        <p>Get all learning resources in a 100% open source platform.</p>
        <p>We are currently focused on programming languages but we will expand in the near future.</p>
        <p>You can contribute by working on <span className='custom-span dark:dark-custom-span'>bug fixes</span>, <span className='custom-span dark:dark-custom-span'>UI updates</span>, and <span className='custom-span dark:dark-custom-span'>learning materials</span> updates.</p>
      </div>

      <div>
        <h3 className='text-3xl font-bold text-center mt-32'>TUTORIALS</h3>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto w-full'>
        {HomeSelections.map((item) => (
          <div onClick={() => navigate(item.link)} key={item.id} className='max-w-sm group mx-auto cursor-pointer rounded-2xl flex justify-between dark:hover:bg-gray-900 hover:bg-gray-100 duration-300 transition-colors p-4'>
            <div className='flex-[0.95]'>
              <div className='flex justify-start gap-3'>
                <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                <FaAngleRight className='mt-2 hidden group-hover:flex duration-300' size={14} />
              </div>
              <p className='ml-2 text-sm'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 w-full flex justify-center'>
        <button onClick={() => navigate('/learn')} className='bg-yellow-500 hover:bg-yellow-600 dark:hover:bg-blue-800 text-gray-50 dark:text-gray-950 group dark:bg-blue-600 flex justify-center gap-4 py-3 px-10 rounded-lg font-bold text-xl'>
          <span>SEE ALL</span>
          <FaAngleRight className='mt-1 group-hover:translate-x-2 duration-200' />
        </button>
      </div>

      <div>
        <h3 className='text-3xl font-bold text-center mt-32'>PROJECTS</h3>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto w-full'>
        {projectSelection.map((item) => (
          <div onClick={() => navigate(item.link)} key={item.id} className='max-w-sm group mx-auto cursor-pointer rounded-2xl flex justify-between dark:hover:bg-gray-900 hover:bg-gray-100 duration-300 transition-colors p-4'>
            <div className='flex-[0.95]'>
              <div className='flex justify-start gap-3'>
                <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                <FaAngleRight className='mt-2 hidden group-hover:flex duration-300' size={14} />
              </div>
              <p className='ml-2 text-sm'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 w-full flex justify-center'>
        <button onClick={() => navigate('/projects')} className='bg-yellow-500 hover:bg-yellow-600 dark:hover:bg-blue-800 text-gray-50 dark:text-gray-950 group dark:bg-blue-600 flex justify-center gap-4 py-3 px-10 rounded-lg font-bold text-xl'>
          <span>DISCOVER</span>
          <FaAngleRight className='mt-1 group-hover:translate-x-2 duration-200' />
        </button>
      </div>

    </div>
  );
};

export default HomeHero;
