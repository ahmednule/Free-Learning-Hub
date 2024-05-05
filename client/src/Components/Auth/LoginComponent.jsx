import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const emailLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full flex justify-center'>
      <form className='w-[340px] py-5 px-3 border border-gray-700 rounded-md bg-gray-900'>
        <h2 className='text-xl font-semibold'>Log In</h2>
        <br />
        <input
          type="text"
          className='inputOne'
          placeholder='Username'
        />
        <div className='inputOne flex justify-between items-center pr-2 gap-2'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='w-full bg-transparent outline-none'
            placeholder='Password'
          />
          <span className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <p className='text-sm text-right w-full linkOne py-2'><span><Link to={'/forgot-password'}>Forgot password?</Link></span></p>
        <button onClick={emailLogin} className='h-9 w-full bg-green-500 rounded mt-2 text-gray-950 font-semibold hover:bg-green-600 hover:text-gray-900 duration-200'>
          {isLoading? <CgSpinnerTwoAlt className='animate-spin mx-auto' size={24} /> : 'Log In'}
        </button>
        <p className='mt-3 text-sm'>Don't have an account? <span className='linkOne'><Link to={'/signup'}>Sign Up</Link></span></p>

        <div className='mt-12 flex justify-center items-center gap-3'>
          <hr className='w-[45%] h-[1px] border-none bg-gray-700' />
          <span>OR</span>
          <hr className='w-[45%] h-[1px] border-none bg-gray-700' />
        </div>

        <div className='mt-5'>
          <button className='flex justify-center w-full gap-3 bg-blue-500/5 border border-blue-500/15 hover:bg-blue-500/10 hover:border-blue-500/20 duration-200 cursor-pointer rounded-full py-[6px]'>
            <FcGoogle size={24} />
            <span>Log In with Google</span>
          </button>
        </div>
      </form>

    </div>
  )
}

export default LoginComponent
