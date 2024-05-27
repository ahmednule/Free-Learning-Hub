import React, { useState, useEffect, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Loader from '../../Components/General/Loader';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getReduxUserData, updateProgressState } from '../../Redux/user.slice';
import Spinner from '../../Components/General/Spinner';

const Lesson = React.lazy(() => import('./Lesson'));

const Wrapper = () => {
  const userDataMain = useSelector(getReduxUserData);
  const dispatch = useDispatch();
  const location = useLocation();

  const [lessonId, setLessonId] = useState('');
  const [progress, setProgress] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let pythonProgress = userDataMain.userProgress['python'] ? userDataMain.userProgress['python'].progress : {};
  pythonProgress = Object.keys(pythonProgress).length;
  const progressPercent = Math.round(pythonProgress / userDataMain.python * 100);

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newLessonId = urlParts[urlParts.length - 1];
    setLessonId(newLessonId);
  }, [location]);

  useEffect(() => {
    const getUserData = async () => {
      const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/progress';

      if (userDataMain.userData) {
        try {
          const response = await Axios.post(url, { uid: userDataMain.userData.uid });
          const responseData = response.data;
          dispatch(updateProgressState({ userProgress: response.data }));
          const pythonProgress = responseData['python'] ? responseData['python'].progress : {};
          setProgress(pythonProgress);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      } else {
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
        </Suspense>
      </div>

    </div>
  );
}

export default Wrapper;
