import { useRecoilValue } from "recoil"
import { qnaAtom } from "../store/atoms/questions"


export function QnA() {
  const resultData = useRecoilValue(qnaAtom);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-s-lg">
              Question
            </th>
            <th scope="col" className="px-6 py-3">
              Your Answer
            </th>
            <th scope="col" className="px-6 py-3">
              Correct Answer
            </th>
            <th scope="col" className="px-6 py-3 rounded-e-lg">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((data) => {
            return <tr className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {data.question}
              </th>
              <td className="px-6 py-4">
                {data.user_answer}
              </td>
              <td className="px-6 py-4">
                {data.correct_answer}
              </td>
              <td className="px-6 py-4">
                {data.point}
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>

  )
}