type QuestionOption = {
  key: number;
  text: number;
  value: number;
};

const NUM_OF_QUESTIONS: QuestionOption[] = [];

for (let i = 1; i <= 50; i++) {
  NUM_OF_QUESTIONS.push({ key: i, text: i, value: i });
}

export default NUM_OF_QUESTIONS;