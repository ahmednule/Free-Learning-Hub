import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const SubFooter = (props) => {
  const { t1, l1, t2, l2, edit } = props;
  let navigate = useNavigate();

  return (
    <div>
      <div className='flex flex-col max-w-[90vw] gap-2 mt-32 pr-4'>
        <button onClick={() => navigate(l1)} className='flex group justify-center dark:text-gray-950 duration-300 transition-all bg-yellow-500 dark:bg-blue-600 py-2 rounded-lg dark:hover:bg-blue-800 hover:bg-yellow-600 px-5 gap-2'>
          <span>
            <FaAngleRight className='group-hover:-translate-x-[5px] duration-300 rotate-180 mt-1' />
          </span>
          <span> {t1} </span>
        </button>
        <button onClick={() => navigate(l2)} className='flex sm:mt-0 group justify-center dark:text-gray-950 duration-300 transition-all bg-yellow-500 dark:bg-blue-600 py-2 rounded-lg dark:hover:bg-blue-800 hover:bg-yellow-600 px-5 gap-2'>
          <span> {t2} </span>
          <span>
            <FaAngleRight className='group-hover:translate-x-[5px] duration-300 mt-1' />
          </span>
        </button>
      </div>
      <div className='mt-12'>
        <a href={edit} target='_blank' rel='showcase-website' className='text-yellow-500 hover:underline cursor-pointer dark:text-blue-600'>Edit This Page</a>
      </div>
    </div>
  )
}

export default SubFooter