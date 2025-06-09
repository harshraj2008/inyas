import React from 'react';

function Volunteer() {
  const handleJoin = () => {
    window.open("https://chat.whatsapp.com/HuIMePcGaV0I9HtuOEo9Gk", "_blank");
  };

  return (
    <div className="section">
      <h2>Volunteer With Us</h2>
      <p>We’re looking for passionate students to design brochures and build this website. If you're interested, join the volunteer group below.</p>
      <button onClick={handleJoin}>Join WhatsApp Group</button>
    </div>
  );
}

export default Volunteer;
