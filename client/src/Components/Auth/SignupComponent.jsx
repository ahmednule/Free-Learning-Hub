import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { Await, Link } from 'react-router-dom';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import Axios from 'axios';

const SignupComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const emailLogin = (e) => {
    e.preventDefault();

    if (!emailError && !passwordError && !fullNameError && !usernameError && email && password && fullName && username) {
      emailLoginSender();
    } else {
      toast.error('Invalid user data.');
    }
  };

  const emailLoginSender = async () => {
    setIsLoading(true);
    try {
      const url = import.meta.env.VITE_BACKEND_URL + '/api/auth/signup';
      const response = await Axios.post(url,{
        fullName,
        username,
        email,
        password
      });
      toast.success('Success');
    } catch (err) {
      console.log(err);
      toast.error('Error creating user.');
    } finally {
      setIsLoading(false);
    }
  };

  const fullNameInput = (e) => {
    const value = e.target.value.trim();
    setFullName(value);
    if (value.split(' ').length < 2) {
      setFullNameError('Full name is required.');
    } else {
      setFullNameError('');
    }
  };

  const usernameInput = (e) => {
    const usernameRegex = /^[a-zA-Z0-9]{5,}$/;
    const value = e.target.value.trim();
    setUsername(value);
    if (!usernameRegex.test(value)) {
      setUsernameError('Invalid username.');
    } else {
      setUsernameError('');
    }
  };

  const emailInput = (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = e.target.value.trim();
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const passwordInput = (e) => {
    const value = e.target.value.trim();
    setPassword(value);
    if (value.length < 8) {
      setPasswordError('Short password.');
    } else {
      setPasswordError('');
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <form className='w-[340px] py-5 px-3 border border-gray-700 rounded-md bg-gray-900'>
        <h2 className='text-xl font-semibold'>Create Account</h2>
        <br />
        <input
          type="text"
          className='inputOne'
          placeholder='Full Name'
          onChange={fullNameInput}
        />
        <p className='text-red-500 pl-2'>{fullNameError}</p>
        <input
          type="text"
          className='inputOne'
          placeholder='Username'
          onChange={usernameInput}
        />
        <p className='text-red-500 pl-2'>{usernameError}</p>
        <input
          type="email"
          className='inputOne'
          placeholder='Email'
          onChange={emailInput}
        />
        <p className='text-red-500 pl-2'>{emailError}</p>
        <div className='inputOne flex justify-between items-center pr-2 gap-2'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='w-full bg-transparent outline-none'
            placeholder='Password'
            onChange={passwordInput}
          />
          <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <p className='text-red-500 pl-2'>{passwordError}</p>
        <button onClick={emailLogin} className='h-9 w-full bg-green-500 rounded mt-2 text-gray-950 font-semibold hover:bg-green-600 hover:text-gray-900 duration-200'>
          {isLoading? <CgSpinnerTwoAlt className='animate-spin mx-auto' size={24} /> : 'Sign Up'}
        </button>
        <p className='mt-3 text-sm'>Already have an account? <span className='linkOne'><Link to={'/login'}>Log In</Link></span></p>

        {/* <div className='mt-12 flex justify-center items-center gap-3'>
          <hr className='w-[45%] h-[1px] border-none bg-gray-700' />
          <span>OR</span>
          <hr className='w-[45%] h-[1px] border-none bg-gray-700' />
        </div> */}

        {/* <div className='mt-5'>
          <button className='flex justify-center w-full gap-3 bg-blue-500/5 border border-blue-500/15 hover:bg-blue-500/10 hover:border-blue-500/20 duration-200 cursor-pointer rounded-full py-[6px]'>
            <FcGoogle size={24} />
            <span>Continue with Google</span>
          </button>
        </div> */}
      </form>

    </div>
  )
}

export default SignupComponent