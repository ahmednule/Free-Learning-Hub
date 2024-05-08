import React, { useState, useEffect } from 'react';
import Header from '../General/Header';
import Footer from '../General/Footer';
import { allModules } from '../../Data/Modules.js';
import { Link } from 'react-router-dom';

const Register = () => {
  const [isValid, setIsValid] = useState(false);
  const [toRegister, setToRegister] = useState(null);

  useEffect(() => {
    let id = window.location.hash;
    id = id.split('/');
    id = id.pop();

    if (!isNaN(id)){
      id = Number(id);
      const foundModule = allModules.find(module => module.id === id);
      if (foundModule) {
        setToRegister(foundModule);
        setIsValid(true);
      }
    }
  }, []);

  if (!isValid || !toRegister) {
    return (
      <div>
        <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
          <Header />
        </div>
        <div className='pt-32 min-h-screen'>
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
          <button className='bg-green-500 py-2 px-6 rounded-md hover:bg-green-600 hover:text-gray-950 duration-200'>REGISTER</button>
        </div>
      </div>
      <div className='mt-32'>
        <Footer />
      </div>
    </div>
  );
}

export default Register;
