import React, { useState } from 'react';
import Intro from '../../courses/python/Intro';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { FaCircle } from 'react-icons/fa6';
import CodeEditor from '../../components/CodeEditor';
import pythonTopics from '../../assets/objects/pythonTopics.json'

const Html = () => {
  const [expanded, setExpanded] = useState(false);



  return (
    <div className='bg-gray-50 text-black dark:text-white relative dark:bg-gray-950 mx-auto'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className='grid md:grid-cols-6 pt-16'>
          <div className='col-span-4'>
            <Intro />
          </div>
          <div className='hidden md:block col-span-2 text-right pr-5 pt-10'>
            <Sidebar data={pythonTopics} />
          </div>
        </div>
        <div className='pt-32 pb-10'>
          <Footer />
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

export default Html;