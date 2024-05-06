import React from 'react'
import SignupComponent from '../Components/Auth/SignupComponent'
import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'

const Signup = () => {
  return (
    <div>
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      <div className='pt-44'>
        <SignupComponent />
      </div>
      <div className='mt-32'>

      </div>
      <div className='mt-32 px-3'>
        <Footer />
      </div>
    </div>
  )
}

export default Signup