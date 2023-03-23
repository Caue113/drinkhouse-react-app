import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import AlertTest from './Layout/AlertTest';
import DivDB from './Components/_divDatabaseTest';
import Footer from './Layout/Footer';
import { Button } from 'react-bootstrap';


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
    <>
      <main className="container">
        <DivDB></DivDB>
        <AlertTest></AlertTest>
        
        <div className='row'>

          <div className='d-flex flex-column justify-content-end' style={{backgroundColor:"red"}}>
            <h2 className=''>Sede?</h2>
            <p>Sacie com <span>The Drink House</span></p>
          </div>

          <div className=''>
            <img src='https://placekitten.com/1200/600' className='img-fluid'/>
          </div>
        </div>

        <div className='row d-flex flex-row'>
          <div className='col-2'>
            <ul>
              <li className=''>Cervejas</li>
              <li>Vinhos</li>
              <li>Chopps</li>
              <li>Sucos</li>
            </ul>
          </div>
          <div className='col-10'>
            <img src="https://placekitten.com/300/300" className='img-fluid' />
          </div>
        </div>

        <div>
          <h2>Marcas Parceiras</h2>
          <div className='flex'>
            <img />
          </div>
        </div>


        <div className="">
          <p>Procurando por Novidades?</p>
        </div>

        <div className=''>
          <h2>Conheça nossas <span>Caixas Misteriosas</span></h2>
          <img />
        </div>

        <div className='onde-encontrar'>
          <h2>Onde nos encontrar?</h2>
          <div>
            <img />
          </div>

          <div className='lugares'>
            <div>
              <p>Campinas, SP</p>
              <p>R. Dr Guilherme Silva</p>
            </div>
            <div>
              <p>Uberaba, MG</p>
              <p>Av. da Saudade</p>
            </div>
            <div>
              <p>Curitiba, PR</p>
              <p>Av. Visconde de Guarapava</p>
            </div>
          </div>
        </div>

        <div id="delivery" className='delivery'>
          <h2>Peça um <span>Delivery</span></h2>

          <div className='d-flex flex-row telefones'>
            <img />
            <ul>
              <li>(34) 3321-9999</li>
              <li>0800 999 9999</li>
            </ul>
          </div>

          <div className='d-flex flex-row telefones'>
            <img />
            <ul>
              <li>(34) 9 9999-9999</li>
            </ul>
          </div>

          <div className='d-flex flex-row'>
            <img />
            <img />
          </div>
        </div>

      </main>

      <Footer></Footer>
    </>
  );
}

export default App;