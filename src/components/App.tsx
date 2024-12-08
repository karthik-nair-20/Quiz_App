import { useRecoilState } from "recoil"
import { dataAtom, qnaAtom } from "../store/atoms/questions"
import { useState } from "react";
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";

export default function App() {
  const [data, setData] = useRecoilState(dataAtom);
  const [resultData, setResultData] = useRecoilState(qnaAtom);

  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countdownTime, setCountdownTime] = useState(null);

  function startQuiz() {
    setIsQuizStarted(true);
  }

  function endQuiz() {
    setIsQuizStarted(false)
    setIsQuizCompleted(true);
  }

  function replayQuiz() {
    //shuffle the question from old GET fetch
    setIsQuizCompleted(false);
    setIsQuizStarted(true);
    setResultData([]);
    //timer reset
  }

  return (
    <div>
      { !isQuizStarted && !isQuizCompleted && (
        //api config
        <Main />
      )}

      { isQuizStarted && !isQuizCompleted && (
        <Quiz />
      )}

      { !isQuizStarted && isQuizCompleted && (
        <Result />
      )}  
    </div>
  )
}