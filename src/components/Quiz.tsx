import { useState } from "react";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { Button } from "./Button";
import { shuffleAnswers } from "../helpers"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dataAtom, loading, qnaAtom, scoreAtom } from "../store/atoms/questions";
import { IQna } from "../interfaces/questionsAndAnswers.interface";
import { Loader } from "./Loader";
import { endQuiz } from "../store/atoms/status";
import useSound from 'use-sound';

const Quiz = () => {
  const data = useRecoilValue(dataAtom);
  const waiting = useRecoilValue(loading);
  const setQuestionsAndAnswers = useSetRecoilState<IQna[]>(qnaAtom);
  const score = useRecoilValue(scoreAtom);
  const quizEnd = useSetRecoilState(endQuiz);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [play] = useSound('/click-effect.wav',{
    volume: 0.5,
  })

  function handleNext() {
    let point: number = 0;
    if(selectedAnswer === data[questionIndex].correct_answer)
    {
      point = 1;
    }
    setQuestionsAndAnswers((qna) => [
      ...qna,
      {
        question: decodeURIComponent(data[questionIndex].question),
        user_answer: decodeURIComponent(selectedAnswer),
        correct_answer: decodeURIComponent(data[questionIndex].correct_answer),
        point
      }
    ])
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer('');
  }

  function handleSubmit() {
    play();
    quizEnd({started: false, completed: true});
  }

  function checkAnswer(ans: string) {
    setSelectedAnswer(ans);
  }

  function endClick() {
    play();
    quizEnd({started: false, completed: true});
  }

  return (
    <div className="container mx-auto max-w-screen-lg h-screen px-4 sm:px-2">
      {waiting && <Loader />}
      {data.length > 0 && (
              <div className="flex justify-center items-center flex-col space-y-4">
              <div className="md:w-3/4 text-start px-6 sm:px-4">
                <Question text={data[questionIndex].question} currentPage={questionIndex} />
              </div>
              <div className="w-full flex justify-end">
                <button onClick={endClick} className="bg-gradient-to-br from-red-600 to-red-400 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">End Quiz</button>
              </div>
              <div className="p-6 grid grid-cols-1 gap-4 sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-6">
                {shuffleAnswers(data[questionIndex]).map((ele, index) => {
                  return <Answer option ={ele} onClick={checkAnswer} selectedAns= {selectedAnswer} />
                  }
                )}
              </div>
              <div className="flex gap-4">
                { questionIndex !== data.length - 1 && (
                  <Button text="Next" onClick={handleNext} disable={selectedAnswer === ""} />
                )}
                { questionIndex === data.length-1 && (
                  <Button text="Submit" onClick={handleSubmit} disable={selectedAnswer === ''} />
                )}
              </div>
          </div>
      )}
    </div>
  )
}

export default Quiz;