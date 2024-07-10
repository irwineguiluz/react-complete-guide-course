import { useCallback, useState } from 'react';

import Question from './Question.jsx';

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState('');

  const activeQuestionIndex =
    answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const isQuizFinished = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    answer
  ) {
    setAnswerState('answered');
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, answer]);

    setTimeout(() => {
      if (answer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }

      setTimeout(() => {
        setAnswerState('');
      }, 2000);
    }, 1000);
  },
  [activeQuestionIndex]);

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
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        key={activeQuestionIndex}
      />
    </div>
  );
}
