// LocationContext.jsx

import React, { createContext, useEffect, useState } from 'react';
import GetLocation from '../../components/GetLocation/GetLocation';

export const LocationContext = createContext({ ip: null, city: null, countryName: null });

export const LocationContextProvider = ({ children }) => {
  const [locationInfo, setLocationInfo] = useState({ ip: null, city: null, countryName: null, continentCode:null });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const locationInfo = await GetLocation();
        setLocationInfo({
          ip: locationInfo.ip,
          city: locationInfo.city,
          countryName: locationInfo.countryName,
          continentCode:locationInfo.continentCode
        });
      } catch (error) {
        console.error('Error from Location Context => fetching IP:', error);
      }
    };
    getLocation();
  }, []);
  return (
    <LocationContext.Provider value={{locationInfo, setLocationInfo}}>
      {children}
    </LocationContext.Provider>
  );
};
