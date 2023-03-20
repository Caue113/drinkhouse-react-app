import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import AlertTest from './Layout/AlertTest';
import DivDB from './Components/_divDatabaseTest';
import Footer from './Layout/Footer';


function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/bebidas")
      .then((res) => {
        console.log(res);
        setMessage(res.data)
      })
  }, [])

  return (
    <div className="App">
      <DivDB></DivDB>
      <AlertTest></AlertTest>
      <Footer></Footer>
    </div>
  );
}

export default App;