import logo from './logo.svg';
import './App.css';
import AlertTest from './AlertTest';




function App() {

  const mysql = require('mysql2');
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "testing_db"
  });

  module.exports = connection;

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

      {/* Below is to test a connection to a database */}

      <AlertTest></AlertTest>




    </div>
  );
}

export default App;