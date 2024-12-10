import { useRecoilState, useRecoilValue } from "recoil"
import { dataAtom, qnaAtom } from "../store/atoms/questions"
import { useState } from "react";
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { isQuizCompleted, isQuizStarted } from "../store/atoms/status";

export default function App() {
  const quizStarted= useRecoilValue(isQuizStarted);
  const quizCompleted= useRecoilValue(isQuizCompleted);
 

  return (
    <div className="bg-[#F8FAFC]">
      { !quizStarted && !quizCompleted && (
        //api config
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