import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

// This had ought to be in an .env
const URL = 'http://localhost:3001/workout-data.json';

function App() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(json => setFetchedData(json))
    .catch(error => {
      console.error('Something has gone wrong with your fetch operation: ', error);
    });
  }, [])

  console.log('fetchedData : ', fetchedData);

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
    </div>
  );
}

export default App;
