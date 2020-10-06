import React, { useEffect, useState } from 'react';
import { Index } from './views/Index';
import './App.css';

const URL = process.env.REACT_APP_ENDPOINT;

function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setFetchedData(json))
      .catch((error) => {
        console.error('Something has gone wrong with your fetch operation: ', error);
      });
  }, []);

  return (
    <div className="App">
      <Index data={fetchedData} />
    </div>
  );
}

export default App;
