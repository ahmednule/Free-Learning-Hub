import React from 'react'
import Header from '../Components/General/Header'
import Hero from '../Components/Home/Hero'
import Languages from '../Components/Home/Languages'
import { TfiPlus } from "react-icons/tfi";
import Footer from '../Components/General/Footer';
import Testimonials from '../Components/Home/Testimonials';

const Home = () => {
  return (
    <div>
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      <div className='pt-16 px-3'>
        <Hero />
      </div>
      <div>
        {/* Patrnerships or companies major affiliates or sponsors */}
      </div>
      <div className='mt-64 w-full h-20 border-t border-gray-600 bg-gradient-to-b from-gray-900 relative to-transparent'>
        <div className='hidden md:block absolute top-0 left-0 -translate-x-[14px] -translate-y-[14px] text-white'>
          <TfiPlus size={30} />
        </div>
        <div className='hidden md:block absolute top-0 right-0 translate-x-[14px] -translate-y-[14px] text-white'>
          <TfiPlus size={30} />
        </div>
      </div>
      <div className='mt-32'>
        <Languages />
      </div>
      <div className='mt-32 px-3'>
        <Testimonials />
      </div>
      <div className='mt-32'>

      </div>
      <div className='mt-32 px-3'>
        <Footer />
      </div>
    </div>
  )
}

export default Home