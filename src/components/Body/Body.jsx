import React, { useState, useEffect } from 'react';
import Trail from './Trail.jsx';
import '../../styles/body/body.css'
const texts = [
  ['Blogs', 'eCommerce', 'Portafolio'],
  ['Reviews', 'Servicios', 'Galerías']
];

export default function Body() {
  const [open, setOpen] = useState(true);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen(false);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setOpen(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='container-father-header'>

      <div className='left-side'>
    
        <div className={'container'}>
            <Trail open={open} items={texts[textIndex]}>
              {texts[textIndex].map((text, index) => (
                <span key={index}>{text}</span>
              ))}
            </Trail>
        </div>

      </div>

      <div className='right-side'>

        <div className='container-right'>
          <h1>Transformá tu visión digital en realidad.</h1>
          <h2>Tu sitio web será único, desde el diseño hasta la funcionalidad.</h2>
          <div className='container-btn-head'>
            <button>Contactanos</button>
          </div>
        </div>

      </div>

    </section>

  );
}