import React, { useEffect, useState } from 'react';
import { Index } from './views/index';
import './App.css';

// This had ought to be in an .env
const URL = 'http://localhost:3001/workout-data.json';

function App() {
  const [fetchedData, setFetchedData] = useState();

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
      <Index data={fetchedData} />
    </div>
  );
}

export default App;
