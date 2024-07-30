import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ScrollAnimationWrapper from './components/scroll/ScrollAnimationWrapper.jsx';
import Navbar from './components/navbar/Navbar';
import Body from './components/Body/Body.jsx';
import Servicios from './components/Services.jsx';
import Footer from './components/footer/Footer.jsx';
import Ads from './components/ads/Ads.jsx';
import ContactForm from './components/contact/Contact.jsx';
import FAQs from './components/faqs/FAQs.jsx';

function App() {
  
  return (
    <section className='container-app'>
      <Navbar />
      <ScrollAnimationWrapper>
        <section id="home">
          <Body />
        </section>
        <section id="about">
          <Servicios />
        </section>
        <section id="services">
          <Ads />
        </section>
        <section data-aos="fade" id="faqs">
          <FAQs />
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </ScrollAnimationWrapper>
    </section>
  );
}

export default App;
