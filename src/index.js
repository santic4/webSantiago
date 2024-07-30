import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

// Inicializa AOS
AOS.init({
  duration: 1200, // Duración de las animaciones en milisegundos
  easing: 'ease-in-out', // Efecto de suavizado
  once: true, // Si las animaciones deben ejecutarse solo una vez
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
