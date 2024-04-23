import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed z-[5] w-full bg-gray-50 dark:bg-gray-950 mx-auto'>
      <div className='flex w-full h-16 container max-w-7xl justify-between items-center px-4 border-b dark:border-blue-200 border-yellow-500'>
        <h2
          onClick={() => navigate('/')}
          className='text-2xl font-bold cursor-pointer'
        >
          Free Learning Hub
        </h2>
        <div className='flex items-center justify-end gap-3'>
            <a href="https://github.com/developer-assets/Free-Learning-Hub" target='_blank' >
              <FaGithub 
                size={30}
                className='hover:text-gray-700 duration-300'
              />
            </a>
          <button
            onClick={() => navigate("/login")}
            className='border border-yellow-500 dark:border-blue-600 rounded-md py-1 px-5 tracking-tight dark:hover:text-black dark:hover:bg-blue-600 hover:bg-yellow-500 hover:text-white duration-300 transition-all'
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar