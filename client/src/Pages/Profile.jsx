import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Components/Profile/Dashboard';
import Logout from '../Components/Profile/Logout';
import { useSelector } from 'react-redux';
import { getReduxUserData } from '../Redux/user.slice';
import { RiDashboardFill } from 'react-icons/ri';
import { PiBookOpenTextFill } from 'react-icons/pi';
import { FaCodeMerge, FaGraduationCap, FaAward, FaAngleDown } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { MdContactSupport } from 'react-icons/md';
import { LuLogOut } from 'react-icons/lu';
import Modules from '../Components/Profile/Modules';

const Profile = () => {
  const userDataMain = useSelector(getReduxUserData);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(1);
  const [dropdown, setDropdown] = useState(false);
  
  useEffect(() => {
    if (!userDataMain.isLoggedIn) {
      navigate('/login');
    }
  }, [userDataMain, navigate]);

  const profNavs = [
    {
      id: 1,
      name: "Dashboard",
      icon: <RiDashboardFill size={24} />,
    },
    {
      id: 2,
      name: "My Modules",
      icon: <PiBookOpenTextFill size={24} />,
    },
    {
      id: 3,
      name: "My Projects",
      icon: <FaCodeMerge size={24} />,
    },
    {
      id: 4,
      name: "Certifications",
      icon: <FaGraduationCap size={24} />,
    },
    {
      id: 5,
      name: "My Badges",
      icon: <FaAward size={24} />,
    },
    {
      id: 6,
      name: "Customize",
      icon: <FaRegEdit size={24} />,
    },
    {
      id: 7,
      name: "Notifications",
      icon: <IoIosNotifications size={26} />,
    },
    {
      id: 8,
      name: "Support",
      icon: <MdContactSupport size={24} />,
    },
    {
      id: 9,
      name: "Logout",
      icon: <LuLogOut size={24} />,
    }
  ];

  return (
    <div className='flex justify-start gap-10 pt-5'>

      <div className='hidden bg-gray-900 rounded w-64 h-fit sticky px-2 top-20 py-5 md:flex flex-col gap-3'>
        {profNavs.map((nav) => {
          return (
            <div
              key={nav.id}
              onClick={() => setActiveTab(nav.id)}
              className={activeTab === nav.id ? 'flex gap-3 bg-gray-500/40 hover:bg-gray-500/55 py-2 px-3 duration-200 rounded-md items-center cursor-pointer' : 'flex hover:bg-gray-500/20 duration-200 py-2 px-3 rounded-md gap-3 items-center cursor-pointer'}
            >
              {nav.icon}
              <span>{nav.name}</span>
            </div>
          )
        })}
      </div>

      <div className='w-full pb-20'>
        <div className='md:hidden bg-gray-900 mb-4 p-2 sticky top-14 rounded-sm'>
          <div
            className='flex justify-around items-center cursor-pointer'
            onClick={() => setDropdown(!dropdown)}
          >
            <p className='font-semibold'>OPTIONS</p>
            <FaAngleDown
              size={22}
              className={dropdown ? 'text-gray-300 rotate-180' : 'text-gray-300'}
            />
          </div>
          {dropdown && (
            <div className='pt-5 flex flex-col gap-2'>
              {profNavs.map((nav) => {
                return (
                  <div
                    key={nav.id}
                    onClick={() => { setActiveTab(nav.id); setDropdown(!dropdown)}}
                    className={activeTab === nav.id ? 'flex gap-3 bg-gray-500/40 hover:bg-gray-500/55 py-2 px-3 duration-200 rounded-md items-center cursor-pointer' : 'flex hover:bg-gray-500/20 duration-200 py-2 px-3 rounded-md gap-3 items-center cursor-pointer'}
                  >
                    {nav.icon}
                    <span>{nav.name}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {activeTab === 1 && <Dashboard />}
        {activeTab === 2 && <Modules />}
        {activeTab === 9 && <Logout />}
      </div>

    </div>
  );
}

export default Profile;
