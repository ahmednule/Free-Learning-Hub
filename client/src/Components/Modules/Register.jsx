import { useState, useEffect } from 'react';
import { allModules } from '../../Data/Modules.js';
import { Link, useLocation } from 'react-router-dom';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { getReduxUserData } from '../../Redux/user.slice';
import Axios from 'axios';
import toast from 'react-hot-toast';
import Spinner from '../General/Spinner.jsx';

const Register = () => {
  const userDataMain = useSelector(getReduxUserData);
  const location = useLocation();

  const [preLoader, setPreLoader] = useState(true);
  const [validURL, setValidURL] = useState(false);
  const [toRegister, setToRegister] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [progress, setProgress] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const registerModule = async () => {
    setIsLoading(true);
    const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/register';
    try {
      const response = await Axios.post(url, {
        uid: userDataMain.userData.uid,
        module: toRegister.unique
      });

      if (response.status === 201) {
        toast.success('Registered successfully');
        setIsRegistered(true);
      }
    } catch (err) {
      console.log(err);
      toast.error('Couldn\'t register');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getModuleToRegister = () => {
      let id = location.pathname.split('/');
      id = id[id.length - 1];

      if (!isNaN(id)){
        id = Number(id);
        const foundModule = allModules.find(module => module.id === id);
        if (foundModule) {
          setToRegister(foundModule);
          setValidURL(true);
        }
      }
    };

    getModuleToRegister();
  }, [location.pathname]);

  useEffect(() => {
    const getUserData = async () => {
      if (toRegister) {
        const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/progress';

        if (userDataMain.userData) {
          try {
            const response = await Axios.post(url, { uid: userDataMain.userData.uid });
            setProgress(response.data);
          } catch (err) {
            console.log(err);
          } finally {
            setPreLoader(false);
          }
        } else {
          setPreLoader(false);
        }
      }
    };

    getUserData();
  }, [userDataMain.userData, toRegister]);

  useEffect(() => {
    if (toRegister && Object.keys(progress).length > 0) {
      const isRegistered = Object.keys(progress).includes(toRegister.unique);
      setIsRegistered(isRegistered);
    }
  }, [progress, toRegister]);

  if (!validURL || !toRegister) {
    return (
      <div>
        <div className='min-h-screen'>
          {!userDataMain.isLoggedIn && (
            <div className='bg-reds-400 mx-2 mt-2 p-2 text-gray-950 text-center rounded mb-5'>
              <p>Login <Link to={'/login'} className='linkOne'>here</Link> to save your progress</p>
            </div>
          )}
          <h3 className='text-center text-xl md:text-2xl underline underline-offset-[30px]'>Module Not Found</h3>
          <p className='text-center mt-16'>Pick a module from <Link to={'/learn'} className='linkOne px-1'>here</Link> to register and start learning.</p>
        </div>
      </div>
    );
  }

  if (preLoader) {
    return (
      <div className='flex justify-center mt-5 min-h-screen'>
        <Spinner width={30} />
      </div>
    );
  }

  return (
    <div className='text-gray-300 mt-5'>
      {!userDataMain.isLoggedIn && (
        <div className='bg-reds-400 mx-2 mt-2 p-2 text-gray-950 text-center rounded mb-5'>
          <p>Login <Link to={'/login'} className='linkOne'>here</Link> to save your progress</p>
        </div>
      )}
      <h3 className='text-center text-2xl md:text-3xl lg:text-4xl underline underline-offset-[30px] pb-24'>{toRegister.name}</h3>
      <p>{toRegister.description}</p>
      <h4 className='mt-20 mb-1 text-blue-500 text-xl md:text-2xl'>Objectives:</h4>
      <ul className='list-disc'>
        {toRegister.objectives.map((objective, index) => (
          <li className='ml-10' key={index}>
            <span>{objective.name}</span>
            <span className='pl-3 font-extralight text-blue-400'>{objective.desc}</span>
          </li>
        ))}
      </ul>
      <h4 className='mt-20 mb-1 text-blue-500 text-xl md:text-2xl'>What You Will Learn:</h4>
      <ul className='list-disc'>
        {toRegister.whatYouWillLearn.map((learn, index) => (
          <li className='ml-10' key={index}>
            <span>{learn.name}</span>
            <span className='pl-3 font-extralight text-blue-400'>{learn.desc}</span>
          </li>
        ))}
      </ul>
      <div className='flex justify-between gap-3 mt-32'>
        <button className='bg-blue-500 py-2 px-6 rounded-md hover:bg-blue-600 hover:text-gray-950 duration-200'><Link to={'/learn'}>ALL MODULES</Link></button>
        
        {!userDataMain.isLoggedIn ? (
          <button className='bg-reds-400 py-2 px-6 rounded-md hover:bg-reds-400 hover:text-gray-950 duration-200'><Link to={'/login'}>LOGIN</Link></button>
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
  );
}

export default Register;
