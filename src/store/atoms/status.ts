import { atom, selector } from "recoil";
import { dataAtom } from "./questions";

export const isQuizStarted = atom({
  key: 'isQuizStarted',
  default: false
})

export const isQuizCompleted = atom({
  key: 'isQuizCompleted',
  default: false
})

export const startQuiz = selector({
  key: 'startQuiz',
  get: ({ get }) => {
    return get(isQuizStarted);
  },
  set: ({ set }) => {
    set(isQuizStarted, true);
  },
})

export const endQuiz = selector({
  key: 'endQuiz',
  get: ({ get }) => {
    return {
      started: get(isQuizStarted),
      completed: get(isQuizCompleted)
    }
  },
  set: ({ set }) => {
    set(isQuizStarted, false)
    set(isQuizCompleted, true)
  }
})

// export const replayQuiz = selector({
//   key: 'replayQuiz',
//   get: ({ get }) => {
//     return get(dataAtom);
//   },
//   set: ({ set }) => {
//     set(dataAtom,)
//   }
// })