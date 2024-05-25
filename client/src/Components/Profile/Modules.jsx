import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReduxUserData, updateProgressState } from '../../Redux/user.slice';
import Axios from 'axios';
import Spinner from '../General/Spinner';

const Modules = () => {
  const dispatch = useDispatch();
  const userDataMain = useSelector(getReduxUserData);

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const getUserProgress = async () => {
      if (userDataMain.userData) {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/learn/progress`;

        try {
          const response = await Axios.post(url, { uid: userDataMain.userData.uid });
          setProgress(response.data);
          dispatch(updateProgressState({ userProgress: response.data }));
        } catch (err) {
          console.error('Error fetching user progress:', err);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    };

    getUserProgress();
  }, [userDataMain.userData, dispatch]);
  
  console.log(progress);
  console.log(userDataMain);

  return (
    <div className='w-full bg-gray-900 px-2 py-5 rounded-sm'>
      {isLoading ? (
        <div className='w-full flex justify-center'>
          <Spinner width={30} />
        </div>
      ) : (
        <div>
          <h3 className='text-xl md:text-2xl text-yellow-500'>In progress</h3>
          <div className='px-2'>

          </div>
          <h3 className='text-xl md:text-2xl text-green-500 mt-5'>Completed</h3>
          <div className='px-2'>

          </div>
        </div>
      )}
      
    </div>
  );
}

export default Modules;
