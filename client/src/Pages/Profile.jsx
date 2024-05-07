import Header from '../Components/General/Header'
import Footer from '../Components/General/Footer'
import { Link, useNavigate } from 'react-router-dom'
import Dashboard from '../Components/Profile/Dashboard'
import { useEffect, useState } from 'react'
import { fetchUserDataFromCookie } from '../Helpers/handlecookie'
import { MdSpaceDashboard, MdSupportAgent } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import Account from '../Components/Profile/Account'

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
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      <div className='pt-16'>
        <div className='border-b border-gray-700 py-3 pl-4'>
          <h2 className='text-xl md:text-2xl lg:text-4xl'>Welcome back.... </h2>
          <p className='mt-3 italic'>Pick up right where you left or pick a module to start learning from <Link className='linkOne' to={'/learn'}>here</Link>.</p>
        </div>
        <div className='flex'>
          <div className='hidden md:block flex-[0.25] min-h-screen'>
            <div onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'pt-4 pb-2 flex cursor-pointer justify-start items-center pl-2 bg-gray-800 border-b border-gray-700 gap-3' : 'pt-4 pb-2 flex cursor-pointer justify-start items-center pl-2 border-b border-gray-700 gap-3'}>
              <MdSpaceDashboard />
              <span>Dashboard</span>
            </div>
            <div onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'pt-4 pb-2 flex cursor-pointer justify-start items-center pl-2 bg-gray-800 border-b border-gray-700 gap-3' : 'pt-4 pb-2 flex cursor-pointer justify-start items-center pl-2 border-b border-gray-700 gap-3'}>
              <RiAccountPinCircleFill />
              <span>Account</span>
            </div>
            <div onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'pt-4 pb-2 flex cursor-pointer justify-start items-center pl-2 bg-gray-800 border-b border-gray-700 gap-3' : 'pt-4 pb-2 flex cursor-pointer justify-start items-center pl-2 border-b border-gray-700 gap-3'}>
              <MdSupportAgent />
              <span>Support</span>
            </div>

          </div>
          <div className='border-l border-gray-700 bg-gray-900 flex-1 md:flex-[0.75] p-5'>
            {activeTab === 1 && <Dashboard />}
            {activeTab === 2 && <Account />}
          </div>
        </div>

      </div>
      <div className='mt-32 px-3'>
        <Footer />
      </div>
    </div>
  )
}

export default Profile