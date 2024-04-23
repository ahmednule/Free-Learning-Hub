import React from 'react'
import Navbar from '../components/Navbar'
import CodeEditor from '../components/CodeEditor'
import Footer from '../components/Footer'

const CodePlayGround = () => {
  return (
    <div className='bg-gray-50 text-black dark:text-white dark:bg-gray-950 mx-auto w-full min-h-screen'>
      <div className='container max-w-7xl mx-auto'>
        <Navbar />
        <div className='pt-24 pb-32 mx-12'>
          <CodeEditor />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default CodePlayGround