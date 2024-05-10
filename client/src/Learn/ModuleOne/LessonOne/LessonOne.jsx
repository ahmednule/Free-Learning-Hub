import React, { useState, useEffect } from 'react';
import Tutorial from './Tutorial';
import Quiz from '../../../Components/Modules/Quiz';
import questions from './Quiz.json';
import Subfooter from '../../../Components/Modules/Subfooter';
import { TiTick } from 'react-icons/ti';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import toast from 'react-hot-toast'

const LessonOne = (props) => {
  const { progress, uid, isLoggedIn } = props;

  const level = 10;

  const [activeTab, setActiveTab] = useState(1);
  const [progressTwo, setProgressTwo] = useState(progress);
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProgressTwo(progress);
  }, [progress]);

  useEffect(() => {
    if (progressTwo) {
      // const progressValue = progressTwo['html-css'] ? progressTwo['html-css'].progress : 0;
      // if (progressValue >= 10) {
      //   setIsDone(true);
      // } else {
      //   setIsDone(false);
      // }
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

  const videoId = 'ScMzIvxBSi4';

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
        {activeTab === 1 && <Tutorial />}
        {activeTab === 2 && <Quiz data={questions} />}
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
          t1='ALL MODULES'
          l1='/learn'
          t2='Text Formating'
          l2='/learn/html-css/text-formating'
          edit='https://github.com/developer-assets/Free-Learning-Hub/tree/main/client/src/Learn/ModuleOne/LessonOne'
        />
      </div>
    </div>
  );
};

export default LessonOne;
