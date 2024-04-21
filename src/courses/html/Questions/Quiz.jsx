import React, { useState } from 'react';

const Quiz = ({ data }) => {
  const [progress, setProgress] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCorrectMessage, setShowCorrectMessage] = useState(false);
  const [showWrongMessage, setShowWrongMessage] = useState(false);

  const totalQuestions = data.length;

  const handleAnswerClick = (choiceIndex) => {
    if (choiceIndex === data[currentQuestion].correct) {
      setShowCorrectMessage(true);
      setTimeout(() => {
        setShowCorrectMessage(false);
        setProgress((prevProgress) => prevProgress + (100 / totalQuestions));
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }, 1000);
    } else {
      setShowWrongMessage(true);
      setTimeout(() => {
        setShowWrongMessage(false);
      }, 1000);
    }
  };

  return (
    <div className='py-4'>
      <div className='w-[95%] rounded mx-auto'>
        {/* Progress Bar */}
        <div className='w-full border border-gray-500 rounded-md'>
          <div className='h-full rounded-md duration-500 bg-green-500' style={{ width: `${progress}%` }}>
            <p className='pl-2 text-center'>{Math.round(progress)}%</p>
          </div>
        </div>
        
        {/* Questions */}
        <div className='py-4 px-4'>
          {currentQuestion < totalQuestions ? (
            <div>
              <h2 className='text-xl font-semibold mb-4'>{data[currentQuestion].question}</h2>
              <div>
                {data[currentQuestion].choices.map((choice) => (
                  <div key={choice.id} className='mb-2'>
                    <button
                      className='bg-blue-500 hover:bg-blue-700 text-white dark:text-black font-bold py-2 px-4 rounded'
                      onClick={() => handleAnswerClick(choice.id)}
                    >
                      {choice.answer}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className='text-xl font-semibold text-center'>Quiz Completed!</p>
          )}
        </div>
      </div>
      {/* Correct and Wrong Messages */}
      {showCorrectMessage && (
        <div className='bg-green-200 text-green-800 mx-4 p-2 text-center mt-2'>
          <p>Correct! Moving to the next question...</p>
        </div>
      )}
      {showWrongMessage && (
        <div className='bg-red-200 text-red-800 mx-4 p-2 text-center mt-2'>
          <p>Oops! Try again.</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
