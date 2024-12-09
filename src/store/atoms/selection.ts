import { atom } from "recoil";

export const categoryAtom = atom({
  key: 'categoryAtom',
  default: '0'
})

export const numOfQueAtom = atom({
  key: 'numOfQueAtom',
  default: 5
})

export const difficultyAtom = atom({
  key: 'difficultyAtom',
  default: '0'
})

export const questionsTypeAtom = atom({
  key: 'questionsTypeAtom',
  default: '0'
})
