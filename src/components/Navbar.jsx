import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();



  return (
    <div className='flex w-full h-16 justify-between items-center px-4 border-b border-yellow-200'>
      <h2
        onClick={() => navigate('/')}
        className='text-2xl font-bold cursor-pointer'
      >
        Free Learning Hub
      </h2>
      <a
        href='https://github.com/developer-assets/Free-Learning-Hub'
        className='border border-yellow-500 rounded-full py-2 px-5 tracking-tight dark:hover:text-black hover:bg-yellow-500 hover:text-white duration-300 transition-all'
      >
        CONTRIBUTE
      </a>
    </div>
  )
}

export default Navbar