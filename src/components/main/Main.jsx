import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import ScrollAnimationWrapper from '../scroll/ScrollAnimationWrapper';
import Body from '../Body/Body';
import About from '../about/About.jsx';
import Ads from '../ads/Ads.jsx';
import FAQs from '../faqs/FAQs.jsx';
import ContactForm from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import '../../App.css'
import Services from '../services/Services.jsx'

function Main() {
  return (
    <section className='container-app'>
      <Navbar />
      <ScrollAnimationWrapper>
        <section id="home">
          <Body />
        </section>
        <section id="ads">
          <Ads />
        </section>
        <section data-aos="fade" id="faqs">
          <Services />
        </section>
     
        <section id="about">
          <About />
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