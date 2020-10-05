import React, { useEffect, useState } from 'react';
import { Index } from './views/index';
import './App.css';

const URL = process.env.REACT_APP_ENDPOINT;
console.log('process.env.REACT_APP_ENDPOINTZ: ', process.env.REACT_APP_ENDPOINTZ);
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

  return (
    <div className="App">
      <Index data={fetchedData} />
    </div>
  );
}

export default App;
