import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import ContactForm from './components/contact/Contact.jsx';
import AboutUs from './components/about/AboutUs.jsx';

function App() {
  
  return (

    <BrowserRouter>
      <Navbar />
    <section className='app'>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactForm />} />
    </Routes>
    </section>

    </BrowserRouter>

  );
}

export default App;
