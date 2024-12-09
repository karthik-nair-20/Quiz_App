import { useState } from "react";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { Button } from "./Button";
import { shuffleAnswers } from "../helpers"
import { useRecoilValue, useRecoilState } from "recoil";
import { dataAtom, loading, qnaAtom, scoreAtom } from "../store/atoms/questions";
import { IQna } from "../interfaces/questionsAndAnswers.interface";
import { Loader } from "./Loader";

interface end {
  endQuiz: () => void
}

const Quiz = ({ endQuiz }: end) => {
  const data = useRecoilValue(dataAtom);
  const waiting = useRecoilValue(loading);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useRecoilState<IQna[]>(qnaAtom);
  const score = useRecoilValue(scoreAtom);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

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
    endQuiz();
  }

  function checkAnswer(ans: string) {
    setSelectedAnswer(ans);
  }

  console.log(selectedAnswer);

  return (
    <div className="container mx-auto max-w-screen-lg h-screen px-4 sm:px-2">
      {waiting && <Loader />}
      {data.length > 0 && (
              <div className="flex justify-center items-center flex-col space-y-4">
              hello from Quiz
              here i will add a Rule and Timer thing
              {score}
              <div className="md:w-3/4 text-start px-6 sm:px-4">
                <Question text={data[questionIndex].question} currentPage={questionIndex} />
              </div>
              <div className="p-6 grid grid-cols-1 gap-4 sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-6">
                {shuffleAnswers(data[questionIndex]).map((ele, index) => {
                  return <Answer option ={ele} onClick={checkAnswer} />
                  }
                )}
              </div>
              <div className="flex gap-4">
                <Button text="Next" onClick={handleNext} disable={questionIndex === data.length-1 || selectedAnswer === ""} />
                { questionIndex === data.length-1 && (
                  <Button text="Submit" onClick={handleSubmit} disable={false} />
                )}
              </div>
          </div>
      )}
    </div>
  )
}

export default Quiz;