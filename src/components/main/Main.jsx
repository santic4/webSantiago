import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import ScrollAnimationWrapper from '../scroll/ScrollAnimationWrapper';
import Body from '../Body/Body';
import Servicios from '../Services';
import Ads from '../ads/Ads.jsx';
import FAQs from '../faqs/FAQs.jsx';
import ContactForm from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import '../../App.css'

function Main() {
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
          <FAQs/>
        </section>
        <section id="contact">
          <ContactForm />
        </section>
        <Footer />
      </ScrollAnimationWrapper>
    </section>
  );
}

export default Main;