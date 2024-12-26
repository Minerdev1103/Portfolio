import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import RainEffect from './components/RainEffect'

function App() {

  return (
    <div>
      <RainEffect/>
      <HomePage />
    </div>
  )
}

export default App
