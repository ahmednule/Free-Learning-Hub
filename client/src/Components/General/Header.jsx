import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className="flex h-14 justify-between items-center border-b border-b-gray-700 px-3">
        <div>
          <Link to={'/'}>
            <img src="./logo.webp" alt="Free Learning Hub Logo" className="h-10 w-fit" />
          </Link>
        </div>
        <div>
          {
            isLoggedIn ? (
                <p>Profile Placeholder</p>
            ) : (
              <div className='border border-gray-700 py-1 px-6 rounded-md hover:bg-gray-900 duration-200 cursor-pointer'>
                <Link to={'/login'} >
                  LOGIN
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header