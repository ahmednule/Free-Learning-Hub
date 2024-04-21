import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const Projects = () => {
  let navigate = useNavigate();

  const projectSelection = [
    {
      "id": 1,
      "name": "Code Playground",
      "description": "Explore, experiment, and learn in our interactive Code Playground. Test your code, try out new techniques, and unleash your creativity in a safe and supportive environment.",
      "link": "/code-playground"
    },
    {
      "id": 2,
      "name": "HTML & CSS",
      "description": "This project collection includes various challenges to help you practice and improve your skills in HTML and CSS to be able to create structurally sound, responsive and visually appealing websites.",
      "link": "/projects/html"
    }
  ]



  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl mx-auto'>
        <div>
          <Navbar />
        </div>
        <div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-32 mx-auto w-full'>
            {projectSelection.map((item) => (
              <div onClick={() => navigate(item.link)} key={item.id} className='max-w-sm group mx-auto cursor-pointer rounded-2xl flex justify-between dark:hover:bg-gray-900 hover:bg-gray-100 duration-300 transition-colors p-4'>
                <div className='flex-[0.95]'>
                  <div className='flex justify-start gap-3'>
                    <h2 className='text-xl font-semibold mb-2'>{item.name}</h2>
                    <FaAngleRight className='mt-2 hidden group-hover:flex duration-300' size={14} />
                  </div>
                  <p className='ml-2 text-sm'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='pt-32'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Projects