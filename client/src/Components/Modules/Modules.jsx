import React, { useState } from 'react'
import Allmodules from './Allmodules';
import Mymodules from './Mymodules';

const Modules = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className='w-full h-10 sticky top-14 bg-gray-900 border-t border-b border-gray-700 mt-10 flex justify-around'>
        <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>ALL MODULES</button>
        <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>MY MODULES</button>
      </div>

      {!isLoggedIn && (
        <div className='w-full h-6 bg-red-500 rounded'>
          <p className='text-center'>Signin to save progress</p>
        </div>
      )}
      
      <div className='mt-6'>
        {activeTab === 1 && <Allmodules />}
        {activeTab === 2 && <Mymodules />}
      </div>
    </div>
  )
}

export default Modules