import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserState, getReduxUserData } from '../../Redux/user.slice';
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie.js';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import Spinner from './Spinner.jsx';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(getReduxUserData);
  const [isLoading, setIsLoading] = useState(true);
  const [dropdown, setDropdown] = useState(false);

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
    <div className="flex h-14 relative justify-between items-center border-b border-b-gray-700 px-3">
      <div>
        <Link to={'/'}>
          <h2 className='text-2xl md:text-3xl text-blue-500'>freeLearningHub</h2>
        </Link>
      </div>
      <div className='flex justify-end gap-10 items-center'>
        <div className='hidden md:flex justify-end gap-5 items-center'>
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

        <div className='hidden md:block'>
          {isLoading ? (
            <div>
              <Spinner width={20} />
            </div>
          ) : (
            <>
              {user.isLoggedIn ? (
                <div className='bg-gray-900 rounded-full'>
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

        <div
          className='md:hidden p-2 hover:bg-gray-500/40 cursor-pointer rounded-full'
          onClick={() => setDropdown(!dropdown)}
        >
          <FaBarsStaggered size={22} />
        </div>
        
      </div>

      {dropdown && (
        <div className='absolute top-0 bg-slate-950 left-0 z-20 w-full h-screen'>
          <div className='relative w-full'>
            <div
              className='absolute top-3 right-3 p-2 hover:bg-gray-500/40 cursor-pointer rounded-full'
              onClick={() => setDropdown(!dropdown)}
            >
              <IoMdClose size={22} />
            </div>
            <div className='pt-20 flex flex-col w-full items-center gap-7'>
              <span className='text-gray-400 hover:text-gray-200 px-6 py-2 hover:bg-gray-500/40 rounded-full duration-200 cursor-pointer'>
                <Link onClick={() => setDropdown(!dropdown)} to={'/learn'}>Learn</Link>
              </span>
              <span className='text-gray-400 hover:text-gray-200 px-6 py-2 hover:bg-gray-500/40 rounded-full duration-200 cursor-pointer'>
                <Link onClick={() => setDropdown(!dropdown)} to={'/tools'}>Tools</Link>
              </span>
              <span className='text-gray-400 hover:text-gray-200 px-6 py-2 hover:bg-gray-500/40 rounded-full duration-200 cursor-pointer'>
                <a
                  href='https://github.com/developer-assets/Free-Learning-Hub'
                  target='_blank'
                  rel='noreferer'
                  onClick={() => setDropdown(!dropdown)}
                >Contribute</a>
              </span>
              <div>
                {isLoading ? (
                  <div>
                    <Spinner width={20} />
                  </div>
                ) : (
                  <>
                    {user.isLoggedIn ? (
                      <div className='border border-gray-700 py-2 px-6 rounded-md hover:bg-gray-900 duration-200 cursor-pointer'>
                        <Link to={'/profile'} onClick={() => setDropdown(!dropdown)}>
                          PROFILE
                        </Link>
                      </div>
                    ) : (
                      <div className='border border-gray-700 py-2 px-6 rounded-md hover:bg-gray-900 duration-200 cursor-pointer'>
                        <Link to={'/login'} onClick={() => setDropdown(!dropdown)}>
                          LOGIN
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Header;
