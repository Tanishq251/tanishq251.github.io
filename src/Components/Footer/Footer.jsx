// import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="mailto:tanishqrachamalla12@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/assets/mail2.png" alt="Email" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/tanishq-rachamalla-5a759b234/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/assets/linkedin2.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="/assets/github.png" alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Tanishq Rachamalla. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
