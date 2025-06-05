import React, {useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1)
    }
    const decrement = () => {
        setCount(c => c - 1)
    }
    const reset = () => {
        setCount(0)
    }
    
  return (
    <div className='count-container'>
      <p className="count-display">{count}</p>
      <button className='count-btn' onClick={increment}>Increment</button>
      <button className='count-btn' onClick={decrement}>decrement</button>
      <button className='count-btn' onClick={reset}>reset</button>
    </div>
  )
}

export default Counter
