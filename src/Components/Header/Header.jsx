import React from "react";
import "./Header.css";
import Profile from "../../Assets/riyasat_about.jpg";
import Mail from "../../Assets/Mail.png"
import LinkedIn from "../../Assets/Linkedin.png"

const Header = () => {
  return (
    <div className="Header">
      <img src={Profile} alt="" />
      <h1 className="Header-heading">Riyasat Ali</h1>
      <h2 className="Header-position">Frontend Developer</h2>
      <h3>riyasat.website</h3>
      <div className="Header-links ">
        <a href="/" className="Header-links-button ">
            <img src={Mail} alt="Mail" className="scale-125" />
            <span className="ml-2">Email</span>
        </a>
        <a href="/" className="Header-links-button button-2">
            <img src={LinkedIn} alt="LinkedIn" className="scale-125" />
            <span className="ml-2">LinkedIn</span>
        </a>
      </div>
    </div>

  );
};

export default Header;
