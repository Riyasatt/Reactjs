import React from "react";
import Card from "./Components/Card"
import "./App.css"
import data from "./data"



const App = () => {
  const receiveData =data.map(hotelData => {
    return  <Card
    coverImg={hotelData.coverImg}
    location={hotelData.location}
    description={hotelData.description}
    price={hotelData.price}
    rating={hotelData.stats.rating}
    openSpots={hotelData.openSpots}
  />
    
  })

  return (
    <div className="flex gap-5 my-10 mx-10 overflow-scroll ">
      {receiveData}
    </div>
  )
}

export default App
