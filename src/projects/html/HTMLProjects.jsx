import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaAngleRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const HTMLProjects = () => {
  let navigate = useNavigate();

  const projects = [
    {
      id: 1,
      name: 'First Basic Webpage',
      more: 'This project focuses on checking if the user can layout a basic HTML webpage.',
      req: 'Learn HTML upto Basic Elements',
      link: '/projects/html/first-basic-website'
    }
  ]



  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <h1 className='text-3xl text-center pt-36'>HTML & CSS Projects</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 mx-auto w-full'>
          {projects.map((item) => (
            <div onClick={() => navigate(item.link)} key={item.id} className='max-w-sm group mx-auto cursor-pointer rounded-2xl flex justify-between dark:hover:bg-gray-900 hover:bg-gray-100 duration-300 transition-colors p-4'>
              <div className='flex-[0.95]'>
                <div className='flex justify-start gap-3'>
                  <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                  <FaAngleRight className='mt-2 hidden group-hover:flex duration-300' size={14} />
                </div>
                <p className='ml-2 text-sm'>{item.more}</p>
                <p className='ml-2 mt-3 text-sm uppercase text-green-500'>{item.req}</p>
              </div>
            </div>
          ))}

        </div>
        <div className='pt-32'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default HTMLProjects