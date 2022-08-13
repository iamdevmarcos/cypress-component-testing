import { useState } from 'react'

export default function Stepper({ initial = 0 }) {
  const [count, setCount] = useState(initial)

  return (
    <div>
      <button aria-label="decrement" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span data-cy="counter">{count}</span>
      <button aria-label="increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  )
}