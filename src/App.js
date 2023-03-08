import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import AlertTest from './Layout/AlertTest';
import DivDB from './Components/_divDatabaseTest';
import Footer from './Layout/Footer';




function App() {

  const [message, setMessage] = useState("");
  
  
    /*
    useEffect(() => {
      fetch("http://localhost:3002/test")
      .then((res) => {
        console.log(res);
        setMessage(res.json())
      })
  }, []); */

  useEffect(() => {
    axios.get("http://localhost:3002/bebidas")
      .then((res) => {
        console.log(res);
        setMessage(res.data)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <DivDB></DivDB>

      <AlertTest></AlertTest>
      <Footer></Footer>
    </div>
  );
}

export default App;