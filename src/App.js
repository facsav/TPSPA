// src/App.js
import React from 'react';
import './App.css';
import Game from './componentes/Juego';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/juego" element={<Game />} />
        </Routes> 

    </BrowserRouter>
  );
}

export default App;
