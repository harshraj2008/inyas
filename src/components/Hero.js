import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Background Image */}
      <img
        src="https://www.cio.com/wp-content/uploads/2025/03/217732-0-86829000-1742807934-shutterstock_2347235209.jpg?quality=50&strip=all&w=1024"
        alt="Hero Background"
        className="hero-bg-img"
      />

      {/* Overlay and Content */}
      <div className="hero-overlay">
        <div className="hero-content">
          <img src="Inyas_logo.png" alt="INYAS Logo" className="hero-logo" />
          <img src="vit_white.png" alt="VIT Logo" className="hero-logo" />

          <h1>Advances in Science and Technology for Sustainable Future (ASTSF)</h1>
          <p>
            Hosted by <a href="https://vit.ac.in" target="_blank" rel="noopener noreferrer" className="text-link"><strong>VIT VELLORE</strong></a>
            &nbsp;in collaboration with&nbsp;
            <a href="https://inyas.in/" target="_blank" rel="noopener noreferrer" className="text-link"><strong>INYAS</strong></a>,
            <a href="https://ieee-pelsvitv.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-link"><strong>IEEE-PELS VIT VELLORE</strong></a>
            &nbsp;&&nbsp;
            <a href="https://insaindia.res.in/" target="_blank" rel="noopener noreferrer" className="text-link"><strong>INSA</strong></a>
          </p>
          <p className="hero-date">November 24–25, 2023</p>
          <p className="hero-location">VIT Vellore, Tamil Nadu, India</p>
          <p className="hero-description">
            <img src="INSA.png" alt="INSA Logo" className="hero-logo" />
            <img src="chapter_logo.png" alt="PELS Logo" className="hero-logo" />
          </p>
          <a href="#registration" className="hero-button">Register Now</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
