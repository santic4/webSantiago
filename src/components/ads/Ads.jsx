import React from 'react';
import '../../styles/ads/anuncio.css';

const Ads = () => {
    return (
        <section className="publicidad-section">
          <div className="publicidad-contenedor">
            <h2 className="publicidad-titulo">¡Transforma tu presencia digital con Visión Online!</h2>
            <p className="publicidad-texto">
              Explora nuestras soluciones de diseño web y gráfico para llevar tu negocio al siguiente nivel. 
              Innovación, creatividad y tecnología de punta para hacer realidad tus ideas.
            </p>
            <a href="#servicios" className="publicidad-boton">Descubre más</a>
          </div>
        </section>
      );
};

export default Ads;