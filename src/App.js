import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import AlertTest from './Layout/AlertTest';
import DivDB from './Components/_divDatabaseTest';

/* 
async function getData()
{
    console.log("Started getData");
    const response = await fetch("http://localhost:3002/test");
    const data = await response.json();
    console.log("Finished getData");
    return data;
}
  let message2 = getData();

  message2 == null ? message2 = [{id: -1, nome: "FAILED_CASE"}] : message2 = message2;
*/

function App() {

  const [message, setMessage] = useState("");
  
  
/*   useEffect(() => {
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

      {/* <h1>Conteudo: {message[0].nome}</h1> */}

      <DivDB></DivDB>

      <AlertTest></AlertTest>
    </div>
  );
}

export default App;