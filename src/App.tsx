import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Index } from './views/Index';
import { InitialDataProps } from './Utilities';

const AppContainer = styled.div`
  text-align: center;
`;

const URL = process.env.REACT_APP_ENDPOINT || '';

function App() {
  const [fetchedData, setFetchedData] = useState<InitialDataProps>();
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setFetchedData(json))
      .catch((error) => {
        console.error('Something has gone wrong with your fetch operation: ', error);
      });
  }, []);

  return (
    <AppContainer className="App">
      <Index data={fetchedData} />
    </AppContainer>
  );
}

export default App;
