import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../styles/scroll/ScrollAnimationWrapper.css'; 

const ScrollAnimationWrapper = ({ children }) => {
    const { ref, inView } = useInView({
      triggerOnce: true, // Ejecuta la animación solo una vez
      threshold: 0.1, // Cuánto del componente debe estar en vista para activar la animación
    });
  
    return (
      <div
        ref={ref}
        className={`scroll-animation-wrapper ${inView ? 'in-view' : ''}`}
      >
        {children}
      </div>
    );
  };
  
  export default ScrollAnimationWrapper;