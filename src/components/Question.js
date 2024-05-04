import { useContext } from "react";
import Answer from "./Answer";
import { QuizContext } from "../contexts/quiz";

const Question = () => {
  const[quizState, dispatch] = useContext(QuizContext);
  // console.log("question", quizState);
  const curQues = quizState.questions[quizState.currentQuestion];
  return (
    <div>
      <div className="question">{curQues.question}</div>
      <div className="answers">
      {quizState.answers.map((answer, index) => (
          <Answer 
          answerText={answer} 
          key={index} 
          index ={index} 
          onSelectAnswer ={(answersText) => 
              dispatch({type: "SELECT_ANSWER",payload: answersText})}
          currentAnswer = {quizState.currentAnswer}
          correctAnswer = {curQues.correctAnswer}
          />
        ))}
      </div>
    </div>
  )

}

export default Question;