import React from 'react'
import "./Card.css"


const Card = (props) => {
  return (
    <div className='flex p-3 text-lg w-[800px] shadow-xl rounded mb-10 mr-10'>
      <img src={props.coverImage} alt="" className='w-44 h-72 object-cover rounded ' />
      <div className="cardContent pl-5 my-auto">
        <div className='flex items-center '>
          <i class="fa-solid fa-location-dot pr-2" style={{color:'#f55a5a'}}></i>
          <h2 className='pr-5 tracking-wider'> {props.country}</h2>
          <a href="/" className="text-slate-400 underline">view on google map</a>
        </div>
        <h1 className='text-4xl font-bold mt-4 mb-8 text-slate-800'>{props.destination}</h1>
        <h2 className='font-semibold mb-4'>{`${props.startDate} - ${props.endDate}`}</h2>
        <p className="text-base mb-4 ">{props.description}</p>
      </div>
    </div>
  )
}

export default Card