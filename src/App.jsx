import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div className='mb-6'>
        <h2 className='mb-6 text-4xl'>give feedback</h2>
        <div className='flex gap-2'>
          <button>good</button>
          <button>neutral</button>
          <button>bad</button>
        </div>
      </div>
      <div>
        <h2 className='mb-6 text-4xl'>statistics</h2>
        <ul>
          <li>good</li>
          <li>neutral</li>
          <li>bad</li>
        </ul>
      </div>
    </>
  )
}

export default App