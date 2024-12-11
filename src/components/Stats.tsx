import { useSetRecoilState } from "recoil";
import { CONGRATS } from "../constants"
import { qnaAtom } from "../store/atoms/questions";
import { isQuizCompleted, isQuizStarted } from "../store/atoms/status";

export function Stats() {
  const { title, message, home, replay } = CONGRATS;
  const setResultData = useSetRecoilState(qnaAtom);
  const setQuizStarted = useSetRecoilState(isQuizStarted);
  const setQuizCompleted = useSetRecoilState(isQuizCompleted);

  function homeClick() {
    window.location.reload();
  }
  function replayClick() {
    setResultData([]);
    setQuizStarted(true);
    setQuizCompleted(false);
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 text-center">
        <div 
          className="mx-auto w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-400
          rounded-full flex items-center justify-center mb-6"
        >
          <img src="/quiz-duck.svg" alt="quiz duck" />
        </div>

        <h4 className="text-3xl font-bold text-gray-800 mb-4">
          {title}
        </h4>
        <p className="text-base text-gray-600 mb-6">
          {message}
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            className="bg-gradient-to-br from-blue-600 to-blue-400 text-white px-6 py-3 
            rounded-md hover:bg-green-700 transition-colors"
            onClick={replayClick}
          >
            {replay}
          </button>
          <button
            className="bg-gradient-to-br from-blue-600 to-blue-400 text-white px-6 py-3 
            rounded-md hover:bg-green-700 transition-colors"
            onClick={homeClick}
          >
            {home}
          </button>
        </div>
      </div>
    </div>
  )
}