import PropTypes from 'prop-types';
import React, { useState, useEffect, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from 'react-icons/ti';
import { IoVideocam } from 'react-icons/io5';
import { MdQuiz } from 'react-icons/md';
import { FaCodeMerge } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { getReduxUserData, updateProgressState } from '../../Redux/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Post } from '../../Utilities/DataService';
import Subfooter from '../../Components/Modules/Subfooter';
import toast from 'react-hot-toast';
import lessons from './Lessons.json';
import Quickquiz from './Quickquiz';
import Youtubevideo from './Youtubevideo';
import Spinner from '../../Components/General/Spinner';
import 'react-circular-progressbar/dist/styles.css';

const Tutorial1 = React.lazy(() => import('./Lessons/Tutorial1'));
const Tutorial2 = React.lazy(() => import('./Lessons/Tutorial2'));
const Tutorial3 = React.lazy(() => import('./Lessons/Tutorial3'));
const Tutorial4 = React.lazy(() => import('./Lessons/Tutorial4'));
const Tutorial5 = React.lazy(() => import('./Lessons/Tutorial5'));
const Tutorial6 = React.lazy(() => import('./Lessons/Tutorial6'));
const Tutorial7 = React.lazy(() => import('./Lessons/Tutorial7'));
const Tutorial8 = React.lazy(() => import('./Lessons/Tutorial8'));
const Tutorial9 = React.lazy(() => import('./Lessons/Tutorial9'));
const Tutorial10 = React.lazy(() => import('./Lessons/Tutorial10'));
const Tutorial11 = React.lazy(() => import('./Lessons/Tutorial11'));
const Tutorial12 = React.lazy(() => import('./Lessons/Tutorial12'));
const Tutorial13 = React.lazy(() => import('./Lessons/Tutorial13'));
const Tutorial14 = React.lazy(() => import('./Lessons/Tutorial14'));
const Tutorial15 = React.lazy(() => import('./Lessons/Tutorial15'));
const Tutorial16 = React.lazy(() => import('./Lessons/Tutorial16'));
const Tutorial17 = React.lazy(() => import('./Lessons/Tutorial17'));
const Tutorial18 = React.lazy(() => import('./Lessons/Tutorial18'));
const Tutorial19 = React.lazy(() => import('./Lessons/Tutorial19'));
const Tutorial20 = React.lazy(() => import('./Lessons/Tutorial20'));
const Tutorial21 = React.lazy(() => import('./Lessons/Tutorial21'));
const Tutorial22 = React.lazy(() => import('./Lessons/Tutorial22'));
const Tutorial23 = React.lazy(() => import('./Lessons/Tutorial23'));
const Tutorial24 = React.lazy(() => import('./Lessons/Tutorial24'));
const Tutorial25 = React.lazy(() => import('./Lesson25/Tutorial'));
const Tutorial26 = React.lazy(() => import('./Lesson26/Tutorial'));
const Tutorial27 = React.lazy(() => import('./Lesson27/Tutorial'));
const Tutorial28 = React.lazy(() => import('./Lesson28/Tutorial'));
const Tutorial29 = React.lazy(() => import('./Lesson29/Tutorial'));
const Tutorial30 = React.lazy(() => import('./Lesson30/Tutorial'));
const Tutorial31 = React.lazy(() => import('./Lesson31/Tutorial'));
const Tutorial32 = React.lazy(() => import('./Lesson32/Tutorial'));
const Tutorial33 = React.lazy(() => import('./Lesson33/Tutorial'));
const Tutorial34 = React.lazy(() => import('./Lesson34/Tutorial'));
const Tutorial35 = React.lazy(() => import('./Lesson35/Tutorial'));
const Tutorial36 = React.lazy(() => import('./Lesson36/Tutorial'));

const Lesson = ({ progress, id, perc }) => {
  const dispatch = useDispatch();
  const userDataMain = useSelector(getReduxUserData);

  const [progressTwo, setProgressTwo] = useState(progress);
  const [sudoPopup, setSudoPopup] = useState(false);
  const [popupData, setPopupData] = useState(1);
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const activeTutorial = lessons.find((lesson) => lesson.id === id);
  const level = Number(activeTutorial.id);

  useEffect(() => {
    setProgressTwo(progress);
  }, [progress]);

  useEffect(() => {
    if (progressTwo) {
      let temp = progress[String(level)];
      if (temp && temp.done) {
        setIsDone(true);
      }
    }
  }, [progressTwo, level, progress]);

  const fetchProgress = async () => {
    if (userDataMain.userData) {
      const apiUrl = '/api/learn/progress';
      const apiData = {
        uid: userDataMain.userData.uid,
      };
      const response = await Post(apiUrl, apiData);
      if (response.success) {
        dispatch(updateProgressState({ userProgress: response.data }));
      }
    }
  }
  
  const handleUpdateProgress = async () => {
    setIsLoading(true);
    const apiUrl = '/api/learn/update';
    const apiData = {
      uid: userDataMain.userData.uid,
      module: 'html-css',
      progress: level,
    };
    const response = await Post(apiUrl, apiData);
    if (response.success) {
      toast.success(response.message);
      setIsDone(true);
      fetchProgress();
    } else {
      toast.error(response.message);
    }
    setIsLoading(false);
  };

  return (
    <div>

      <div className='px-2 w-full max-w-3xl mx-auto mt-5 flex flex-col-reverse sm:flex-row items-center h-full gap-10'>
        <div className="w-32 h-32">
          <CircularProgressbar
            value={perc}
            text={`${perc}%`}
            styles={{
              path: {
                stroke: `rgba(214, 73, 99, 1)`,
                strokeLinecap: 'round',
              },
              trail: {
                stroke: '#4a5568',
              },
              text: {
                fill: '#3B82F6',
                fontSize: '24px',
              },
            }}
          />
        </div>
        <div>
          <h3 className='text-2xl font-semibold md:text-3xl'>HTML & CSS (Web Development)</h3>
          {userDataMain.isLoggedIn ? (
            isDone ? (
              <p className='mt-3 text-green-500'>Tutorial {id} - Complete</p>
            ) : (
              <p className='mt-3'>Tutorial {id} - Incomplete</p>
            )
          ) : (
            <p className='mt-3 text-reds-400'>Tutorial {id} - Login</p>
          )}
        </div>
      </div>

      <div className='mr-3 mt-16'>
        <Suspense fallback={<div className='w-full flex justify-center min-h-screen'>
          <Spinner width={40} />
        </div>}>
          {id === 1 && <Tutorial1 />}
          {id === 2 && <Tutorial2 />}
          {id === 3 && <Tutorial3 />}
          {id === 4 && <Tutorial4 />}
          {id === 5 && <Tutorial5 />}
          {id === 6 && <Tutorial6 />}
          {id === 7 && <Tutorial7 />}
          {id === 8 && <Tutorial8 />}
          {id === 9 && <Tutorial9 />}
          {id === 10 && <Tutorial10 />}
          {id === 11 && <Tutorial11 />}
          {id === 12 && <Tutorial12 />}
          {id === 13 && <Tutorial13 />}
          {id === 14 && <Tutorial14 />}
          {id === 15 && <Tutorial15 />}
          {id === 16 && <Tutorial16 />}
          {id === 17 && <Tutorial17 />}
          {id === 18 && <Tutorial18 />}
          {id === 19 && <Tutorial19 />}
          {id === 20 && <Tutorial20 />}
          {id === 21 && <Tutorial21 />}
          {id === 22 && <Tutorial22 />}
          {id === 23 && <Tutorial23 />}
          {id === 24 && <Tutorial24 />}
          {id === 25 && <Tutorial25 />}
          {id === 26 && <Tutorial26 />}
          {id === 27 && <Tutorial27 />}
          {id === 28 && <Tutorial28 />}
          {id === 29 && <Tutorial29 />}
          {id === 30 && <Tutorial30 />}
          {id === 31 && <Tutorial31 />}
          {id === 32 && <Tutorial32 />}
          {id === 33 && <Tutorial33 />}
          {id === 34 && <Tutorial34 />}
          {id === 35 && <Tutorial35 />}
          {id === 36 && <Tutorial36 />}
        </Suspense>
      </div>

      {sudoPopup && (
        <div className='bg-gray-950 h-screen fixed w-screen z-50 top-0 left-0 overflow-hidden'>
          <div className='relative w-full'>
            <div
              className='absolute top-3 right-3 p-2 hover:bg-gray-500/40 cursor-pointer rounded-full'
              onClick={() => setSudoPopup(!sudoPopup)}
            >
              <IoMdClose size={22} />
            </div>
            {popupData === 1 && <Youtubevideo />}
            {popupData === 2 && <Quickquiz />}
          </div>
        </div>
      )}

      <div
        className='flex items-center text-blue-500 gap-2 mb-5 w-fit cursor-pointer'
        onClick={() => {setSudoPopup(!sudoPopup); setPopupData(1)}}
      >
        <IoVideocam className='text-gray-300' size={20} />
        <p>Watch video.</p>
      </div>

      <div
        className='flex items-center text-blue-500 gap-2 mb-5 w-fit cursor-pointer'
        onClick={() => {setSudoPopup(!sudoPopup); setPopupData(2)}}
      >
        <MdQuiz className='text-gray-300' size={20} />
        <p>Take quiz.</p>
      </div>

      {userDataMain.isLoggedIn ? (
        isDone ? (
          <div className='text-green-500 w-fit flex gap-2 items-center'>
            <TiTick className='text-green-500 border border-green-700 rounded-full p-[1px]' size={20} />
            <p>Already completed.</p>
          </div>
        ) : (
          <div onClick={handleUpdateProgress} className={isLoading ? 'text-blue-500 w-fit flex gap-2 items-center cursor-not-allowed' : 'text-blue-500 w-fit flex gap-2 items-center cursor-pointer'}>
            {isLoading ? <CgSpinnerTwoAlt className='text-gray-300 animate-spin' size={20} /> : <TiTick className='text-gray-300 border border-gray-700 rounded-full p-[1px]' size={20} />}
            <p>{isLoading ? 'Updating...' : 'Mark as done.'}</p>
          </div>
        )
      ) : (
        <p className='text-red-500 w-fit'>Login <span className='linkOne'><Link to={'/login'}>here</Link></span> to save progress.</p>
      )}

      <div className='flex items-center text-blue-500 gap-2 mb-10 mt-5 w-fit cursor-pointer'>
        <FaCodeMerge className='text-gray-300' size={20} />
        <p><Link to={'/profile'}>See projects.</Link></p>
      </div>

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

Lesson.propTypes = {
  progress: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]).isRequired,
  id: PropTypes.number.isRequired,
  perc: PropTypes.number.isRequired,
};

export default Lesson;
