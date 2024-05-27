import React, { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import Subfooter from '../../Components/Modules/Subfooter';
import { TiTick } from 'react-icons/ti';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import toast from 'react-hot-toast';
import lessons from './Lessons.json';
import { getReduxUserData, updateProgressState } from '../../Redux/user.slice';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Components/General/Spinner';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Lazily import tutorials
const TutorialOne = React.lazy(() => import('./Lesson1/Tutorial'));

const Lesson = ({ progress, id, perc }) => {
  const dispatch = useDispatch();
  const userDataMain = useSelector(getReduxUserData);

  const [progressTwo, setProgressTwo] = useState(progress);
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
    const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/progress';

    if (userDataMain.userData) {
      try {
        const response = await Axios.post(url, { uid: userDataMain.userData.uid });
        dispatch(updateProgressState({ userProgress: response.data }));
      } catch (err) {
        console.log(err);
      }
    }
  }
  
  const handleUpdateProgress = async () => {
    setIsLoading(true);
    const url = import.meta.env.VITE_BACKEND_URL + '/api/learn/update';
    try {
      const response = await Axios.post(url, {
        uid: userDataMain.userData.uid,
        module: 'html-css',
        progress: level
      });

      if (response.status === 201) {
        toast.success('Progress updated successfully');
        setIsDone(true);
        fetchProgress();
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
          <h3 className='text-2xl font-semibold md:text-3xl'>Python Programming</h3>
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
          {id === 1 && <TutorialOne />}
        </Suspense>
      </div>

      {userDataMain.isLoggedIn ? (
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

Lesson.propTypes = {
  progress: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ]).isRequired,
  id: PropTypes.number.isRequired,
  perc: PropTypes.number.isRequired,
};

export default Lesson;
