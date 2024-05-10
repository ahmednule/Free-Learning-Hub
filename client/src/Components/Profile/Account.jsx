import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md'
import { deleteUserCookie } from '../../Helpers/handlecookie';
import toast from 'react-hot-toast';
import Axios from 'axios';

const Account = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_URL + '/api/auth/logout';
      const response = await Axios.post(url);
      if (response.status === 200) {
        deleteUserCookie();
        toast.success('Logged out successfully');
        navigate('/login');
      } else {
        toast.error('Error logging out');
      }
    } catch (err) {
      console.log(err);
      toast.error('Error logging out');
    }
  };

  return (
    <div className='bg-gray-950 p-2 w-full rounded-2xl'>
      <div className='border border-gray-700 rounded-xl h-20 mb-4'></div>

      <div className='border border-red-500 text-red-500 p-2 py-5 rounded-xl'>
        <button onClick={logout} className='flex justify-start items-center border py-1 px-6 border-red-500 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-950 duration-200 rounded-md gap-3'>
          <MdLogout className='rotate-180' />
          <span>LOGOUT</span>
        </button>
      </div>

    </div>
  );
}

export default Account;
