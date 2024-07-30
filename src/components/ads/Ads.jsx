import React from 'react';
import '../../styles/ads/ads.css';

const Ads = () => {
  return (
    <div className='container-father'>
       
        <h3 className="titulo-subseccion">Tu web, a tu medida: desde cero o por separado.</h3>
        
        <p className='texto-subseccion'>¿Querés renovar tu sitio web o arrancar uno nuevo desde el principio? En nuestro estudio, podés contratar cualquiera de nuestros servicios:</p>
        
        <div data-aos="fade" className="servicios-lista">
            <div className="servicio">
              <h4>Posicionamiento SEO</h4>
              <div className="circulo">
                <p>Mejoramos la visibilidad de tu sitio web en los motores de búsqueda, ayudándote a alcanzar un mayor público y aumentar el tráfico orgánico.</p>
              </div>
            </div>
            <div className="servicio">
              <h4>Diseño Web</h4>
              <div className="circulo">
                <p>Creación de sitios web atractivos, funcionales y responsivos, que ofrecen una experiencia de usuario excepcional en cualquier dispositivo.</p>
              </div>
            </div>
            <div className="servicio">
              <h4>Copywriting</h4>
              <div className="circulo">
                <p>Contenido persuasivo y de alta calidad que conecta con tu audiencia, mejorando la comunicación y fortaleciendo tu marca.</p>
              </div>
            </div>
            <div className="servicio">
              <h4>Mantenimiento de Webs</h4>
              <div className="circulo">
                <p>Mantenemos tu sitio web actualizado y funcionando sin problemas, solucionando cualquier problema de código y realizando mejoras continuas.</p>
              </div>
            </div>
            <div className="servicio">
              <h4>Email Marketing</h4>
              <div className="circulo">
                <p>Desarrollamos campañas de email efectivas que te permiten comunicarte directamente con tus clientes y aumentar la fidelidad de tu marca.</p>
              </div>
            </div>
        </div>
      
    </div>
  );
};

export default Ads;