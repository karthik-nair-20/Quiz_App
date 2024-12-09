import { TabPane, Tab } from 'semantic-ui-react'
import { Stats } from './Stats'
import { QnA } from './QnA'


interface replay { 
  replayQuiz: () => void
}

const panes = [
  { menuItem: 'Result', render: () => <TabPane><Stats /></TabPane> },
  { menuItem: 'QnA', render: () => <TabPane><QnA /></TabPane> },
]

export default function Result({ replayQuiz }: replay) {
  return (
    <div>
      <Tab panes={panes} />
    </div>
  )
}