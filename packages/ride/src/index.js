import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './index.css'
// import App from './App'
import { App } from './NewApp'

document.addEventListener('DOMContentLoaded', () => {
  // ReactDOM.render(<></>, document.getElementById('root'))
  ReactDOM.render(<App />, document.getElementById('root'))
})
