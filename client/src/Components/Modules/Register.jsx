import React, { useState, useEffect } from 'react';
import Header from '../General/Header';
import Footer from '../General/Footer';
import { allModules } from '../../Data/Modules.js';
import { Link, useLocation } from 'react-router-dom';
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie.js';
import Axios from 'axios';
import toast from 'react-hot-toast';
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Register = () => {
  const [isValid, setIsValid] = useState(false);
  const [toRegister, setToRegister] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uid, setUid] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [progress, setProgress] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  const registerModule = async () => {
    setIsLoading(true);
    const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/register';
    try {
      const response = await Axios.post(url, {
        uid,
        module: toRegister.unique
      });

      if (response.status === 201) {
        toast.success('Registered successfully');
        setIsRegistered(true);
      };

    } catch (err) {
      console.log(err);
      toast.error('Couldn\'t register');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const getModuleToRegister = () => {
      let id = location.pathname.split('/');
      id = id[id.length - 1];

      if (!isNaN(id)){
        id = Number(id);
        const foundModule = allModules.find(module => module.id === id);
        if (foundModule) {
          setToRegister(foundModule);
          setIsValid(true);
        }
      }
    };

    getModuleToRegister();

  }, [location.pathname]);

  useEffect(() => {
    const getUserData = async () => {
      if (toRegister) {
        const userData = fetchUserDataFromCookie();
        const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/progress';
        let userId = '';

        if (userData) {
          setIsLoggedIn(true);
          setUid(userData.uid);
          userId = userData.uid;

          try {
            const response = await Axios.post(url, { uid: userId });
            setProgress(response.data);
          } catch (err) {
            console.log(err);
          }
        }
      }
    };

    getUserData();

  }, [toRegister]);

  useEffect(() => {
    if (toRegister && Object.keys(progress).length > 0) {
      const isRegistered = Object.keys(progress).includes(toRegister.unique);
      setIsRegistered(isRegistered);
    }
  }, [progress, toRegister]);

  if (!isValid || !toRegister) {
    return (
      <div>
        <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
          <Header />
        </div>
        <div className='pt-32 min-h-screen'>
          {!isLoggedIn && (
            <div className='w-full mb-16 h-6 bg-red-500 rounded'>
              <p className='text-center'>Signin to save progress</p>
            </div>
          )}
          <h3 className='text-center text-xl md:text-2xl underline underline-offset-[30px]'>Module Not Found</h3>
          <p className='text-center mt-16'>Pick a module from <span className='linkOne px-1'>here</span> to register and start learning.</p>
        </div>
        <div className='mt-32'>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      <div className='pt-32'>
        {!isLoggedIn && (
          <div className='w-full mb-16 h-6 bg-red-500 rounded'>
            <p className='text-center'>Signin to save progress</p>
          </div>
        )}
        <h3 className='text-center text-2xl md:text-3xl lg:text-4xl underline underline-offset-[30px] pb-24'>{toRegister.name}</h3>
        <p>{toRegister.description}</p>
        <p className='text-sm mt-6'>Level: <span className='text-green-500'>{toRegister.learningLevel}</span></p>
        <p className='text-sm mb-14'>Lesson Duration: <span className='text-green-500'>{toRegister.learningLength}</span></p>
        <h4 className='mt-5 mb-1 text-blue-500 text-xl md:text-2xl'>Objectives:</h4>
        <ul className='list-disc'>
          {toRegister.objectives.map((objective, index) => (
            <li className='ml-10' key={index}>{objective}</li>
          ))}
        </ul>
        <h4 className='mt-5 mb-1 text-blue-500 text-xl md:text-2xl'>What You Will Learn:</h4>
        <ul className='list-disc'>
          {toRegister.whatYouWillLearn.map((learn, index) => (
            <li className='ml-10' key={index}>{learn}</li>
          ))}
        </ul>
        <div className='flex justify-between gap-3 mt-32'>
          <button  className='bg-blue-500 py-2 px-6 rounded-md hover:bg-blue-600 hover:text-gray-950 duration-200'><Link>ALL MODULES</Link></button>
          
          {!isLoggedIn ? (
            <button className='bg-red-500 py-2 px-6 rounded-md hover:bg-red-600 hover:text-gray-950 duration-200'><Link to={'/login'}>LOGIN</Link></button>
          ) : (
            <button className='bg-green-500 w-44 items-center text-center py-2 px-6 rounded-md hover:bg-green-600 hover:text-gray-950 duration-200'>
              {isRegistered ? (
                <span><Link to={toRegister.linkTwo}>CONTINUE</Link></span>
              ) : (
                <span onClick={registerModule}>
                  {isLoading ? <CgSpinnerTwoAlt className='animate-spin mx-auto text-gray-950' size={26} /> : 'REGISTER'}
                </span>
              )}
            </button>
          )}
        </div>
      </div>
      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  );
}

export default Register;
