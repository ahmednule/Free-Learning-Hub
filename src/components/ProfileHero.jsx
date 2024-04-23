import React, { useState, useEffect } from 'react'
import { auth, googleProvider } from "../config/firebase";
import { useNavigate } from 'react-router-dom';
import ProfileHeroTwo from './ProfileHeroTwo';
import { FaAngleRight, FaHome } from 'react-icons/fa';
import { MdAutoGraph, MdMenuBook } from 'react-icons/md';
import { LiaBookSolid } from 'react-icons/lia';
import { IoMdSettings } from 'react-icons/io';

const ProfileHero = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState('');
  const [userName, setUserName] = useState('');

  const profileNavs = [

  ]

  useEffect(() => {
    const userData = auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
        setUserPhotoURL(user.photoURL || '');
        setUserName(user.displayName || '');
      } else {
        // No user is signed in
        setIsLoggedIn(false);
        setUserPhotoURL('');
      }
    });

    // Clean up listener
    return () => userData();
  }, []);

  if(!isLoggedIn){
    navigate("/login");
  }


  return (
    <div>
      <div className='grid min-h-screen grid-cols-9 gap-2'>

        <div className='col-span-2 min-h-screen hidden lg:block bg-gray-200 dark:bg-gray-800 rounded-md'>
          <div className='w-full h-full p-2'>
            <h2 className='text-base lg:text-xl text-yellow-500 dark:text-blue-600 font-bold'>Free Learning Hub</h2>
            <p className='mt-3 text-xs lg:text-sm'>Learn, Explore, Code</p>
            <div className='mt-16 '>
              <ul className='flex flex-col gap-2'>
                <div className='flex pr-3 justify-between items-center cursor-pointer group bg-yellow-500 dark:bg-blue-600 text-gray-50 dark:text-gray-950 py-2 rounded-md'>
                  <li className='flex justify-start pl-2 pt-1'>
                    <FaHome size={23} />
                    <span className='ml-2 text-[1.2rem] font-semibold'>HOME</span>
                  </li>
                  <FaAngleRight size={20} className='group-hover:translate-x-1 duration-300' />
                </div>

                <div className='flex pr-3 justify-between items-center cursor-pointer group bg-yellow-500 dark:bg-blue-600 text-gray-50 dark:text-gray-950 py-2 rounded-md'>
                  <li className='flex justify-start pl-2 pt-1'>
                    <MdMenuBook size={23} />
                    <span className='ml-2 text-[1.2rem] font-semibold'>COURSES</span>
                  </li>
                  <FaAngleRight size={20} className='group-hover:translate-x-1 duration-300' />
                </div>

                <div className='flex pr-3 justify-between items-center cursor-pointer group bg-yellow-500 dark:bg-blue-600 text-gray-50 dark:text-gray-950 py-2 rounded-md'>
                  <li className='flex justify-start pl-2 pt-1'>
                    <MdAutoGraph size={23} />
                    <span className='ml-2 text-[1.2rem] font-semibold'>STATISTICS</span>
                  </li>
                  <FaAngleRight size={20} className='group-hover:translate-x-1 duration-300' />
                </div>

                <div className='flex pr-3 justify-between items-center cursor-pointer group bg-yellow-500 dark:bg-blue-600 text-gray-50 dark:text-gray-950 py-2 rounded-md'>
                  <li className='flex justify-start pl-2 pt-1'>
                    <LiaBookSolid size={23} />
                    <span className='ml-2 text-[1.2rem] font-semibold'>NOTES</span>
                  </li>
                  <FaAngleRight size={20} className='group-hover:translate-x-1 duration-300' />
                </div>

                <div className='flex pr-3 justify-between items-center cursor-pointer group bg-yellow-500 dark:bg-blue-600 text-gray-50 dark:text-gray-950 py-2 rounded-md'>
                  <li className='flex justify-start pl-2 pt-1'>
                    <IoMdSettings size={23} />
                    <span className='ml-2 text-[1.2rem] font-semibold'>SETTINGS</span>
                  </li>
                  <FaAngleRight size={20} className='group-hover:translate-x-1 duration-300' />
                </div>

          
                
              </ul>
            </div>

          </div>
        </div>

        <div className='col-span-9 lg:col-span-5 min-h-screen bg-gray-200 dark:bg-gray-800 rounded-md'>
          <ProfileHeroTwo />
        </div>
        <div className='col-span-2 min-h-screen hidden lg:block bg-gray-200 dark:bg-gray-800 rounded-md'>

        </div>
      </div>
    </div>
  )
}

export default ProfileHero