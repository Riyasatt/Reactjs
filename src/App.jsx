import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import MainContent from './Components/MainContent'

const App = () => {
  return (
    <div className="app text-white ">
      <Navbar />
      <MainContent />
    </div>
  )
}

export default App