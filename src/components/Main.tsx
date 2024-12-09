import { Dropdown, DropdownProps, Segment } from 'semantic-ui-react'
import { CATEGORIES, DIFFICULTY, NUM_OF_QUESTIONS, QUESTIONS_TYPE } from '../constants'
import { useRecoilState } from 'recoil'
import { categoryAtom, difficultyAtom, numOfQueAtom, questionsTypeAtom } from '../store/atoms/selection'
import { useQuestion } from '../hooks/useQuestion'

interface start {
  startQuiz: () => void
}

export default function Main({ startQuiz } : start) {
  const [categories, setCategories] = useRecoilState<string>(categoryAtom);
  const [numQuestions, setNumQuestions] = useRecoilState<number>(numOfQueAtom);
  const [difficulty, setDifficulty] = useRecoilState<string>(difficultyAtom);
  const [questionType, setQuestionType] = useRecoilState<string>(questionsTypeAtom);
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
    } catch(err) {
      alert('Error while fetching api')
    }
    startQuiz();
  }

  return (
    <div className='grid grid-cols-2 gap-4 h-screen'>
      <div className="flex items-center justify-center bg-green-200">
        <p className="text-center">Content for the left half can go here.</p>
      </div>
      <Segment>
        <div className='space-y-4 mt-10'>
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
            <button onClick={handleClick}>Start Quiz</button>
        </div>
      </Segment>
    </div>
  )
}