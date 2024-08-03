import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import ScrollAnimationWrapper from '../scroll/ScrollAnimationWrapper';
import Body from '../Body/Body';
import Ads from '../ads/Ads.jsx';
import FAQs from '../faqs/FAQs.jsx';
import ContactForm from '../contact/Contact.jsx';
import Footer from '../footer/Footer.jsx';
import '../../App.css'
import Services from '../services/Services.jsx'
import AboutUs from '../about/AboutUs.jsx';

function Main() {
  return (
    <section className='container-app'>
      <Navbar />
      <ScrollAnimationWrapper>
        <section data-aos="fade" id="home">
          <Body />
        </section>
        <section data-aos="fade"  id="ads">
          <Ads />
        </section>
        <section data-aos="fade" id="services">
          <Services />
        </section>
        <section data-aos="fade" id="about">
          <AboutUs />
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