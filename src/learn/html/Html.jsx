import React from 'react';
import Intro from '../../courses/html/Intro';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Navbar from '../../components/Navbar';
import HtmlSidebar from '../../components/HtmlSidebar';
import Footer from '../../components/Footer';

const Html = () => {
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
            <HtmlSidebar />
          </div>
        </div>
        <div className='pt-32 pb-32'>
          <Footer />
        </div>
        
      </div>
    </div>
  );
};

export default Html;