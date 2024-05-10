import React, { useState, useEffect, Suspense } from 'react';
import Quiz from '../../Components/Modules/Quiz';
import Subfooter from '../../Components/Modules/Subfooter';
import Loader from '../../Components/General/Loader';
import { TiTick } from 'react-icons/ti';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import toast from 'react-hot-toast';
import lessons from './Lessons.json';

// Import Quizes - *Use this method for now but we may need to optimize in future*
import QuizOne from './LessonOne/Quiz.json';
import QuizTwo from './LessonTwo/Quiz.json';
import QuizThree from './LessonThree/Quiz.json';

// Lazily import tutorials
const TutorialOne = React.lazy(() => import('./LessonOne/Tutorial'));
const TutorialTwo = React.lazy(() => import('./LessonTwo/Tutorial'));
const TutorialThree = React.lazy(() => import('./LessonThree/Tutorial'));

const Lesson = ({ progress, uid, isLoggedIn, id }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [progressTwo, setProgressTwo] = useState(progress);
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Get exact tutorial and fetch tutorial data
  const activeTutorial = lessons.find((lesson) => lesson.id === id);
  const level = Number(activeTutorial.level);
  const videoId = activeTutorial.videoID;

  useEffect(() => {
    setProgressTwo(progress);
  }, [progress]);

  useEffect(() => {
    if (progressTwo) {
      if (progress >= level) {
        setIsDone(true);
      }
    }
  }, [progressTwo]);
  
  const handleUpdateProgress = async () => {
    setIsLoading(true);
    const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/update';
    try {
      const response = await Axios.post(url, {
        uid,
        module: 'html-css',
        progress: level
      });

      if (response.status === 201) {
        toast.success('Progress updated successfully');
        setIsDone(true);
      } else {
        toast.error('Error updating progress');
      }
    } catch (err) {
      console.log(err);
      toast.error('Error updating progress');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className='w-full bg-gray-700 rounded-xl p-2 h-[60vh] max-h-96 flex items-center justify-center'>
        <iframe
          className='w-full rounded-md h-full'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='w-full h-10 sticky top-14 bg-gray-900 border-t border-b border-gray-700 mt-10 mb-6 flex justify-around'>
        <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>
          TUTORIAL
        </button>
        <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>
          QUIZ
        </button>
      </div>
      <div>

        {/* Load lessons */}
        {activeTab === 1 && (
          <Suspense fallback={<div>
            <Loader />
          </div>}>
            {id === 1 && <TutorialOne />}
            {id === 2 && <TutorialTwo />}
            {id === 3 && <TutorialThree />}
          </Suspense>
        )}
        
        {/* Load qustions */}
        {activeTab === 2 && (
          <Suspense fallback={<div>
            <Loader />
          </div>}>
            {id === 1 && <Quiz data={QuizOne} />}
            {id === 2 && <Quiz data={QuizTwo} />}
            {id === 3 && <Quiz data={QuizThree} />}
          </Suspense>
        )}

      </div>
      {isLoggedIn ? (
        isDone ? (
          <div className='text-green-500 mb-10 text-xl flex gap-2 items-center'>
            <TiTick className='text-green-500 border border-green-700 rounded-full p-[1px]' size={25} />
            <p>Already completed.</p>
          </div>
        ) : (
          <div onClick={handleUpdateProgress} className={isLoading ? 'text-blue-500 mb-10 text-xl flex gap-2 items-center cursor-not-allowed' : 'text-blue-500 mb-10 text-xl flex gap-2 items-center cursor-pointer'}>
            {isLoading ? <CgSpinnerTwoAlt className='text-gray-300 animate-spin' /> : <TiTick className='text-gray-300 border border-gray-700 rounded-full p-[1px]' size={25} />}
            <p>{isLoading ? 'Updating...' : 'Mark as done.'}</p>
          </div>
        )
      ) : (
        <p className='text-red-500 mb-10'>Login <span className='linkOne'><Link to={'/login'}>here</Link></span> to save progress.</p>
      )}
      <div>
        <Subfooter
          t1={activeTutorial.textOne}
          l1={activeTutorial.linkOne}
          t2={activeTutorial.textTwo}
          l2={activeTutorial.linkTwo}
          edit={activeTutorial.edit}
        />
      </div>
    </div>
  );
}

export default Lesson;
