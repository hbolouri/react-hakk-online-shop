

import React from 'react';

import Payment from './components/Payment/Payment';

import Contact from "./components/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Men from './pages/Men/Men'
import './App.css'


function App() {
  return (
    <div className="App">

    
      <Payment/>

      <Navbar />
      <Men />
      <Contact />

    </div>
  );
}

export default App;
