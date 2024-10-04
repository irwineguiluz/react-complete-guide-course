import { useCallback, useState } from 'react';

import Question from './Question.jsx';
import Summary from './Summary.jsx';

import QUESTIONS from '../questions.js';

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

  const handleSkipQuestion = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizFinished) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        onSelectAnswer={handleSelectAnswer}
        onSkipQuestion={handleSkipQuestion}
        index={activeQuestionIndex}
        key={activeQuestionIndex}
      />
    </div>
  );
}
