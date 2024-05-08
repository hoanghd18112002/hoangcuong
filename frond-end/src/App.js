import React from 'react';
import './App.css';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="body-content outer-top-vs" id="top-banner-and-menu">
        <div className="container">
          <div className="row">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
