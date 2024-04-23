import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState('');
  const [userFirstName, setUserFirstName] = useState('');

  useEffect(() => {
    const userData = auth.onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
        setUserPhotoURL(user.photoURL || '');
        const firstName = user.displayName.split(' ')[0];
        setUserFirstName(firstName);
      } else {
        // No user is signed in
        setIsLoggedIn(false);
        setUserPhotoURL('');
      }
    });

    // Clean up listener
    return () => userData();
  }, []);

  return (
    <div className='fixed z-[5] w-full bg-gray-50 dark:bg-gray-950 mx-auto'>
      <div className='flex w-full h-16 container max-w-7xl justify-between items-center px-4 border-b dark:border-blue-600 border-yellow-500'>
        <h2
          onClick={() => navigate('/')}
          className='text-2xl font-bold cursor-pointer'
        >
          Free Learning Hub
        </h2>
        <div className='flex items-center justify-end gap-3'>
          <a href="https://github.com/developer-assets/Free-Learning-Hub" target='_blank' >
            <FaGithub 
              size={30}
              className='hover:text-gray-500 duration-300'
            />
          </a>
          {isLoggedIn ? (
            <button onClick={() => navigate("/profile")} className='border cursor-pointer flex items-center justify-start gap-3 border-yellow-500 dark:border-blue-600 rounded-md py-1 px-5 tracking-tight dark:hover:text-black dark:hover:bg-blue-600 hover:bg-yellow-500 hover:text-white duration-300 transition-all'>
              {userFirstName ? (
                <p>{userFirstName}</p>
              ) : setIsLoggedIn(false)
              }
              {userPhotoURL ? (
                <img src={userPhotoURL} alt="User Image" className='h-5 w-5 hover:opacity-50 duration-300 rounded-full' />
              ) : setIsLoggedIn(false)
              }
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className='border border-yellow-500 dark:border-blue-600 rounded-md py-1 px-5 tracking-tight dark:hover:text-black dark:hover:bg-blue-600 hover:bg-yellow-500 hover:text-white duration-300 transition-all'
            >
              LOGIN
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
