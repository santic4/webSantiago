import React, { useState } from 'react';
import '../../styles/contact/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', { // Reemplaza YOUR_FORM_ID con tu ID de Formspree
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Hubo un problema al enviar tu mensaje. Intenta de nuevo.');
      }
    } catch (error) {
      setError('Hubo un problema al enviar tu mensaje. Intenta de nuevo.');
    }
  };

  return (
    <section id="contact">
      <div className="contact-header">
        <h2>Contactanos</h2>
        <p>Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo o escanee el código QR.</p>
        <img className='qr-escan' alt='qr-wsp' src='qr-escan.png'></img>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Tu correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <select 
            id="subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required
          >
            <option value="">Selecciona un asunto</option>
            <option value="Posicionamiento SEO">Posicionamiento SEO</option>
            <option value="Diseño Web">Diseño Web</option>
            <option value="Copywriting">Copywriting</option>
            <option value="Mantenimiento de Webs">Mantenimiento de Webs</option>
            <option value="Email Marketing">Email Marketing</option>
            <option value="Web Completa">Web Completa</option>
            <option value="Consulta General">Consulta General</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="5" 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Enviar</button>
        {submitted && <p className="success-message">¡Tu mensaje ha sido enviado con éxito!</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
};

export default ContactForm;