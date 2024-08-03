import React from 'react';
import '../../styles/services/services.css'
const Services = () => {
  return (
    <div className='container-father'>

      <div className="servicios-lista">
        <div className="servicio">
          <h4>Posicionamiento SEO</h4>
          <div className="circulo">
          <img className='img-seo' alt='seo-google' src='seo.gif'></img>
          <p>Mejoramos la visibilidad de tu sitio web en los motores de búsqueda, ayudándote a alcanzar un mayor público y aumentar el tráfico orgánico.</p>
          </div>
        </div>
        <div className="servicio">
          <h4>Diseño Web</h4>
          <div className="circulo">
          <img className='img-ux' alt='diseño-web' src='ux-img.gif'></img>
            <p>Creación de sitios web atractivos, funcionales y responsivos, que ofrecen una experiencia de usuario excepcional en cualquier dispositivo.</p>
          </div>
        </div>
        <div className="servicio">
          <h4>Creación de Contenido</h4>
          <div className="circulo">
            <img className='copywriting-icon' alt='content-creator' src='blog.gif'></img>
            <p>Desarrollamos contenido atractivo y relevante para tu web y redes sociales, ayudando a conectar con tu audiencia y potenciar tu presencia en línea.</p>
          </div>
        </div>
        <div className="servicio">
          <h4>Mantenimiento de Webs</h4>
          <div className="circulo">
            <img className='maintenance-icon' alt='maintence-web' src='maintenance-icon.gif'></img>
            <p>Mantenemos tu sitio web actualizado y funcionando sin problemas, solucionando cualquier problema de código y realizando mejoras continuas.</p>
          </div>
        </div>
        <div className="servicio">
          <h4>Email Marketing</h4>
          <div className="circulo">
            <img className='email-marketing' alt='email-ads' src='email-marketing.gif'></img>
            <p>Desarrollamos campañas de email efectivas que te permiten comunicarte directamente con tus clientes y aumentar la fidelidad de tu marca.</p>
          </div>
        </div>
        <div className="servicio">
          <h4>Diseño Gráfico</h4>
          <div className="circulo">
            <img className='graphics-design' alt='diseño-grafico-icon' src='graphics-design.gif'></img>
            <p>Creación de flyers, logotipos y otros elementos gráficos, para potenciar la imagen de tu marca y capturar la atención de tu público.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;