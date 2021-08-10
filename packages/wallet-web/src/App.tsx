import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from '@arcadecity/components/src/components/Button'
import { hello } from '@arcadecity/core'

function App() {
  React.useEffect(() => {
    hello()
  }, [])
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Button />
        <p>Wallet Test</p>
      </header>
    </div>
  )
}

export default App
