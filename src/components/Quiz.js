// import { useReducer } from "react";
import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";

const Quiz = () => {
  
  const[quizState, dispatch] = useContext(QuizContext);
  // console.log("quizState",quizState);
  const apiUrl =
  "https://opentdb.com/api.php?amount=10&category=30&difficulty=easy&type=multiple&encode=url3986";

  useEffect(() =>{

    if(quizState.questions.length > 0 || quizState.err){
      return;
    }
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
    })
    .catch((err) => {
      dispatch({ type: "SERVER_ERROR"});
    });
  });

  return (
    <div className="quiz">
      {quizState.err && (
        <div className="results">
          <div className="congratulations">Server error</div>
          <div className="results-info">
            <div>{quizState.err}</div>
          </div>
        </div>
      )}
      {quizState.showResult && (
        <div className="results">
          <div className="congratulations">Congratulations</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>you got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
          </div>
          <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>

        </div>
      )}





      
      {!quizState.showResult && quizState.questions.length >0 && (
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