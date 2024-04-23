import React from 'react'
import Navbar from '../components/Navbar'
import ProfileHero from '../components/ProfileHero'
import Footer from '../components/Footer'

const Profile = () => {
  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <div className='pt-24 px-4'>
          <ProfileHero />
        </div>
        <div className='pt-32'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Profile