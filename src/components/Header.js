import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-700">INYAS 2025</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#about" className="hover:text-green-600">About</a>
          <a href="#highlights" className="hover:text-green-600">Highlights</a>
          <a href="#speakers" className="hover:text-green-600">Speakers</a>
          <a href="#registration" className="hover:text-green-600">Registration</a>
          <a href="#schedule" className="hover:text-green-600">Schedule</a>
          <a href="#volunteer" className="hover:text-green-600">Volunteer</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
