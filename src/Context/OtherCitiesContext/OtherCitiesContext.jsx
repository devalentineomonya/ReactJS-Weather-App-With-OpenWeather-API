import React, { createContext } from 'react';
import GetRegion from '../../components/GetLocation/GetRegion/GetRegion';

const OtherCitiesContext = createContext();


const OtherCitiesProvider = ({ children }) => {
  const [countries, capitals] = GetRegion();
  return (
    <OtherCitiesContext.Provider value={{ countries, capitals }}>
      {children}
    </OtherCitiesContext.Provider>
  );
};

export { OtherCitiesProvider, OtherCitiesContext };