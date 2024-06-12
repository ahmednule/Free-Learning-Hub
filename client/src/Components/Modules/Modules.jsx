import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getReduxUserData, updateProgressState } from '../../Redux/user.slice';
import { Post } from '../../Utilities/DataService';
import Allmodules from './Allmodules';
import Mymodules from './Mymodules';
import Spinner from '../General/Spinner';
import fetchParams from '../../Utilities/fetchParams';

const Modules = () => {
  const dispatch = useDispatch();
  const userDataMain = useSelector(getReduxUserData);

  const [progress, setProgress] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const hash = window.location.hash;
    const params = fetchParams(hash);
    if (Object.keys(params).length > 0 && params.tab) {
      if (params.tab === 'all-modules') setActiveTab(1);
      if (params.tab === 'registered') setActiveTab(2);
    }
  }, []);

  useEffect(() => {
    const getUserProgress = async () => {
      if (userDataMain.userData && userDataMain.isLoggedIn) {
        const apiUrl = '/api/learn/progress';
        const apiData = {
          uid: userDataMain.userData.uid,
        };
        const response = await Post(apiUrl, apiData);
        if (response.success) {
          setProgress(response.data);
          dispatch(updateProgressState({ userProgress: response.data }));
        }
      }
      setIsLoading(false);
    };

    getUserProgress();
  }, [dispatch, userDataMain.userData, userDataMain.isLoggedIn]);

  return (
    <div className='border border-primary rounded-md'>
      <div className='border-b border-primary sticky top-14 bg-primary-900 flex items-center font-semibold justify-start gap-5 px-2 rounded-t-md pt-5'>
        <div
          onClick={() => setActiveTab(1)}
          className={activeTab === 1 ? 'border-b-2 border-reds pb-2 px-2 cursor-pointer' : 'border-b-2 border-transparent pb-2 px-2 cursor-pointer'}
        >
          <span className='hover:bg-primary-600 pb-1 pt-3 px-1 duration-200 rounded'>ALL MODULES</span>
        </div>
        <div
          onClick={() => setActiveTab(2)}
          className={activeTab === 2 ? 'border-b-2 border-reds pb-2 px-2 cursor-pointer' : 'border-b-2 border-transparent pb-2 px-2 cursor-pointer'}
        >
          <span className='hover:bg-primary-600 pb-1 pt-3 px-1 duration-200 rounded'>REGISTERED</span>
        </div>
      </div>
      
      {!userDataMain.isLoggedIn && (
        <div className='bg-reds mx-2 mt-2 p-2 text-primary-900 text-center rounded'>
          <p>Login <Link to={'/login?redirect=/learn'} className='linkOne'>here</Link> to save your progress</p>
        </div>
      )}

      <div className='min-h-screen mt-4 px-2'>
        {isLoading ? (
          <div className='w-full flex justify-center'>
            <Spinner width={30} />
          </div>
        ) : (
          <>
            {activeTab === 1 && <Allmodules progress={progress.progress ? progress.progress : {}} />}
            {activeTab === 2 && <Mymodules progress={progress.progress ? progress.progress : {}} />}
          </>
        )}
      </div>
    </div>
  );
}

export default Modules;
