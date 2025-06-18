import React from 'react';
import './Header.css';
import Headertop from './Headertop';
import Headerbottom from './Headerbottom';

function Header() {
  return (
    <div className="Header">
      <Headertop />
      <Headerbottom />
    </div>
  );
}

export default Header;
