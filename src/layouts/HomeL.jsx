import React from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/HomeHero'

const HomeL = () => {
  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto'>
      <div className='container max-w-7xl mx-auto'>
        <div className='fixed z-10 w-full bg-gray-50 dark:bg-gray-950 mx-auto'>
          <Navbar />
        </div>
        <div className='pt-16'>
          <HomeHero />
        </div>
      </div>
    </div>
  )
}

export default HomeL