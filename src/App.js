import './index.scss'
import { useState } from 'react'

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['Library', 'Framework', 'Application'],
    correct: 0,
  },
  {
    title: 'Component - is ... ',
    variants: [
      'Application',
      'Part of the webpage or the application',
      'No clue',
    ],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'It is just HTML',
      'A function',
      'It is HTML-like code within the JavaScript files ',
    ],
    correct: 2,
  },
]

function Result({ correct }) {
  return (
    <div className="result">
      {correct >= Math.floor(questions.length / 2) ? (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          alt="Result Icon"
        />
      ) : (
        <img
          src="https://cdn.jsdelivr.net/emojione/assets/png/1F61E.png"
          alt="😞"
        />
      )}
      <a href="/">
        <h2>
          You got {correct} {correct === 1 ? 'answer' : 'answers'} out of {questions.length}
        </h2>
        <button>Try again</button>
      </a>
    </div>
  )
}

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClickVariant(index)} key={variant}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  )
}

function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]
  const onClickVariant = (index) => {
    setStep(step + 1)
    if (question.correct === index) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  )
}

export default App
