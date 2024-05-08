import React, { useState } from 'react'
import Tutorial from './Tutorial';
import Quiz from '../../../Components/Modules/Quiz';
import questions from './Quiz.json'

const LessonOne = () => {
  const [activeTab, setActiveTab] = useState(1);

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
      <div className='w-full h-10 sticky top-12 bg-gray-900 border-t border-b border-gray-700 mt-10 mb-6 flex justify-around'>
        <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>TUTORIAL</button>
        <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'h-full w-full bg-gray-800' : 'h-full w-full'}>QUIZ</button>
      </div>
      <div>
        {activeTab === 1 && <Tutorial />}
        {activeTab === 2 && <Quiz data={questions} />}
      </div>
    </div>
  )
}

export default LessonOne