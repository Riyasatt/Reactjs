import React from 'react'
import "./MainContent.css"
import Card from "../Card/Card"
import Data from "../../Data.js"

const MainContent = () => {
  const travelInfo=Data.map(place =>{
    return(
      <Card
        {...place}
      />
    )
  })
  return (
    <div className='py-10 px-16 flex flex-wrap'>
      {travelInfo}
    </div>
  )
}

export default MainContent