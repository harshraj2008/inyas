import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About the Symposium</h2>

        <p>
          The <strong>INYAS Technical Symposium</strong>, titled 
          <em> “Advances in Science and Technology for a Sustainable Future” (ASTSF – 2025)</em>, 
          is a prestigious national-level event organized by the 
          <strong> Indian National Young Academy of Sciences (INYAS)</strong> 
          in collaboration with <strong>VIT Vellore</strong>.
        </p>

        <p>
          Scheduled from <strong>18–20 September 2025</strong>, the symposium aims to foster academic exchange and collaboration 
          by bringing together scientists, researchers, and students to deliberate on innovative pathways 
          toward a sustainable future.
        </p>

        <p>
          The programme will feature keynote addresses, thematic panel discussions, poster presentations, 
          and community outreach initiatives, with a special emphasis on integrating scientific knowledge 
          with real-world applications for long-term impact.
        </p>
      </div>
    </section>
  );
};

export default About;
