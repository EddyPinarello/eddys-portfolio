import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cvIcon from '../assets/cv-icon.png';
import githubIcon from '../assets/github-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';
import AnimatedHamburgerButton from './AnimatedHamburgerButton';
import resumeDownload from '../assets/resume/Eddy_Pinarello_resume.pdf';

function Header() {
  const currentPath = window.location.pathname.replace('/eddys-portfolio', '') || '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav aria-label="Main Navigation">
        <ul className="navbar-items">
          <li className={currentPath === '/' ? 'active' : ''}>
            <Link to="/eddys-portfolio">Eddy's Portfolio</Link>
            {currentPath === '/' && <div className="underline"></div>}
          </li>
          <div className={`navbar-pages ${isMobileMenuOpen ? 'mobile-visible' : ''}`}>
            <li className={currentPath === '/about' ? 'active' : ''}>
              <Link to="/about">About</Link>
              {currentPath === '/about' && <div className="underline"></div>}
            </li>
            <li className={currentPath === '/projects' ? 'active' : ''}>
              <Link to="/projects">Projects</Link>
              {currentPath === '/projects' && <div className="underline"></div>}
            </li>
            <li className={currentPath === '/work-experience' ? 'active' : ''}>
              <Link to="/work-experience">Work Experience</Link>
              {currentPath === '/work-experience' && <div className="underline"></div>}
            </li>
          </div>
          <div className="hamburger-container">
            <AnimatedHamburgerButton
              isOpen={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
          </div>
        </ul>
      </nav>

      <div className="vertical-icons">
        <a href={resumeDownload} target="_blank" rel="noopener noreferrer">
          <img src={cvIcon} alt="Download Resume" />
        </a>
        <a href="https://www.linkedin.com/in/eddypinarello" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="Icon 2" />
        </a>
        <a href="https://github.com/EddyPinarello" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="Icon 3" />
        </a>
      </div>
    </header>
  );
}

export default Header;