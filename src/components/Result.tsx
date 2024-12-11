import { TabPane, Tab } from 'semantic-ui-react'
import { Stats } from './Stats'
import { QnA } from './QnA'

const panes = [
  { menuItem: 'Result', render: () => <TabPane><Stats /></TabPane> },
  { menuItem: 'QnA', render: () => <TabPane><QnA /></TabPane> },
]

export default function Result() {
  return (
    <div className='min-w-full min-h-full p-20'>
      <Tab panes={panes} />
    </div>
  )
}