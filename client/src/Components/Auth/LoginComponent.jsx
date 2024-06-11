import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { saveUserDataToCookie } from '../../Helpers/handlecookie';
import { Post } from '../../Utilities/DataService.jsx';
import { useDispatch } from 'react-redux';
import { updateUserState } from '../../Redux/user.slice.js';
import toast from 'react-hot-toast';

// Google Auth Imports
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../Config/firebase';
import { signInWithGoogleHelper } from '../../Helpers/googleAuth.js';

const LoginComponent = ({ redirectUrl }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  });
  const [inputError, setInputError] = useState({
    email: '',
    password: '',
  });

  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      const userData = await signInWithPopup(auth, googleProvider);
      console.log(userData);

      const message = await signInWithGoogleHelper(
        userData.user.uid,
        userData.user.displayName,
        userData.user.email,
        userData.user.photoURL
      );

      if (message !== 'error') {
        toast.success("Signin Successful");
        saveUserDataToCookie(message);
        if (message) {
          dispatch(updateUserState({
            isLoggedIn: true,
            userData: message,
          }));
        }
        navigate(redirectUrl);
      } else {
        toast.error("Couldn't sign you in!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Couldn't sign you in!");
    } finally {
      setIsLoading(false);
    }
  };

  const emailLogin = (e) => {
    e.preventDefault();
    if (!inputError.email && inputData.email) {
      emailLoginSender();
    } else {
      toast.error('Invalid user data.');
    }
  };

  const emailLoginSender = async () => {
    setIsLoading(true);
    const apiUrl = '/api/auth/login';
    const apiData = {
      email: inputData.email,
      password: inputData.password,
    };
    const response = await Post(apiUrl, apiData);
    setIsLoading(false);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);
    saveUserDataToCookie(response.data.user);

    if (response.data.user) dispatch(updateUserState({
      isLoggedIn: true,
      userData: response.data.user,
    }));

    navigate(redirectUrl);
  };

  const emailInput = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = e.target.value.trim();
    setInputData((current) => ({
      ...current,
      email: value,
    }));
    if (!emailRegex.test(value)) {
      setInputError((current) => ({
        ...current,
        email: 'Invalid email address',
      }));
    } else {
      setInputError((current) => ({
        ...current,
        email: '',
      }));
    }
  };

  const passwordInput = (e) => {
    const value = e.target.value.trim();
    setInputData((current) => ({
      ...current,
      password: value,
    }));
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[340px] py-5 px-3 border border-gray-700 rounded-md bg-gray-900'>
        <form className='w-full' onSubmit={emailLogin}>
          <h2 className='text-xl font-semibold'>Log In</h2>
          <br />
          <input
            type='email'
            className='inputOne'
            placeholder='Email'
            value={inputData.email}
            onChange={emailInput}
          />
          <p className='text-red-500 pl-2'>{inputError.email}</p>
          <div className='inputOne flex justify-between items-center pr-2 gap-2'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full bg-transparent outline-none'
              placeholder='Password'
              value={inputData.password}
              onChange={passwordInput}
            />
            <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <p className='text-red-500 pl-2'>{inputError.password}</p>
          <p className='text-sm text-right w-full linkOne py-2'>
            <span><Link to={'/forgot-password'}>Forgot password?</Link></span>
          </p>
          <button type='submit' className='h-9 w-full bg-green-500 rounded mt-2 text-gray-950 font-semibold hover:bg-green-600 hover:text-gray-900 duration-200'>
            {isLoading ? <CgSpinnerTwoAlt className='animate-spin mx-auto' size={24} /> : 'Log In'}
          </button>
          <p className='mt-3 text-sm'>Don&apos;t have an account? <span className='linkOne'><Link to={'/signup'}>Sign Up</Link></span></p>

          <div className='mt-12 flex justify-center items-center gap-3'>
            <hr className='w-[45%] h-[1px] border-none bg-gray-700' />
            <span>OR</span>
            <hr className='w-[45%] h-[1px] border-none bg-gray-700' />
          </div>
        </form>

        <div className='mt-5'>
          <button onClick={signInWithGoogle} className='flex justify-center w-full gap-3 bg-blue-500/5 border border-blue-500/15 hover:bg-blue-500/10 hover:border-blue-500/20 duration-200 cursor-pointer rounded-full py-[6px]'>
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

LoginComponent.propTypes = {
  redirectUrl: PropTypes.string.isRequired,
};

export default LoginComponent;
