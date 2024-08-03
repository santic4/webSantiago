import React, { useEffect, useState } from 'react';
import '../../styles/navbar/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
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
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
         
          { scrolled ? <img className='vision-logo' src='logoVO-render.png'></img> : <a href="/" className="navbar-logo">VisiónOnline</a>}

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
              <p onClick={() => scrollToSection('contact')} className="btn-contact">Contacto</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;

