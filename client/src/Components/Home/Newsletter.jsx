import Axios from 'axios'
import { useState } from 'react';
import { CgSpinnerTwoAlt } from "react-icons/cg";
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addToNewsletter = async () => {
    setIsLoading(true);
    const url = import.meta.env.VITE_BACKEND_URL + '/api/news/register';

    if (!emailError && email) {
      try {
        const response = await Axios.post(url, { email });
        if (response.status === 201){
          toast.success('Subscription added.');
          setEmail('');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.error('Invalid email address');
      setIsLoading(false);
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

  return (
    <div className='text-center bg-gradient-to-b from-transparent via-gray-900 to-gray-900 pb-56 pt-32'>
      <h3 className='text-xl sm:text-2xl md:text-4xl'>Stay upto date with our weekly newsletter.</h3>
      <p className='py-3'>Join our newsletter for regular updates. No spam ever.</p>
      <div className='w-full flex justify-center'>
        <div className='w-[370px] flex justify-center gap-3 items-start'>
          <div className='flex flex-col'>
            <input
              type="email"
              className='inputOne'
              placeholder='Email'
              value={email}
              onChange={emailInput}
            />
            <p className='text-red-500 mt-2 pl-2'>{emailError}</p>
          </div>
          <button onClick={addToNewsletter} className='h-9 mt-[7px] text-center hover:bg-green-600 duration-200 hover:text-gray-950 w-32 bg-green-500 rounded-md'>
            {isLoading ? <CgSpinnerTwoAlt className='animate-spin mx-auto text-gray-950' size={25} /> : 'Subscribe'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter