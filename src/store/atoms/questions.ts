import { atom } from 'recoil';
import { IQuestion } from '../../interfaces/questions.interface';
import { IQna } from '../../interfaces/questionsAndAnswers.interface';


export const dataAtom = atom<IQuestion[]>({
  key: 'dataAtom',
  default: []
})

// export const itemsPerPageAtom = atom({
//   key: 'itemsPerPage',
//   default: 10,
// });

// export const currentPageAtom = atom({
//   key: 'currentPage',
//   default: 1,
// });

// export const selectedAtom = atom({
//   key: 'selectedAtom',
//   default:""
// })

export const scoreAtom = atom({
  key: 'scoreAtom',
  default: 0,
})

// export const onClickNext = atom({
//   key: 'onClickNext',
//   default: false,
// })

export const qnaAtom = atom<IQna[]>({
  key: 'qnaAtom',
  default: []
})




