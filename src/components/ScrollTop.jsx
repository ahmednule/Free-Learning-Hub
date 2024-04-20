import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollTop = () => {
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (document.documentElement.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top on button click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className='bg-yellow-500 px-2 pt-3 pb-1 rounded-md hover:bg-yellow-600 dark:hover:bg-blue-700 group dark:bg-blue-600'>
          <FaArrowCircleUp color={isDarkTheme ? 'black' : 'white'} className='animate-bounce group-hover:animate-none group-hover:-translate-y-1' size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;
