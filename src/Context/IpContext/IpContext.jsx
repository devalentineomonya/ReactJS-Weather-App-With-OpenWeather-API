// IpContext.jsx

import React, { createContext, useEffect, useState } from 'react';
import GetLocation from '../GetLocation/GetLocation'; 

export const IpContext = createContext({ ip: null, city: null, countryName: null });

export const IpProvider = ({ children }) => {
  const [ipInfo, setIpInfo] = useState({ ip: null, city: null, countryName: null });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const locationInfo = await GetLocation();
        setIpInfo({
          ip: locationInfo.ip,
          city: locationInfo.city,
          countryName: locationInfo.countryName,
        });
      } catch (error) {
        console.error('Error fetching IP:', error);
      }
    };
    getLocation();
  }, []);
console.log(ipInfo);
  return (
    <IpContext.Provider value={ipInfo}>
      {children}
    </IpContext.Provider>
  );
};
