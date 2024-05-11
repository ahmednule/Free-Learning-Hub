import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import placeHolderImage from '../../Images/userImage.jpg'
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie';
import { CiUser } from 'react-icons/ci';
import { FaUserCog } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [hasPhoto, setHasPhoto] = useState(false);
  const [onlinePhotoURL, setOnlinePhotoURL] = useState('');
  
  useEffect(() => {
    const userData = fetchUserDataFromCookie();
    if (!userData) {
      navigate('/login');
    } else {
      setUserInfo(userData);
      if (userData.photoURL !== 'newUser.jpg') {
        setHasPhoto(true);
      }
      setOnlinePhotoURL(userData.photoURL);
    }
    
  }, []);

  return (
    <div className='w-full flex justify-center'>
      <div className='rounded-xl bg-gray-950 p-2'>

        <div className='h-64 relative w-[360px] rounded-t rounded-[80%] bg-gradient-to-br from-blue-600 to-cyan-600'>
          <div className='absolute bottom-0 left-0 w-full'>
            <img src={hasPhoto ? onlinePhotoURL : placeHolderImage} alt="User Profile Picture" className='rounded-full w-36 mx-auto translate-y-14 border border-gray-300 h-36 object-cover' />
          </div>
        </div>

        <div className='mt-28 mb-10 text-xl flex flex-col gap-3'>
          <div className='flex justify-start items-center pl-2 gap-5 border-b border-gray-700 py-3'>
            <CiUser size={30} />
            <p>{userInfo.fullName}</p>
          </div>
          <div className='flex justify-start items-center pl-2 gap-5 border-b border-gray-700 py-3'>
            <FaUserCog size={30} />
            <p>{userInfo.username}</p>
          </div>
          <div className='flex justify-start items-center pl-2 gap-5 border-b border-gray-700 py-3'>
            <MdOutlineEmail size={30} />
            <p>{userInfo.email}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
