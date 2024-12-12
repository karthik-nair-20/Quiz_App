import { useState } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
} from 'semantic-ui-react'

export function AboutQuiz() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleClick(index: number) {
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex);
  }

  return (
    <div className="max-w-xl text-start">
      <h1 className="text-3xl font-bold mb-6 text-start text-transparent bg-clip-text bg-slate-200">
        About Us
      </h1>
      <Accordion fluid styled>
        <AccordionTitle
          active={activeIndex === 0}
          index={0}
          onClick={() => handleClick(0)}
        >
          <Icon name='dropdown' />
          What is a Quiz Master?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 0}>
          <p>
          Learn and have fun with our quiz games! We've got questions on all sorts of topics to challenge your brain.
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 1}
          index={1}
          onClick={() => handleClick(1)}
        >
          <Icon name='dropdown' />
          What kinds of Questions are there?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 1}>
          <p>
          Over 15 categories. max 50-question. Quizzes can be customized for varying difficulty levels
          </p>
        </AccordionContent>

        <AccordionTitle
          active={activeIndex === 2}
          index={2}
          onClick={() => handleClick(2)}
        >
          <Icon name='dropdown' />
          How do you see the result?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 2}>
          <p>
          Once you finish the quiz, we'll show you how you did! You'll see your score and the right answers. Then, you can choose to play the quiz again or start a fresh one.
          </p>
        </AccordionContent>
        <AccordionTitle
          active={activeIndex === 3}
          index={3}
          onClick={() => handleClick(3)}
        >
          <Icon name='dropdown' />
          Who made this?
        </AccordionTitle>
        <AccordionContent active={activeIndex === 3}>
          <p>
          Hi there! I put together this little project. You can find more of my work on GitHub: https://github.com/karthik-nair-20
          </p>
        </AccordionContent>
      </Accordion>
    </div>
  )

}