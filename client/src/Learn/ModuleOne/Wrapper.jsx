import React, { useState, useEffect, Suspense } from 'react'
import Sidebar from '../../Components/Lessons/Sidebar'
import htmlTopics from '../../Data/HtmlTopics.json'
import { useLocation } from 'react-router-dom'
import Loader from '../../Components/General/Loader'
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie'
import Axios from 'axios'

const Lesson = React.lazy(() => import('./Lesson'));

const Wrapper = () => {
  const [lessonId, setLessonId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState({});
  const [uid, setUid] = useState("");

  const location = useLocation();
  const total = 50;

  useEffect(() => {
    const urlParts = location.pathname.split('/');
    const newLessonId = urlParts[urlParts.length - 1];
    setLessonId(newLessonId);
  }, [location]);

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
          const response = await Axios.post(url, { uid: userId });
          const responseData = response.data;
          const htmlCssProgress = responseData['html-css'] ? responseData['html-css'].progress : 0;
          // Update the progress state with the received data
          setProgress(htmlCssProgress);
        } catch (err) {
          console.log(err);
        }
      }
    };

    getUserData();
  }, []);

  return (
    <div>
      {/* Main info */}
      <div className='pr-3'>
        <div className='grid md:grid-cols-6 gap-5 min-h-screen w-full'>
          <div className='hidden md:block col-span-2'>
            <div className='overflow-y-scroll h-fit w-72 sticky top-16'>
              <Sidebar data={htmlTopics} />
            </div>
          </div>
          <div className='md:pl-10 lg:pl-0 pt-5 col-span-4 md:ml-4'>
            {!isLoggedIn && (
              <div className='w-full mb-6 h-6 bg-red-500 rounded'>
                <p className='text-center'>Signin to save progress</p>
              </div>
            )}
            {/* Render the lesson component based on the current lesson ID */}
            <Suspense className="min-h-screen" fallback={<div>
              <Loader />
            </div>}>

              {lessonId === 'basic-elements' && <Lesson progress={progress} uid={uid} isLoggedIn={isLoggedIn} id={1} />}
              {lessonId === 'text-formating' && <Lesson progress={progress} uid={uid} isLoggedIn={isLoggedIn} id={2} />}
              {lessonId === 'html-tags-attributes' && <Lesson progress={progress} uid={uid} isLoggedIn={isLoggedIn} id={3} />}
              {lessonId === 'semantic-html' && <Lesson progress={progress} uid={uid} isLoggedIn={isLoggedIn} id={4} />}
              {lessonId === 'link-creation' && <Lesson progress={progress} uid={uid} isLoggedIn={isLoggedIn} id={5} />}

            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
