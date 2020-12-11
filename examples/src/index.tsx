import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HookProvider } from './hooks'

ReactDOM.render(
  <React.StrictMode>
    <HookProvider>
      <App />
    </HookProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
