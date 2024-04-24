import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LogoWhite from '../assets/images/logo-white.png';
import LogoDark from '../assets/images/logo-dark.png';
import { FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const HomeHero = () => {
  const navigate = useNavigate();
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const tutorials = [
    {
      id: 1,
      name: "HTML & CSS",
      description: "Master the essential languages of web development: HTML and CSS. Learn to create structurally sound, responsive and visually appealing websites.",
      link: "/learn/html"
    },
    {
      id: 2,
      name: "Python",
      description: "Python is a versatile, high-level, interpreted, object-oriented programming language renowned for its simplicity and extensive libraries, making it ideal for various applications.",
      link: "/learn/python"
    },
    {
      id: 3,
      name: "JavaScript",
      description: "JavaScript is a versatile, high-level, interpreted programming language known for its flexibility and ability to create interactive web applications.",
      link: "/"
    }
  ];

  const projects = [
  {
    id: 1,
    name: "HTML & CSS",
    description: "This project collection includes various challenges to help you practice and improve your skills in HTML and CSS to be able to create structurally sound, responsive and visually appealing websites.",
    link: "/projects/html"
  }
  ];

  const products = [
    {
    id: 1,
    name: "Code Playground",
    description: "Explore, experiment, and learn in our interactive Code Playground. Test your code, try out new techniques, and unleash your creativity in a safe and supportive environment.",
    link: "/code-playground"
  },
  {
    id: 2,
    name: "Color Picker",
    description: "Pick or convert colors between HEX, RGB and HSL while also being able to change the colors alpha or opacity to help you in your designs and stylings.",
    link: "/color-picker"
  }
  ];

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, 
    transition: { duration: 0.5 } },
  };

  const navigateTo = (link) => {
    navigate(link);
  };

  return (
    <div>
      <div className='min-h-screen'>
        <div className='flex justify-center mt-20'>
          <motion.img
            src={isDarkTheme ? LogoDark : LogoWhite}
            className='w-[40%] block'
            alt='Logo'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        <motion.div
          className='text-center mt-8 text-xl'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          ref={ref}
        >
          <p>Get all learning resources in a 100% open source platform.</p>
          <p>We are currently focused on programming languages but we will expand in the near future.</p>
          <p>
            You can contribute by working on <span className='custom-span dark:dark-custom-span'>bug fixes</span>,{' '}
            <span className='custom-span dark:dark-custom-span'>UI updates</span>, and{' '}
            <span className='custom-span dark:dark-custom-span'>learning materials</span> updates.
          </p>
        </motion.div>
      </div>

      <div>
        <h3 className='text-3xl font-bold text-center mt-32'>TUTORIALS</h3>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto w-full'>
        {tutorials.map((item) => (
          <div
            key={item.id}
            onClick={() => navigateTo(item.link)}
            className='max-w-sm h-fit group border border-yellow-500 dark:border-blue-600 hover:scale-105 mx-auto cursor-pointer rounded-2xl flex justify-between dark:hover:bg-gray-900 hover:bg-gray-100 duration-300 transition-all p-4'
          >
            <div className='flex-[0.95]'>
              <div className='flex justify-start gap-3'>
                <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                <FaAngleRight className='mt-2 hidden group-hover:flex duration-300' size={14} />
              </div>
              <div className='flex justify-start gap-3'>
                {/* Add some horizontal line with circle at the bottom */}
                <p className='text-sm pl-4'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 w-full flex justify-center'>
        <button
          onClick={() => navigate('/learn')}
          className='bg-yellow-500 hover:bg-yellow-600 dark:hover:bg-blue-800 text-gray-50 dark:text-gray-950 group dark:bg-blue-600 flex justify-center gap-4 py-3 px-10 rounded-lg font-bold text-xl'
        >
          <span>SEE ALL</span>
          <FaAngleRight className='mt-1 group-hover:translate-x-2 duration-200' />
        </button>
      </div>

      <div>
        <h3 className='text-3xl font-bold text-center mt-56'>PROJECTS</h3>
      </div>

      <div className='grid md:grid-cols-2 h-fit lg:grid-cols-3 gap-8 mt-8 mx-auto w-full'>
        {projects.map((item) => (
          <div
            key={item.id}
            onClick={() => navigateTo(item.link)}
            className='max-w-sm group border border-yellow-500 dark:border-blue-600 hover:scale-105 mx-auto cursor-pointer rounded-2xl flex justify-between dark:hover:bg-gray-900 hover:bg-gray-100 duration-300 transition-all p-4'
          >
            <div className='flex-[0.95]'>
              <div className='flex justify-start gap-3'>
                <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                <FaAngleRight className='mt-2 hidden group-hover:flex duration-300' size={14} />
              </div>
              <div className='flex justify-start gap-3'>
                {/* Add some horizontal line with circle at the bottom */}
                <p className='text-sm pl-4'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-16 w-full flex justify-center'>
        <button
          onClick={() => navigate('/projects')}
          className='bg-yellow-500 hover:bg-yellow-600 dark:hover:bg-blue-800 text-gray-50 dark:text-gray-950 group dark:bg-blue-600 flex justify-center gap-4 py-3 px-10 rounded-lg font-bold text-xl'
        >
          <span>DISCOVER</span>
          <FaAngleRight className='mt-1 group-hover:translate-x-2 duration-200' />
        </button>
      </div>

      <div>
        <h3 className='text-3xl font-bold text-center mt-56'>PRODUCTS</h3>
      </div>

      <div className='grid md:grid-cols-2 h-fit lg:grid-cols-3 gap-8 mt-8 mx-auto w-full'>
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigateTo(item.link)}
            className='max-w-sm group border border-yellow-500 dark:border-blue-600 hover:scale-105 mx-auto cursor-pointer rounded-2xl flex justify-between dark:hover:bg-gray-900 hover:bg-gray-100 duration-300 transition-all p-4'
          >
            <div className='flex-[0.95]'>
              <div className='flex justify-start gap-3'>
                <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                <FaAngleRight className='mt-2 hidden group-hover:flex duration-300' size={14} />
              </div>
              <div className='flex justify-start gap-3'>
                {/* Add some horizontal line with circle at the bottom */}
                <p className='text-sm pl-4'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default HomeHero;
