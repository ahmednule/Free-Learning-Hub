import { useEffect, useState } from 'react';
import Allmodules from './Allmodules';
import Mymodules from './Mymodules';
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie';
import Axios from 'axios';

const Modules = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState({});
  const [uid, setUid] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const userData = fetchUserDataFromCookie();
      const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/progress';
      let userId = '';

      if (userData) {
        setIsLoggedIn(true);
        setUid(userData.uid);
        userId = userData.uid;
        try {
          const response = await Axios.post(url, { uid: userId } );
          setProgress(response.data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      <div className='w-full h-10 sticky top-14 bg-gray-900 border-t border-b border-gray-700 mt-10 flex justify-around'>
        <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>ALL MODULES</button>
        <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>MY MODULES</button>
      </div>

      {!isLoggedIn && (
        <div className='w-full h-6 bg-red-500 rounded'>
          <p className='text-center'>Signin to save progress</p>
        </div>
      )}
      
      <div className='mt-6'>
        {activeTab === 1 && <Allmodules progress={progress} />}
        {activeTab === 2 && <Mymodules progress={progress} />}
      </div>
    </div>
  );
}

export default Modules;
