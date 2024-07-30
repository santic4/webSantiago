import React from 'react';
import '../../styles/footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-content">
        <p>&copy; 2024 [Nombre de tu empresa]. Todos los derechos reservados.</p>
        <nav>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre nosotros</a></li>
            <li><a href="#services">Servicios</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;