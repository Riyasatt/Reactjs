import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
     <div className="Card min-w-[300px] p-4 shadow-xl rounded-xl bg-white hover:scale-105 hover:transition-all relative">
          <img src={`/Images/${props.coverImg}`} alt="Cover Image" className="rounded-xl w-full" />
          <div className="stats_Location flex justify-between items-center mt-4">
               <h1 className='text-xl font-bold'>{props.location}</h1>
               <div className='flex items-center justify-center'>
                    <img src="/Images/star.png" alt="star" className='scale-75' />
                    <span>{props.rating}</span>
               </div>
              
               
          </div>
          <p className="leading-4 mt-1 mb-2">{`${props.description}`}</p>
          <h2><span className='font-bold'>{`$${props.price}`}</span>/night</h2>
          <span className='absolute top-7 right-7 rounded-xl bg-white p-1  px-3' style={{display:props.openSpots==0 ? "block" : "none"}} >Sold Out</span>
     </div>
  )
}

export default Card