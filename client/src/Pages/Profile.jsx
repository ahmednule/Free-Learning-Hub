import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard from '../Components/Profile/Dashboard'
import Account from '../Components/Profile/Account'
import { fetchUserDataFromCookie } from '../Helpers/handlecookie'

const Profile = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const [activeTab, setActiveTab] = useState(1);
  
  useEffect(() => {
    const userData = fetchUserDataFromCookie();
    if (!userData) {
      navigate('/login');
    } else {
      setUserInfo(userData);
    }
  }, []);

  return (
    <div>
      <div>
        <div className='border-b border-gray-700 py-3 pl-4'>
          <h2 className='text-xl md:text-2xl lg:text-4xl'>Welcome back.... </h2>
          <p className='mt-3 italic'>Pick up right where you left or pick a module to start learning from <Link className='linkOne' to={'/learn'}>here</Link>.</p>
        </div>

        <div className='h-10 w-full border-b sticky z-10 top-14 bg-gray-950 border-gray-700 flex items-center justify-evenly'>
          <div onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'bg-gray-800 cursor-pointer w-full h-full' : 'w-full cursor-pointer h-full'}>
            <button className='pt-[6px] w-full mx-auto font-semibold'>DASHBOARD</button>
          </div>
          <div onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'bg-gray-800 cursor-pointer w-full h-full' : 'w-full cursor-pointer h-full'}>
            <button className='pt-[6px] w-full mx-auto font-semibold'>ACCOUNT</button>
          </div>
        </div>

        <div className='w-full bg-gray-800 pt-5 pb-20'>
          {activeTab === 1 && <Dashboard data={userInfo} />}
          {activeTab === 2 && <Account data={userInfo} />}
        </div>

      </div>
    </div>
  );
}

export default Profile;
