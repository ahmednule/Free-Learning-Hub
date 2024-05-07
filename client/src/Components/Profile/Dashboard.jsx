import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import placeHolderImage from '../../Images/userImage.jpg'
import { deleteUserCookie, fetchUserDataFromCookie } from '../../Helpers/handlecookie';
import Axios from 'axios';
import toast from 'react-hot-toast';

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
    <div className='w-full flex flex-col lg:flex-row gap-4'>
      <div className='w-[400px] mx-auto px-3 bg-gray-950 rounded-xl pb-8'>
        <img src={hasPhoto ? onlinePhotoURL : placeHolderImage} className='w-[320px] mx-auto mt-4 h-[250px] rounded-2xl object-cover' alt="User Profile Picture" />
        <p className='mt-5 pl-5 font-semibold text-2xl'> {userInfo.fullName} </p>
        <div className='mt-10 border-b border-gray-700 w-full'>
          <p className='pl-5 text-green-500'> {userInfo.username} </p>
        </div>
        <div className='mt-4 border-b border-gray-700 w-full'>
          <p className='pl-5'> {userInfo.email} </p>
        </div>
        
      </div>
      <div className='w-full'>
        <div className='w-full h-44 bg-gray-950 rounded-xl'>
        </div>
        <div className='w-full mt-5 h-44 bg-gray-950 rounded-xl'>

        </div>

      </div>
    </div>
  )
}

export default Dashboard