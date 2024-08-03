import React from 'react';
import '../../styles/about/about-us.css'

export default function AboutUs() {
  return (
    <section className="seccion-servicios">
      <div className="contenedor">
        <h2 className="titulo-seccion">En Visión Online, nos dedicamos a ofrecer soluciones integrales y personalizadas para tu presencia en línea.</h2>
        <h3 className="intro-seccion">
          ¿Por qué contratar nuestros servicios web?
        </h3>
        <ul className="razones-lista">
          <li>🔍 <strong>Experiencia y Conocimiento:</strong> Nuestro equipo cuenta con años de experiencia en el sector y un profundo conocimiento en las últimas tendencias y tecnologías web.</li>
          <li>⚙️ <strong>Soluciones Personalizadas:</strong> Nos adaptamos a las necesidades específicas de tu negocio, ofreciendo diseños únicos y estrategias efectivas.</li>
          <li>📈 <strong>Resultados Comprobados:</strong> Hemos ayudado a numerosas empresas a mejorar su visibilidad en línea y aumentar sus conversiones.</li>
          <li>🔧 <strong>Soporte Continuo:</strong> Ofrecemos mantenimiento y soporte continuo para asegurarnos de que tu sitio web siempre esté funcionando de manera óptima.</li>
          <li>💡 <strong>Innovación Constante:</strong> Nos mantenemos al día con las últimas tecnologías y técnicas para ofrecerte soluciones modernas y efectivas.</li>
        </ul>

      </div>
    </section>
  );
};
