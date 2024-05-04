import { createContext, useReducer } from "react";
// import questions from "../data"
import { normalizeQuestions, shuffleAnswers } from "../helpers";

const initialState = {
  currentQuestion:0,
  questions:[],
  showResult: false,
  answers:[],
  correctAnswersCount: 0,
  currentAnswer: "",
  err: null,

}

const reducer = (state, action) => {
  switch(action.type)
  {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
      action.payload ===
      state.questions[state.currentQuestion].correctAnswer
        ? state.correctAnswersCount + 1
        : state.correctAnswersCount;
        return {
          ...state,
          currentAnswer: action.payload,
          correctAnswersCount,
        }
    }
    case "NEXT_QUESTION": {
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
            currentAnswer:"",
          };
    }
    case "RESTART": {
        return initialState;
    }
    case "LOADED_QUESTIONS": {
      const normalizedQuestions = normalizeQuestions(action.payload);
      return {
        ...state,
        questions: normalizedQuestions,
        answers: shuffleAnswers(normalizedQuestions[0]),
      };
    }
    case "SERVER_ERROR": {
      return {
        ...state,
        err: "The API Has Failed To fetch Data"
      }
    }
    default: {
        return state;
    }
  }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
  const value = useReducer(reducer,initialState);
  console.log("state", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}