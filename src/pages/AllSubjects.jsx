import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const AllSubjects = () => {
  let navigate = useNavigate();



  const SubjectsSelections = [
    {
      "id": 1,
      "name": "Code Playground",
      "description": "Explore, experiment, and learn in our interactive Code Playground. Test your code, try out new techniques, and unleash your creativity in a safe and supportive environment.",
      "link": "/code-playground"
    },
    {
      "id": 2,
      "name": "HTML & CSS",
      "description": "Master the essential languages of web development: HTML and CSS. Learn to create structurally sound, responsive and visually appealing websites.",
      "link": "/learn/html"
    },
    {
      id: 4,
      name: "Python",
      description: "Python is a versatile, high-level, interpreted, object-oriented programming language renowned for its simplicity and extensive libraries, making it ideal for various applications.",
      link: "/"
    },
    {
      id: 4,
      name: "JavaScript",
      description: "JavaScript is a versatile, high-level, interpreted programming language known for its flexibility and ability to create interactive web applications.",
      link: "/"
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
            {SubjectsSelections.map((item) => (
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
        <div>

        </div>
      </div>
    </div>
  )
}

export default AllSubjects