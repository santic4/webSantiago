import React, { useState } from 'react';
import '../../styles/faqs/faqs.css';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAnswer = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    const faqs = [
      {
        question: '¿Qué incluye el servicio de Posicionamiento SEO?',
        answer: 'Nuestro servicio de Posicionamiento SEO optimiza tu sitio web para mejorar su visibilidad en los motores de búsqueda. Incluye análisis de palabras clave, optimización on-page, creación de contenido y construcción de enlaces.'
      },
      {
        question: '¿Qué aspectos cubre el Diseño Web?',
        answer: 'El Diseño Web abarca desde la creación de un sitio atractivo y funcional hasta la adaptación para todos los dispositivos. También incluimos el diseño de la interfaz y la experiencia del usuario (UI/UX).'
      },
      {
        question: '¿Qué es el Copywriting y cómo puede beneficiar a mi negocio?',
        answer: 'El Copywriting es la redacción de contenido persuasivo que comunica efectivamente con tu audiencia. Ayuda a mejorar la imagen de tu marca, aumentar la conversión y fortalecer la relación con tus clientes.'
      },
      {
        question: '¿Qué tipo de mantenimiento de webs ofrecen?',
        answer: 'Ofrecemos mantenimiento continuo que incluye actualizaciones de seguridad, corrección de errores, mejoras en el rendimiento y ajustes necesarios para mantener tu sitio funcionando sin problemas.'
      },
      {
        question: '¿Cómo funciona el servicio de Email Marketing?',
        answer: 'Desarrollamos campañas de email marketing personalizadas que incluyen diseño de correos, segmentación de audiencias y análisis de resultados para maximizar el impacto de tus comunicaciones con los clientes.'
      },
      {
        question: '¿Qué incluye el servicio de Diseño Gráfico?',
        answer: 'El servicio de Diseño Gráfico abarca la creación de materiales visuales como flyers, logotipos y otros elementos gráficos. Nos enfocamos en diseñar contenidos atractivos y personalizados que representen tu marca de manera profesional.'
      },
      {
        question: '¿Puedo contratar un solo servicio o necesito contratar todos?',
        answer: 'Podés contratar nuestros servicios de manera individual según tus necesidades específicas, o elegir un paquete completo para un enfoque más integral y personalizado en el desarrollo de tu presencia online.'
      },
      {
        question: '¿Cómo puedo solicitar un servicio?',
        answer: 'Para solicitar un servicio, simplemente contactanos especificando tus necesidades generales. Nos pondremos en contacto contigo para analizar tu proyecto y seguir con el proceso de manera eficiente.'
      }
    ];
    
  
    return (
      <section id="faqs">
        <div className="faqs-header">
          <h2>Preguntas Frecuentes</h2>
          <p>Resolvemos las dudas más comunes sobre nuestros servicios para que puedas tomar decisiones informadas.</p>
        </div>
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div 
                className="faq-question" 
                onClick={() => toggleAnswer(index)}
              >
                <h4>{faq.question}</h4>
                <span className="toggle-icon">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default FAQs;