import React, { useState } from 'react';
import '../../styles/navbar/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
          const offset = document.querySelector('.navbar').offsetHeight;
          window.scrollTo({
              top: element.offsetTop - offset,
              behavior: 'smooth'
          });
      }
      setIsOpen(false);
  };

  return (
      <nav className="navbar">
          <div className="navbar-container">
              <a href="/" className="navbar-logo">VisiónOnline</a>
              <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
              </div>
              <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                  <li className="nav-item">
                      <p onClick={() => scrollToSection('about')} className="nav-links">Nosotros</p>
                  </li>
                  <li className="nav-item">
                      <p onClick={() => scrollToSection('services')} className="nav-links">Servicios</p>
                  </li>
                  <li className="nav-item">
                      <p onClick={() => scrollToSection('faqs')} className="nav-links">FAQs</p>
                  </li>
                  <li className="nav-item">
                      <p onClick={() => scrollToSection('contact')} className="nav-links">Contacto</p>
                  </li>
              </ul>
          </div>
      </nav>
  );
};

export default Navbar;