import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();



  return (
    <div className='flex w-full h-16 container max-w-7xl justify-between items-center px-4 border-b dark:border-blue-200 border-yellow-200'>
      <h2
        onClick={() => navigate('/')}
        className='text-2xl font-bold cursor-pointer'
      >
        Free Learning Hub
      </h2>
      <a
        href='https://github.com/developer-assets/Free-Learning-Hub'
        target='_blank'
        rel='website'
        className='border border-yellow-500 dark:border-blue-600 rounded-full py-2 px-5 tracking-tight dark:hover:text-black dark:hover:bg-blue-600 hover:bg-yellow-500 hover:text-white duration-300 transition-all'
      >
        CONTRIBUTE
      </a>
    </div>
  )
}

export default Navbar