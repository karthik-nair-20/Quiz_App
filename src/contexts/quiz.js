import { createContext, useReducer } from "react";
import questions from "../data"
import { shuffleAnswers } from "../helpers";

const initialState = {
  currentQuestion:0,
  questions,
  showResult: false,
  answers: shuffleAnswers(questions[0]),
}

const reducer = (state, action) => {
  if(action.type === "NEXT_QUESTION")
  {
    const showResult = state.currentQuestion === state.questions.length-1;
    const currentQuestion = showResult 
    ? state.currentQuestion 
    : state.currentQuestion + 1;
    const answers = showResult 
    ? []
    : shuffleAnswers(state.questions[currentQuestion]);
    return {
      ...state,
      currentQuestion,
      showResult,
      answers,
    };
  
  }

  if(action.type === "RESTART")
  {
    return initialState;
  }
  return state;
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
  const value = useReducer(reducer,initialState);
  console.log("state", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}