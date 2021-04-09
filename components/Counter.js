import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
      <input type="text" value={count} readOnly />
    </div>
  )
}
