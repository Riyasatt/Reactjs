import React from 'react'
import logo from "../Assets/logo512.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="py-8 px-10 flex justify-center items-center bg-slate-900 ">
      <img src={logo} alt="logo" className="h-8" />
      <h1 className="px-2 text-3xl font-bold text-cyan-400 mr-auto">ReactFacts</h1>
      <ul className="Nav-items flex items-center text-xl font-semibold ">
        <li>React Course</li>
        <li>Project 1</li>
      </ul>
    </nav>
  )
}

export default Navbar