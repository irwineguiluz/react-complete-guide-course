import { useCallback, useState } from 'react';

import Question from './Question.jsx';

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers(prevUserAnswers => {
        return [...prevUserAnswers, selectedAnswer];
      });
    },
    []
  );

  const handleSkipQuestion = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (isQuizFinished) {
    return (
      <div id="summary">
        <h2>Quiz Completed!</h2>
        <img src={quizCompleteImg} alt="A cup" />
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        onSelectAnswer={handleSelectAnswer}
        index={activeQuestionIndex}
        key={activeQuestionIndex}
      />
    </div>
  );
}
