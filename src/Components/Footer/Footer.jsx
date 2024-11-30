// import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-section">
          <h2>About Me</h2>
          <p>
            I am a passionate developer focused on creating beautiful and functional websites. 
            Feel free to reach out to me on my social media platforms or via email.
          </p>
        </div> */}
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Follow Me</h2>
          <div className="contact-info">
            <ul>
            <p>Email: <a href="mailto:tanishqrachamalla12@gmail.com" target="_blank" rel="noopener noreferrer">tanishqrachamalla12@gmail.com</a></p>
            <p>Phone: <a href="tel:+917891262136">+91-7981262136</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/tanishq-rachamalla-5a759b234/" target="_blank" rel="noopener noreferrer">Tanishq Rachamalla</a></p>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Tanishq Rachamalla. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
