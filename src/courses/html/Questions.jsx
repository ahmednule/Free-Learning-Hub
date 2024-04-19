import React, { useState } from 'react';

const Questions = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [passedQuestions, setPassedQuestions] = useState([]);

  const handleAnswer = (choiceId) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.correct === choiceId;
    
    if (isCorrect) {
      setPassedQuestions([...passedQuestions, currentQuestion.id]);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
    } else {
      alert('You didn\'t pass. Please try again.');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setPassedQuestions([]);
  };

  const renderQuestion = () => {
    if (showResult) {
      return (
        <div>
          <h2>Congratulations!</h2>
          <p>You passed all questions!</p>
          <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
      );
    } else {
      const currentQuestion = questions[currentQuestionIndex];
      return (
        <div>
          <h2>{currentQuestion.question}</h2>
          <ul>
            {currentQuestion.choices.map(choice => (
              <li key={choice.id}>
                <button onClick={() => handleAnswer(choice.id)}>{choice.answer}</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      {renderQuestion()}
    </div>
  );
};

export default Questions;
