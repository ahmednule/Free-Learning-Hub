import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Home/Hero'
import Languages from '../Components/Home/Languages'

const Home = () => {
  return (
    <div>
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-lg">
        <Header />
      </div>
      <div className='pt-16'>
        <Hero />
      </div>
      <div>
        {/* Patrnerships or companies major affiliates or sponsors */}
      </div>
      <div>
        <Languages />
      </div>
    </div>
  )
}

export default Home