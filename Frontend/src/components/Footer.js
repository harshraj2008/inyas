import React from 'react';
import './Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
    <div className="footer">
      <div className="footersec1">
        {/* Section 1 - IEEE PELS */}
        <div className="footer-icon-group">
          <h4>IEEE-PELS VIT</h4>
          <a href="https://ieee-pelsvitv.vercel.app/"><HomeIcon /></a>
          <a href="https://www.linkedin.com/company/105868654/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://instagram.com/ieeepels_vitvellore" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="mailto:ieeepels@vit.ac.in"><MailIcon /></a>
        </div>

        {/* Section 2 - INYAS */}
        <div className="footer-icon-group">
          <h4>INYAS</h4>
          <a href="https://inyas.in/"><HomeIcon /></a>
         
        </div>

        {/* Section 3 - Symposium */}
        <div className="footer-icon-group">
          <h4>VIT Vellore</h4>
          <a href="https://l.instagram.com/?u=http%3A%2F%2Fwww.vit.ac.in%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacq2udluDTZwnQj7hjr6VzHQTc0LEhJ9uJfXiYs9-uxmCqV_0RT0nyIGgSMAw_aem_equg4y7AfdjS4v6aGi9eew&e=AT1lrf81uSUFEDlRJO2eW58-s3PP7JoLRh4dG5mmmTO2oxRT-yq3SnxY2EQAqToefNsfnXa24-6nhohe5QBYsBl3On0n8c_jaBnAeKVMejVZAOcAl8oTMg"><HomeIcon /></a>
          <a href="https://www.linkedin.com/school/vellore-institute-of-technology/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          <a href="https://www.instagram.com/vellore_vit/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
          
        </div>
      </div>

      <div className="footersec2">
        <p>
          © 2025 INYAS Symposium – All rights reserved. This website is built to facilitate engagement, learning,
          and communication around the event. Content and visuals are subject to change.
        </p>
      </div>

      <div className="footersec3">
        {/* Optional extra content like back-to-top button or logos */}
      </div>
    </div>
  );
}

export default Footer;
