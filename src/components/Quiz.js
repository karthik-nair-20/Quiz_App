// import { useReducer } from "react";
import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  
  const[quizState, dispatch] = useContext(QuizContext);
  // console.log("quizState",quizState);
  return (
    <div className="quiz">
      {quizState.showResult && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>you got 4 of {quizState.questions.length}</div>
          </div>
          <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>

        </div>
      )}





      
      {!quizState.showResult && (
    <div>
        <div className="score">
        Question {quizState.currentQuestion+1}/{quizState.questions.length}
        </div>
        <Question />
        <div className="next-button" onClick={() => dispatch({type: "NEXT_QUESTION"})}>Next Question {quizState.currentQuestion}</div>
      </div>
    )}
    </div>
  )
}

export default Quiz;