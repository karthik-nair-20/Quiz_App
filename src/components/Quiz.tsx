import { useState, useEffect } from "react";
import { Answer } from "./Answer";
import { Question } from "./Question";
import { Button } from "./Button";
import { shuffleAnswers } from "../helpers"
import { useQuestion } from "../hooks/useQuestion";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { dataAtom, qnaAtom, scoreAtom } from "../store/atoms/questions";
import { IQna } from "../interfaces/questionsAndAnswers.interface";

const Quiz = () => {
  const data = useRecoilValue(dataAtom);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useRecoilState<IQna[]>(qnaAtom);
  const { getQuestions } = useQuestion();
  const setScoreAtom = useSetRecoilState(scoreAtom);
  const score = useRecoilValue(scoreAtom);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");


  useEffect(() =>{
    try {
      async function fetchData() {
        await getQuestions();
      }
      fetchData();
    } catch(err) {
      alert('Error while fetching api')
    }
  },[]);

  function handleNext() {
    let point: number = 0;
    if(selectedAnswer === data[questionIndex].correct_answer)
    {
      point = 1;
    }
    setQuestionsAndAnswers((qna) => [
      ...qna,
      {
        question: data[questionIndex].question,
        user_answer: selectedAnswer,
        correct_answer: data[questionIndex].correct_answer,
        point
      }
    ])
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer('');
  }

  function checkAnswer(ans: string) {
    setSelectedAnswer(ans);
  }

  console.log(selectedAnswer);

  return (
    <div className="container mx-auto max-w-screen-lg h-screen px-4 sm:px-2">
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
                {/* <Button text="Previous" onClick={handlePrev} disable={currentPage === 1} /> */}
                <Button text="Next" onClick={handleNext} disable={questionIndex === data.length-1} />
              </div>
          </div>
      )}
    </div>
  )
}

export default Quiz;