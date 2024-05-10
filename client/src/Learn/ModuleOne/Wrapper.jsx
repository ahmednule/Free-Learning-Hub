import React, { useState, useEffect, Suspense } from 'react'
import Header from '../../Components/General/Header'
import Sidebar from '../../Components/Lessons/Sidebar'
import htmlTopics from '../../Data/HtmlTopics.json'
import { useLocation } from 'react-router-dom'
import { LuLoader2 } from "react-icons/lu";
import Footer from '../../Components/General/Footer'
import { fetchUserDataFromCookie } from '../../Helpers/handlecookie'
import Axios from 'axios'

const LessonOne = React.lazy(() => import('./LessonOne/LessonOne'));
const LessonTwo = React.lazy(() => import('./LessonTwo/LessonTwo'));
const LessonThree = React.lazy(() => import('./LessonThree/LessonThree'));

const Wrapper = () => {
  const [lessonId, setLessonId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState({});
  const [uid, setUid] = useState("");

  const location = useLocation();
  const total = 20;

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
      <div className="fixed w-full container mx-auto z-10 backdrop-blur-2xl">
        <Header />
      </div>
      {/* Main info */}
      <div className='pr-3'>
        <div className='grid md:grid-cols-6 gap-5 pt-16 min-h-screen w-full'>
          <div className='hidden md:block col-span-2'>
            <div className='fixed overflow-y-scroll h-full'>
              <Sidebar data={htmlTopics} />
            </div>
          </div>
          <div className='pl-2 md:pl-10 lg:pl-0 pt-5 col-span-4'>
            {!isLoggedIn && (
              <div className='w-full mb-6 h-6 bg-red-500 rounded'>
                <p className='text-center'>Signin to save progress</p>
              </div>
            )}
            {/* Render the lesson component based on the current lesson ID */}
            <Suspense className="min-h-screen" fallback={<div className='mx-auto mt-28'>
              <div className="flex-col gap-4 w-full flex items-center justify-center">
                <LuLoader2 size={40} className='animate-spin' />
              </div>
            </div>}>
              {lessonId === 'basic-elements' && <LessonOne progress={progress} uid={uid} isLoggedIn={isLoggedIn} />}
              {lessonId === 'text-formating' && <LessonTwo progress={progress} uid={uid} isLoggedIn={isLoggedIn} />}
              {lessonId === 'html-tags-attributes' && <LessonThree progress={progress} uid={uid} isLoggedIn={isLoggedIn} />}
            </Suspense>
            <div className='mt-32'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wrapper
