import React from 'react'
import { FaAngleRight, FaArrowRotateRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const SubFooter = (props) => {
  const { t1, l1, t2, l2, reset, edit } = props;
  let navigate = useNavigate();



  return (
    <div>
      <div className='mt-36 justify-between grid-cols sm:flex'>
        <div className='grid-cols sm:flex justify-start gap-2'>
          <button onClick={() => navigate(l1)} className='flex group justify-center dark:text-gray-950 duration-300 transition-all bg-yellow-500 dark:bg-blue-600 py-2 rounded-lg dark:hover:bg-blue-800 hover:bg-yellow-600 px-5 gap-2'>
            <span>
              <FaAngleRight className='group-hover:-translate-x-[5px] duration-300 rotate-180 mt-1' />
            </span>
            <span> {t1} </span>
          </button>
          <button onClick={() => navigate(reset)} className='py-2 px-3 mt-3 sm:mt-0 group dark:text-gray-950 bg-yellow-500 dark:bg-blue-600 rounded-lg hover:bg-yellow-600 dark:hover:bg-blue-800'>
            <FaArrowRotateRight className='group-hover:animate-spin' size={19} />
          </button>
        </div>
        <button onClick={() => navigate(l2)} className='flex mt-3 sm:mt-0 group justify-center dark:text-gray-950 duration-300 transition-all bg-yellow-500 dark:bg-blue-600 py-2 rounded-lg dark:hover:bg-blue-800 hover:bg-yellow-600 px-5 gap-2'>
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