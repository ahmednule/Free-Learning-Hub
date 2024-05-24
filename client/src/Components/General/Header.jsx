import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserState, getReduxUserData } from '../../Redux/user.slice';
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie.js';
import Spinner from './Spinner.jsx';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getReduxUserData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = fetchUserDataFromCookie();
    if (userData) {
      dispatch(updateUserState({
        isLoggedIn: true,
        userData: userData,
      }));
    }
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div className="flex h-14 justify-between items-center border-b border-b-gray-700 px-3">
      <div>
        <Link to={'/'}>
          <h2 className='text-2xl md:text-3xl text-blue-500'>freeLearningHub</h2>
        </Link>
      </div>
      <div className='flex justify-end gap-10 items-center'>
        <div className='flex justify-end gap-5 items-center'>
          <span className='text-gray-400 hover:text-gray-200 hover:scale-105 duration-200 cursor-pointer'>
            <Link to={'/learn'}>Learn</Link>
          </span>
          <span className='text-gray-400 hover:text-gray-200 hover:scale-105 duration-200 cursor-pointer'>
            <Link to={'/tools'}>Tools</Link>
          </span>
          <span className='text-gray-400 hover:text-gray-200 hover:scale-105 duration-200 cursor-pointer'>
            <a
              href='https://github.com/developer-assets/Free-Learning-Hub'
              target='_blank'
              rel='noreferer'
            >Contribute</a>
          </span>
        </div>

        {isLoading ? (
          <div>
            <Spinner />
          </div>
        ) : (
          <>
            {user.isLoggedIn ? (
              <div>
                <Link to={'/profile'}>
                  <img src={user.userData.photoURL} className='h-8 w-8 border border-gray-700 object-cover rounded-full' alt='Profile Picture' />
                </Link>
              </div>
            ) : (
              <div className='border border-gray-700 py-1 px-6 rounded-md hover:bg-gray-900 duration-200 cursor-pointer'>
                <Link to={'/login'} >
                  LOGIN
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
