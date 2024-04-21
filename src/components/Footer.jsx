import React from 'react'
import ScrollTop from './ScrollTop'

const Footer = () => {
  return (
    <div className='pb-10 text-sm'>
      <div className='fixed z-[7] bottom-20 right-10'>
        <ScrollTop />
      </div>
      <div className='flex flex-row items-center justify-center gap-4 text-yellow-500 dark:text-blue-600 duration-200'>
        <a href="https://github.com/developer-assets/Free-Learning-Hub" className='hover:underline' >Contribute</a>
        <a href="mailto:999patrickobama@gmail.com" className='hover:underline' >Contact</a>
      </div>
    </div>
  )
}

export default Footer