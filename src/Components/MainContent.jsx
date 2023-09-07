import React from 'react'
import "./MainContainer.css"

const MainContent = () => {
  return (
    <div className='MainContent px-10 min-h-screen'>
      <h1 className='text-6xl font-bold  py-10 tracking-tighter'>Fun Fact About React</h1>
      <ul className=' Facts list-disc text-xl pl-10 leading-10'>
        <li>Was First Released in 2013</li>
        <li>Was Originally Created by Jordan Walke</li>
        <li>Has Well Over 100K stars on Github</li>
        <li>Is Maintained by Facebook</li>
        <li>Power Thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

export default MainContent