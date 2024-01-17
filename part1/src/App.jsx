import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
  })

  const handleGoodClick = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
    }

    setClicks(newClicks)
  }

  const handleNeutralClick = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1,
    }

    setClicks(newClicks)
  }

  const handleBadClick = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1,
    }

    setClicks(newClicks)
  }

  return (
    <>
      <div className='mb-6'>
        <h2 className='mb-6 text-4xl'>give feedback</h2>
        <div className='flex gap-2'>
          <Button handleClick={handleGoodClick} text="Plus" />
          <Button handleClick={handleNeutralClick} text="Neutral" />
          <Button handleClick={handleBadClick} text="Bad" />
        </div>
      </div>
      <div>
        <h2 className='mb-6 text-4xl'>statistics</h2>
        <ul>
          <li>good {clicks.good}</li>
          <li>neutral {clicks.neutral}</li>
          <li>bad {clicks.bad}</li>
          <li>all {clicks.good + clicks.neutral + clicks.bad}</li>
          {/* <li>average {clicks.all}</li>
          <li>positive {clicks.good}</li> */}
        </ul>
      </div>
    </>
  )
}

export default App