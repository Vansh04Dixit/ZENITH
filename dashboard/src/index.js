import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp.js';
import Login from './components/LoginPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);