import React, { useState, useEffect, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReduxUserData, updateProgressState } from '../../Redux/user.slice';
import { Post } from '../../Utilities/DataService';
import Spinner from '../../Components/General/Spinner';
import Loader from '../../Components/General/Loader';

const Lesson = React.lazy(() => import('./Lesson'));

const Wrapper = () => {
  const userDataMain = useSelector(getReduxUserData);
  const dispatch = useDispatch();
  const location = useLocation();

  const [lessonId, setLessonId] = useState('');
  const [progress, setProgress] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const pythonKey = 'python';
  let pythonProgressCount = 0;
  if (userDataMain && userDataMain.userProgress && userDataMain.userProgress.progress[pythonKey] && userDataMain.userProgress.progress[pythonKey].progress) {
    const pythonProgress = userDataMain.userProgress.progress[pythonKey].progress;
    pythonProgressCount = Object.keys(pythonProgress).length;
  }
  const progressPercent = Math.round((pythonProgressCount / userDataMain.python) * 100);

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newLessonId = urlParts[urlParts.length - 1];
    setLessonId(newLessonId);
  }, [location]);

  useEffect(() => {
    const getUserData = async () => {
      if (userDataMain.userData) {
        const apiUrl = '/api/learn/progress';
        const apiData = {
          uid: userDataMain.userData.uid,
        };
        const response = await Post(apiUrl, apiData);
        if (response.success) {
          dispatch(updateProgressState({ userProgress: response.data }));
          const allProgress = response.data.progress;
          const pythonProgress = allProgress['python'] ? allProgress['python'].progress : {};
          setProgress(pythonProgress);
        }
        setIsLoading(false);
      }
    };

    getUserData();
  }, [userDataMain.userData, dispatch]);

  if (isLoading) {
    return (
      <div className='w-full flex justify-center mt-5 min-h-screen'>
        <Spinner width={30} />
      </div>
    );
  }

  return (
    <div className='pt-5'>

      {!userDataMain.isLoggedIn && (
        <div className='bg-reds-400 mx-2 p-2 text-gray-950 text-center rounded max-w-3xl md:mx-auto'>
          <p>Login <Link to={'/login'} className='linkOne'>here</Link> to save your progress</p>
        </div>
      )}

      <div className='px-2 w-full max-w-3xl mx-auto'>
        <Suspense className="min-h-screen" fallback={<div>
            <Loader />
          </div>}>
            {lessonId === 'basic-syntax' && <Lesson progress={progress}  id={1} perc={progressPercent} />}
            {lessonId === 'data-types' && <Lesson progress={progress} id={2} perc={progressPercent} />}
        </Suspense>
      </div>

    </div>
  );
}

export default Wrapper;
