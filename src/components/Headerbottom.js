import React from "react";
import Headertop from "./Headertop";
import "./Headerbottom.css";

function Headerbottom() {
  return (
    <>
      <Headertop />
      <nav className="headerbottom-navbar">
        <div className="headerbottom-container">
          <ul className="nav-links">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#highlights">HIGHLIGHTS</a></li>
            <li><a href="#speakers">SPEAKERS</a></li>
            <li><a href="#schedule">SCHEDULE</a></li>
            <li><a href="#registration">REGISTRATION</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Headerbottom;
