import { Dropdown, DropdownProps } from 'semantic-ui-react'
import { CATEGORIES, DIFFICULTY, NUM_OF_QUESTIONS, QUESTIONS_TYPE } from '../constants'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { categoryAtom, difficultyAtom, numOfQueAtom, questionsTypeAtom } from '../store/atoms/selection'
import { useQuestion } from '../hooks/useQuestion'
import { Homeview } from './Homeview'
import { startQuiz } from '../store/atoms/status'

export default function Main() {
  const [categories, setCategories] = useRecoilState<string>(categoryAtom);
  const [numQuestions, setNumQuestions] = useRecoilState<number>(numOfQueAtom);
  const [difficulty, setDifficulty] = useRecoilState<string>(difficultyAtom);
  const [questionType, setQuestionType] = useRecoilState<string>(questionsTypeAtom);
  const quizStart = useSetRecoilState(startQuiz);
  const { getQuestions } = useQuestion();

  function handleSelectChange<T>(e: React.SyntheticEvent<HTMLElement>, data: DropdownProps, setState: React.Dispatch<React.SetStateAction<T>>
  ) {
    setState(data.value as T)
  }

  function handleClick() {
    try {
      async function fetchData() {
        await getQuestions();
      }
      fetchData();
    } catch (err) {
      alert('Error while fetching api')
    }
    quizStart(true);
  }

  return (
    <div className="bg-white min-h-screen text-gray-100">
        <div className='grid md:grid-cols-2 min-h-screen'>
          <Homeview />
          <div className="flex flex-col bg-[#7077A1] p-6">
            <h1 className="md:hidden text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-[#2D3250]">
              Quiz Master
            </h1>
            <h2 className="text-2xl font-semibold mb-6 text-center">Customize Your Quiz</h2>
            <div className='space-y-4 mx-4'>
              <Dropdown
                placeholder='Select Categories'
                header="Select Any Categories"
                fluid
                selection
                options={CATEGORIES}
                value={categories}
                onChange={(e, data) => handleSelectChange(e, data, setCategories)}

              />
              <Dropdown
                placeholder='Select Number of Questions'
                header="Select Total Questions"
                fluid
                selection
                options={NUM_OF_QUESTIONS}
                value={numQuestions}
                onChange={(e, data) => handleSelectChange(e, data, setNumQuestions)}
              />
              <Dropdown
                placeholder='Select Difficulty'
                header="Select Difficulty Type"
                fluid
                selection
                options={DIFFICULTY}
                value={difficulty}
                onChange={(e, data) => handleSelectChange(e, data, setDifficulty)}
              />
              <Dropdown
                fluid
                selection
                name="type"
                placeholder="Select Questions Type"
                header="Select Questions Type"
                options={QUESTIONS_TYPE}
                value={questionType}
                onChange={(e, data) => handleSelectChange(e, data, setQuestionType)}
              />
              {/* <p>Please select the countdown time for your quiz.</p>
                      <Dropdown
                        search
                        selection
                        name="hours"
                        placeholder="Select Hours"
                        header="Select Hours"
                        options={COUNTDOWN_TIME.hours}
                      />
                      <Dropdown
                        search
                        selection
                        name="minutes"
                        placeholder="Select Minutes"
                        header="Select Minutes"
                        options={COUNTDOWN_TIME.minutes}
                      />
                      <Dropdown
                        search
                        selection
                        name="seconds"
                        placeholder="Select Seconds"
                        header="Select Seconds"
                        options={COUNTDOWN_TIME.seconds}
                      /> */}
              <button className="w-full rounded-md bg-[#4338CA] p-4 border border-transparent text-center text-md transition-all shadow-none hover:bg-[#3730A3] hover:shadow-sm ml-2" type="button" onClick={handleClick}>Start Quiz</button>
            </div>
          </div>
        </div>
    </div>
  )
}