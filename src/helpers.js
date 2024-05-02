export const shuffleAnswers = (question) => {
  const unshuffledAsnswer = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAsnswer
  .map((unshuffledAsnswer) => ({
    sort: Math.random(),
    value : unshuffledAsnswer,
  }))
  .sort((a,b) => a.sort - b.sort)
  .map((a) => a.value);
};