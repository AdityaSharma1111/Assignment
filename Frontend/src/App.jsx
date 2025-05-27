import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* Render home only at root OR use Outlet for child routes */}
      <Outlet /> {/*this allows nested routes like /buy, /about to render */}
      <Footer />
    </>
  );
}

export default App;
