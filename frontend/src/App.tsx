import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './markup/component/Header/Header';
import Footer from './markup/component/Footer/Footer';
import Home from './markup/pages/Home';
function App() {
  return (
    <div className=''>
      {/* <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} /> 
      </Routes>
    </Router> */}
    <Home />
    </div>
  );
}

export default App;