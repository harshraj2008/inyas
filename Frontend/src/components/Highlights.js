import React from 'react';
import './Highlights.css'; // Assuming you have a CSS file for styling
const Highlights = () => {
  return (
    <section className="highlights-section" id="highlights">
      <div className="highlights-container">
        <h2 className="section-title">Symposium Highlights</h2>
        <ul className="highlight-list">
          <li>
            <strong>Keynote Addresses:</strong> Delivered by eminent scientists on sustainable innovations shaping the future.
          </li>
          <li>
            <strong>Expert Panels:</strong> Engaging discussions on interdisciplinary approaches to science and sustainability.
          </li>
          <li>
            <strong>Poster Presentations:</strong> Featuring research contributions from students, scholars, and early-career professionals.
          </li>
          <li>
            <strong>Outreach Initiatives:</strong> Dedicated sessions for rural engagement and knowledge dissemination.
          </li>
          <li>
            <strong>Networking Opportunities:</strong> Facilitating dialogue among academia, industry, and policy stakeholders.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
