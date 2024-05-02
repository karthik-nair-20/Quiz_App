import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const[quizState] = useContext(QuizContext);
  // console.log("question", quizState);
  const curQues = quizState.questions[quizState.currentQuestion];
  return (
    <div>
      <div className="question">{curQues.question}</div>
      <div className="answers">
      {quizState.answers.map((answer, index) => (
          <Answer answerText={answer} key={index} />
        ))}
      </div>
    </div>
  )

}

export default Question;