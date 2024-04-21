import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProjectRunner from './ProjectRunner'

const ProjectContainer = () => {
  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl mx-auto'>
        <Navbar />
        <div className='pt-32 pb-12 mx-5'>
          <ProjectRunner />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectContainer