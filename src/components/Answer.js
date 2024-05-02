const Answer = ({answerText, index}) => {
  const letterMappping = ["A",'B','C','D'];
  return (
    <div className="answer">
      <div className="answer-letter">{letterMappping[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  )

}

export default Answer;