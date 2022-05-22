import { useState, useEffect } from 'react';
import { ALL_COUNTRIES } from '../config';
import Controls from '../components/Controls';
import List from '../components/List';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const navigate = useNavigate();
  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  const fetchCountries = async () => {
    const data = await fetch(ALL_COUNTRIES).then((data) => data.json());
    setCountries(data);
  };
  return (
    <>
      <Controls onSearch={handleSearch} />
      {countries.length > 0 ? (
        <List>
          {filteredCountries.map((c) => {
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

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Home;
