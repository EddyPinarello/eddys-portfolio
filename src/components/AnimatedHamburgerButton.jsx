import React from 'react';
import cvIcon from '../assets/cv-icon.png';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import resumeDownload from '../assets/resume/Eddy_Pinarello_resume.pdf'

const AnimatedHamburgerButton = ({ onClick, isOpen }) => {
    const currentPath = window.location.pathname;
    
    return (
        <div className="hamburger-menu-container">
            <div
                className={`hamburger-button ${isOpen ? 'open' : ''}`}
                onClick={onClick}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                role="button"
                tabIndex="0"
            >
                <div className="hamburger-line line-1"></div>
                <div className="hamburger-line line-2"></div>
                <div className="hamburger-line line-3"></div>
            </div>
            
            <ul className={`dropdown-menu ${isOpen ? 'mobile-visible' : ''}`}>
                <li className="menu-item">
                    <a href="/about" className={currentPath === '/about' ? 'active' : ''}>
                        About
                    </a>
                    {currentPath === '/about' && <div className="underline"></div>}
                </li>
                <li className="menu-item">
                    <a href="/projects" className={currentPath === '/projects' ? 'active' : ''}>
                        Projects
                    </a>
                    {currentPath === '/projects' && <div className="underline"></div>}
                </li>
                <li className="menu-item">
                    <a href="/work-experience" className={currentPath === '/work-experience' ? 'active' : ''}>
                        Work Experience
                    </a>
                    {currentPath === '/work-experience' && <div className="underline"></div>}
                </li>
                <li>
                    <a href={resumeDownload} target="_blank" rel="noopener noreferrer">
                        <img src={cvIcon} alt="Download Resume" />
                    </a>
                    <a href="https://www.linkedin.com/in/eddypinarello" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="Link to LinkedIn" />
                    </a>
                    <a href="https://github.com/EddyPinarello" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="Link to GitHub" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default AnimatedHamburgerButton;