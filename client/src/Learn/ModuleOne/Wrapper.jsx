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

  const htmlCssKey = 'html-css';
  let htmlCssProgressCount = 0;
  if (userDataMain && userDataMain.userProgress && userDataMain.userProgress.progress[htmlCssKey] && userDataMain.userProgress.progress[htmlCssKey].progress) {
    const htmlCssProgress = userDataMain.userProgress.progress[htmlCssKey].progress;
    htmlCssProgressCount = Object.keys(htmlCssProgress).length;
  }
  const progressPercent = Math.round((htmlCssProgressCount / userDataMain.htmlCss) * 100);

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
          const htmlCssProgress = allProgress['html-css'] ? allProgress['html-css'].progress : {};
          setProgress(htmlCssProgress);
        }
        setIsLoading(false);
      }
    }
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
            {lessonId === 'image-embedding' && <Lesson progress={progress} id={6} perc={progressPercent} />}
            {lessonId === 'list-creation' && <Lesson progress={progress} id={7} perc={progressPercent} />}
            {lessonId === 'style-definition' && <Lesson progress={progress} id={8} perc={progressPercent} />}
            {lessonId === 'color-selection' && <Lesson progress={progress} id={9} perc={progressPercent} />}
            {lessonId === 'display-properties' && <Lesson progress={progress} id={10} perc={progressPercent} />}
            {lessonId === 'box-model-concept' && <Lesson progress={progress} id={11} perc={progressPercent} />}
            {lessonId === 'font-styling' && <Lesson progress={progress} id={12} perc={progressPercent} />}
            {lessonId === 'class-implementation' && <Lesson progress={progress} id={13} perc={progressPercent} />}
            {lessonId === 'selector-types' && <Lesson progress={progress} id={14} perc={progressPercent} />}
            {lessonId === 'pseudo-class-usage' && <Lesson progress={progress} id={15} perc={progressPercent} />}
            {lessonId === 'ui-library-integration' && <Lesson progress={progress} id={16} perc={progressPercent} />}
            {lessonId === 'grid-layout-design' && <Lesson progress={progress} id={17} perc={progressPercent} />}
            {lessonId === 'framework-introduction' && <Lesson progress={progress} id={18} perc={progressPercent} />}
            {lessonId === 'utility-classes' && <Lesson progress={progress} id={19} perc={progressPercent} />}
            {lessonId === 'responsive-design-tailwind' && <Lesson progress={progress} id={20} perc={progressPercent} />}
            {lessonId === 'component-styling' && <Lesson progress={progress} id={21} perc={progressPercent} />}
            {lessonId === 'table-designing' && <Lesson progress={progress} id={22} perc={progressPercent} />}
            {lessonId === 'iframe-embedding' && <Lesson progress={progress} id={23} perc={progressPercent} />}
            {lessonId === 'svg-graphics-integration' && <Lesson progress={progress} id={24} perc={progressPercent} />}
            {lessonId === 'video-embedding' && <Lesson progress={progress} id={25} perc={progressPercent} />}
            {lessonId === 'audio-playback' && <Lesson progress={progress} id={26} perc={progressPercent} />}
            {lessonId === 'responsive-design' && <Lesson progress={progress} id={27} perc={progressPercent} />}
            {lessonId === 'transition-effects' && <Lesson progress={progress} id={28} perc={progressPercent} />}
            {lessonId === 'media-query-implementation' && <Lesson progress={progress} id={29} perc={progressPercent} />}
            {lessonId === 'advanced-selector-usage' && <Lesson progress={progress} id={30} perc={progressPercent} />}
            {lessonId === 'filter-application' && <Lesson progress={progress} id={31} perc={progressPercent} />}
            {lessonId === 'animation-creation' && <Lesson progress={progress} id={32} perc={progressPercent} />}
            {lessonId === 'flexbox-mastery' && <Lesson progress={progress} id={33} perc={progressPercent} />}
            {lessonId === 'custom-variable-utilization' && <Lesson progress={progress} id={34} perc={progressPercent} />}
            {lessonId === '3d-transformation-techniques' && <Lesson progress={progress} id={35} perc={progressPercent} />}
            {lessonId === 'pseudo-element-utilization' && <Lesson progress={progress} id={36} perc={progressPercent} />}
        </Suspense>
      </div>

    </div>
  );
}

export default Wrapper;
