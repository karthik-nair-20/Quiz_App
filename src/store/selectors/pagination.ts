import { selector } from "recoil";
import { dataAtom } from "../atoms/questions";

export const totalCountSelector = selector({
  key: 'totalCountSelector',
  get : ({ get }) => {
    const allItems = get(dataAtom);
    return allItems.length;
  }
})

// export const correctAnsSelector = selector({
//   key:'correctAnsSelector',
//   get: ({ get }) => {
//     const currPage = get(currentPageAtom);
//     const allItems = get(questionState);
//     if (currPage >=1 && currPage < allItems.length) { 
//       return allItems[currPage].correct_answer; 
//     } else {
//       return '';
//     }
//   }
// })

// export const scoreSelector = selector({
//   key: 'scoreSelector',
//   get : ({ get }) => {
//     const correctAnswer = get(correctAnsSelector);
//     const currentAnswer = get(selectedAtom);
//     const currentScore = get(scoreAtom);

//     return currentAnswer === correctAnswer ? currentScore + 1 : currentScore ;
//   }
// })



// correct answer = score +1
// incorrect answer = no change


// select ans != correct ans - > make correct ans green , selected ans - > red
