import React from 'react';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.png';


const Footer = () => {
    <Footer githubIcon={githubIcon} linkedinIcon={linkedinIcon} />
  return (
    <footer className="footer">
        <div className="footer-section left-section">
            <h3>Left Section</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
        <div className="footer-section right-section">
            <h3>Right Section</h3>
            <ul>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                    GitHub 
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="GitHub" />
                    </a>
                     Linkedin              
                </li>
                <li>
                    <i className="fab fa-twitter"></i> Twitter
                </li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;