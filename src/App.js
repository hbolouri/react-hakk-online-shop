

import React from 'react';

import Payment from './components/Payment/Payment';

import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Men from './pages/Men/Men'
import './App.css'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">

    
      <Payment/>

      <Navbar />
      <Men />
      <Contact />
      <Footer/>

    </div>
  );
}

export default App;
