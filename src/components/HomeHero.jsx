import React from 'react'
import LogoWhite from '../assets/images/logo-white.png'
import LogoDark from '../assets/images/logo-dark.png'

const HomeHero = () => {
  return (
    <div className='min-h-screen'>
      <div className='flex justify-center mt-14'>
        <img src={LogoWhite} className='w-[40%] block dark:hidden' alt="" />
        <img src={LogoDark} className='w-[40%] hidden dark:block' alt="" />
      </div>
      <div className='text-center mt-8 text-xl'>
        <p>Get all learning resources in a 100% open source platfrom.</p>
        <p>We are currently focused on programming languages but we will expand in the near future.</p>
        <p>You can contribute by working on <span className='custom-span'>bug fixes </span>, <span className='custom-span'>UI update </span>and <span className='custom-span'> learning materials</span> update.</p>
      </div>
    </div>
  )
}

export default HomeHero