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

  let htmlCssProgress = userDataMain.userProgress['html-css'] ? userDataMain.userProgress['html-css'].progress : 0;
  htmlCssProgress = Object.keys(htmlCssProgress).length;
  const progressPercent = Math.round(htmlCssProgress / userDataMain.htmlCss * 100);

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
          const htmlCssProgress = responseData['html-css'] ? responseData['html-css'].progress : 0;
          setProgress(htmlCssProgress);
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
            {lessonId === 'basic-elements' && <Lesson progress={progress}  id={1} perc={progressPercent} />}
            {lessonId === 'text-formating' && <Lesson progress={progress} id={2} perc={progressPercent} />}
            {lessonId === 'html-tags-attributes' && <Lesson progress={progress} id={3} perc={progressPercent} />}
            {lessonId === 'semantic-html' && <Lesson progress={progress} id={4} perc={progressPercent} />}
            {lessonId === 'link-creation' && <Lesson progress={progress} id={5} perc={progressPercent} />}
        </Suspense>
      </div>

    </div>
  );
}

export default Wrapper;
