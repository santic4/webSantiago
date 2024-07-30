import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main/Main.jsx';

function App() {
  
  return (

    <BrowserRouter>

    <section className='app'>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </section>
  
    </BrowserRouter>

  );
}

export default App;
