import React, { useEffect, useState } from 'react';
import fetchCountryNames from './CountryNameApi'; // Adjust the path as necessary

const YourComponent = () => {
  const [countryNames, setCountryNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const names = await fetchCountryNames();
        setCountryNames(names);
      } catch (error) {
        console.error('Error fetching country names:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Country Names:</h1>
      <ul>
        {countryNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
