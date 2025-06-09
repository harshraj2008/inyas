import React from 'react';
import './Header.css'; // Ensure this path matches your actual CSS file location

const Header = () => {
  return (
    <header className="header">
      
      {/* Left Logo Group */}
      <div className="left-logos ">
        <img src="Inyas_logo.png" alt="INYAS Logo" className="logo-img" />
        <img src="VITLOGO.png" alt="VIT LOGO "className="logo-img" />
      </div>

      {/* Header Title */}
       <div className="header-title">
        <h1>INYAS Symposium 2025</h1>
        <p className="subtitle">Advances in Science and Technology for Sustainable Future (ASTSF)</p>
      </div>

      {/* Right Logo Group */}
      <div className="right-logos    ">
        <img src="chapter_logo.png" alt="IEEE PELS Logo" className="logo-img" />
        <img src="INSA.png" alt="INSA Logo" className="logo-img" />
      </div>

    </header>
  );
};

export default Header;
