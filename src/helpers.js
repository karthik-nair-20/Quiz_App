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

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswer) => decodeURIComponent(incorrectAnswer)
    );
    return {
      correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
      question: decodeURIComponent(backendQuestion.question),
      incorrectAnswers,
    };
  });
};