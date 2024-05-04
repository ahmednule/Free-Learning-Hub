import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Home/Hero'

const Home = () => {
  return (
    <div>
      <div className="fixed w-full container mx-auto">
        <Header />
      </div>
      <div className='pt-16'>
        <Hero />
      </div>
    </div>
  )
}

export default Home