import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-column">
          <h2 className="footer-logo">Inox-Playxx</h2>
          <p className="footer-text">
            Your go-to spot for movies and magic.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>    
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <a href="mailto:rushikeshjadhav@gmail.com">📧 rushikeshjadhav@gmail.com</a>
          <a href="https://www.linkedin.com/in/rushikesh-jadhav" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
          <a href="https://www.instagram.com/thvrishiii7?igsh=MTVkczFzY20wY2xyZA==" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
        </div>

        <div className="footer-column">
          <h4>Designed By</h4>
          <p>Rushikesh Jadhav</p>
        </div>
        
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Rushikesh Jadhav All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
