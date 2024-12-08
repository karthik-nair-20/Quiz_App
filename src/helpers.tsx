interface question {
  type: string,
  difficulty: string
  category: string
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

export const shuffleAnswers = (question:question) => {
  const unshuffledAsnswer = [
    question.correct_answer,
    ...question.incorrect_answers,
  ];

  return unshuffledAsnswer
  .map((unshuffledAsnswer) => ({
    sort: 1,
    value : unshuffledAsnswer,
  }))
  .sort((a,b) => a.sort - b.sort)
  .map((a) => a.value);
};

// export const normalizeQuestions = (backendQuestions) => {
//   return backendQuestions.map((backendQuestion) => {
//     const incorrectAnswers = backendQuestion.incorrect_answers.map(
//       (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
//     );
//     return {
//       correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
//       question: decodeURIComponent(backendQuestion.question),
//       incorrectAnswers,
//     };
//   });
// };