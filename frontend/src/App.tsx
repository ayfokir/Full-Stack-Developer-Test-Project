import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './markup/component/Header/Header';
import Footer from './markup/component/Footer/Footer';
import Home from './markup/pages/Home';
import store from './markup/redux/store/Store';
import { Provider } from 'react-redux';
function App() {
  return (
    <div className=''>
      <Provider store={store}>      {/* <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/add-employee" element={<AddEmployee />} /> 
      </Routes>
    </Router> */}
    <Home />
    </Provider>

    </div>
  );
}

export default App;