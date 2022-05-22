import Controls from './components/Controls';
import Header from './components/Header';
import { Main } from './components/Main';
import { useState, useEffect } from 'react';
import { ALL_COUNTRIES } from './config';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const data = await fetch(ALL_COUNTRIES).then((data) => data.json());
    setCountries(data);
  };
  return (
    <>
      <Header />
      <Main>
        <Controls />
      </Main>
    </>
  );
}

export default App;
