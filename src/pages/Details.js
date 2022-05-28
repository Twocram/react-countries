import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useParams, useNavigate } from 'react-router-dom';
import { searchByCountry } from '../config';
import styled from 'styled-components';
import Info from '../components/Info';

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
`;

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    try {
      fetchAroundCountries();
    } catch (error) {
      console.log(`Error with connect: ${error}`);
    }
  }, [name]);

  const fetchAroundCountries = async () => {
    const data = await fetch(searchByCountry(name)).then((data) => data.json());
    setCountry(data[0]);
  };

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </Button>
      {country && <Info {...country} navigate={navigate} />}
    </div>
  );
};

export default Details;
