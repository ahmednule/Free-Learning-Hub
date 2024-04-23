import React, { useState } from 'react';
import Intro from '../../courses/html/Intro';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import { FaCircle } from 'react-icons/fa6';
import CodeEditor from '../../components/CodeEditor';
import htmlTopics from '../../assets/objects/htmlTopics.json'

const Html = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='bg-gray-50 text-black dark:text-white relative dark:bg-gray-950 mx-auto'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className='flex gap-5 flex-row pt-16'>
          <div className='hidden md:block flex-[0.3] w-56 col-span-2'>
            <div className='fixed overflow-y-scroll h-screen'>
              <Sidebar data={htmlTopics} />
            </div>
          </div>
          <div className='flex-[0.7] col-span-4 ml-3 pl-3 pt-10'>
            <Intro />
          </div>
        </div>
        <div className='pt-32 w-full pb-10'>
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