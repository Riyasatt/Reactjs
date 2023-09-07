import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Interests from './Components/Interests/Interests'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

export default App