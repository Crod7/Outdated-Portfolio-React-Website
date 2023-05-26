import React from 'react';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';


const Footer = () => {
    <Footer githubIcon={githubIcon} linkedinIcon={linkedinIcon} />
  return (
    <footer className="footer">
        <div className="footer-section right-section">
            <h3>Check me out</h3>
            <ul>
                <li>
                    <a style={{ color: 'lime' }} href="https://github.com/Crod7" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" />
                        GitHub 
                    </a>
                    
                </li>
                <li>
                    <a style={{ color: 'lime' }} href="https://www.linkedin.com/in/carlosrodriguez007/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Linkedin" />
                        Linkedin  
                    </a>
                                
                </li>
            </ul>
        </div>
    </footer>
  );
};

export default Footer;