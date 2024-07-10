import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';

export default function Question({
  onSelectAnswer,
  selectedAnswer,
  onSkipQuestion,
  questionText,
  answerState,
  answers
}) {
  return (
    <div id="question">
      <QuestionTimer
        onTimeout={onSkipQuestion}
        timeout={10000}
      />
      <h2>{questionText}</h2>
      <Answers
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
        answers={answers}
      />
    </div>
  );
}
