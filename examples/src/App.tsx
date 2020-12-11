import React from 'react'
import { useHook } from './hooks'

function App() {
  const { state, toggle } = useHook()

  return (
    <div>
      <pre>{JSON.stringify({ state })}</pre>
      <br />
      <button onClick={toggle}>toggle</button>
    </div>
  )
}

export default App
