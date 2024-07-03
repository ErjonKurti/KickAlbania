import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Login from './components/Login/Login.js';
import Navbar from './components/navbar/Navbar.js';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
      {showLogin?<Login  setShowLogin={setShowLogin}/>:<></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
