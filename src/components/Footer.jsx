import React from 'react'
import ScrollTop from './ScrollTop'
import WhiteImage from '../assets/images/logo-white.png'
import DarkImage from '../assets/images/logo-dark.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  const isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <div className='pb-10 text-sm'>
      <div className='fixed z-[7] bottom-20 right-10'>
        <ScrollTop />
      </div>
      <div className='flex flex-row items-center justify-center gap-4 text-yellow-500 dark:text-blue-600'>
        <div className='cursor-pointer' onClick={() => navigate('/')} >
          <img src={isDarkTheme ? DarkImage : WhiteImage} className='h-10 mr-4' alt="Free Learning Hub Logo" />
        </div>
        <a href="https://github.com/developer-assets/Free-Learning-Hub" className='hover:underline' >Contribute</a>
        <a href="mailto:999patrickobama@gmail.com" className='hover:underline duration-300' >Contact</a>
      </div>
    </div>
  )
}

export default Footer