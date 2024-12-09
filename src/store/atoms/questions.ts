import { atom } from 'recoil';
import { IQuestion } from '../../interfaces/questions.interface';
import { IQna } from '../../interfaces/questionsAndAnswers.interface';


export const dataAtom = atom<IQuestion[]>({
  key: 'dataAtom',
  default: []
})

export const loading = atom({
  key: 'loading',
  default: false
})

export const scoreAtom = atom({
  key: 'scoreAtom',
  default: 0,
})

export const qnaAtom = atom<IQna[]>({
  key: 'qnaAtom',
  default: []
})




