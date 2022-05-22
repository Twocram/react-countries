import { useState, useEffect } from 'react';
import { ALL_COUNTRIES } from '../config';
import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';

const Home = () => {
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
      <Controls />
      <List>
        {countries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          };

          return <Card key={c.name} {...countryInfo} />;
        })}
      </List>
    </>
  );
};

export default Home;
