import { useRecoilValue } from "recoil"
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { isQuizCompleted, isQuizStarted } from "../store/atoms/status";

export default function App() {
  const quizStarted= useRecoilValue(isQuizStarted);
  const quizCompleted= useRecoilValue(isQuizCompleted);
 

  return (
    <div className="font-sans">
      { !quizStarted && !quizCompleted && (
        <Main />
      )}

      { quizStarted && !quizCompleted && (
        <Quiz />
      )}

      { !quizStarted && quizCompleted && (
        <Result />
      )}  
    </div>
  )
}