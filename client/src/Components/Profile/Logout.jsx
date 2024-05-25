import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md'
import { deleteUserCookie } from '../../Helpers/handlecookie';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { updateUserState, updateProgressState } from '../../Redux/user.slice';
import toast from 'react-hot-toast';
import Axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);
    try {
      const url = import.meta.env.VITE_BACKEND_URL + '/api/auth/logout';
      const response = await Axios.post(url);
      if (response.status === 200) {
        deleteUserCookie();
        dispatch(updateUserState({
          isLoggedIn: false,
          userData: '',
        }));
        dispatch(updateProgressState({ userProgress: '' }));
        toast.success('Logged out successfully');
        navigate('/login');
      } else {
        toast.error('Error logging out');
      }
    } catch (err) {
      console.log(err);
      toast.error('Error logging out');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-gray-900 px-4 py-10 w-full rounded-sm'>
      <p className='md:text-xl'>Are you sure you want to logout?</p>
      <button
        onClick={logout}
        className='flex items-center w-44 h-10 gap-3 bg-reds-400 text-gray-950 hover:bg-reds hover:text-gray-200 duration-200 py-1 px-5 rounded mt-3'
      >
        {!isLoading && (<MdLogout className='ml-4' size={22} />)}
        <span>
          {isLoading ? <CgSpinnerTwoAlt size={22} className='ml-14 animate-spin' />  : 'LOGOUT'}
        </span>
      </button>
    </div>
  );
}

export default Logout;
