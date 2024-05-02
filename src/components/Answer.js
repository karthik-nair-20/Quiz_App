const Answer = ({answerText, answerKey}) => {
  return (
    <div className="answer">
      <div className="answer-letter">{answerKey}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  )

}

export default Answer;