import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useParams, useNavigate } from 'react-router-dom';
import { searchByCountry } from '../config';
import styled from 'styled-components';

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;
  display: flex;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
`;

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchAroundCountries();
  }, [name]);

  console.log(country);

  const fetchAroundCountries = async () => {
    const data = await fetch(searchByCountry(name)).then((data) => data.json());
    setCountry(data[0]);
  };

  return (
    <div>
      <Button onClick={() => navigate('/')}>Go back</Button>
    </div>
  );
};

export default Details;
