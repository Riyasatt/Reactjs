import React from 'react'
import "./Footer.css"
import Twitter from "../../Assets/Twitter Icon.png"
import Facebook from "../../Assets/Facebook Icon.png"
import Instagram from "../../Assets/Instagram Icon.png"
import GitHub from "../../Assets/GitHub Icon.png"

const Footer = () => {
  return (
    <div className='Footer '>
      <img src={Twitter} alt="" />
      <img src={Facebook} alt="" />
      <img src={Instagram} alt="" />
      <img src={GitHub} alt="" />
    </div>
  )
}

export default Footer