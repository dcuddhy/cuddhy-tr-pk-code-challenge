import React, { useEffect, useState } from 'react';
import { Index } from './views/index';
import './App.css';

// This will need to match wherever your data is being served from.
const URL = 'http://localhost:3001/workout-data.json';

function App() {
  const [fetchedData, setFetchedData] = useState();
  console.log('fetchedData: ', fetchedData);
  useEffect(() => {
    fetch(URL)
    .then(response => response.json())
    .then(json => setFetchedData(json))
    .catch(error => {
      console.error('Something has gone wrong with your fetch operation: ', error);
    });
  }, [])

  return (
    <div className="App">
      <Index data={fetchedData} />
    </div>
  );
}

export default App;
