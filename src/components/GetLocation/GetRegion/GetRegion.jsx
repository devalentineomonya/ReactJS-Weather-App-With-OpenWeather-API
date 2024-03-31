import React, { useContext } from 'react'
import { LocationContext } from '../../../Context/LocationContext/LocationContext'

const continentData = {
    NA: {
      countries: ["Canada", "United States", "Mexico", "Guatemala", "Cuba", "Haiti", "Dominican Republic", "Honduras", "Nicaragua", "El Salvador", "Costa Rica", "Panama", "Jamaica", "Trinidad and Tobago", "Bahamas"],
      capitals: ["Ottawa", "Washington D.C.", "Mexico City", "Guatemala City", "Havana", "Port-au-Prince", "Santo Domingo", "Tegucigalpa", "Managua", "San Salvador", "San Jose", "Panama City", "Kingston", "Port of Spain", "Nassau"]
    },
    SA: {
      countries: ["Brazil", "Argentina", "Peru", "Colombia", "Venezuela", "Chile", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname"],
      capitals: ["Brasília", "Buenos Aires", "Lima", "Bogotá", "Caracas", "Santiago", "Quito", "Sucre", "Asunción", "Montevideo", "Georgetown", "Paramaribo"]
    },
    EU: {
      countries: ["Russia", "Germany", "United Kingdom", "France", "Italy", "Spain", "Ukraine", "Poland", "Romania", "Netherlands", "Belgium", "Czech Republic", "Greece", "Portugal", "Sweden"],
      capitals: ["Moscow", "Berlin", "London", "Paris", "Rome", "Madrid", "Kyiv", "Warsaw", "Bucharest", "Amsterdam", "Brussels", "Prague", "Athens", "Lisbon", "Stockholm"]
    },
    AF: {
      countries: ["Nigeria", "Ethiopia", "Egypt", "DR Congo", "Tanzania", "South Africa", "Kenya", "Uganda", "Algeria", "Sudan", "Morocco", "Angola", "Mozambique", "Ghana", "Madagascar"],
      capitals: ["Abuja", "Addis Ababa", "Cairo", "Kinshasa", "Dodoma", "Pretoria", "Nairobi", "Kampala", "Algiers", "Khartoum", "Rabat", "Luanda", "Maputo", "Accra", "Antananarivo"]
    },
    AS: {
      countries: ["China", "India", "Indonesia", "Pakistan", "Bangladesh", "Japan", "Philippines", "Vietnam", "Turkey", "Iran", "Thailand", "Myanmar", "South Korea", "Iraq", "Afghanistan"],
      capitals: ["Beijing", "New Delhi", "Jakarta", "Islamabad", "Dhaka", "Tokyo", "Manila", "Hanoi", "Ankara", "Tehran", "Bangkok", "Naypyidaw", "Seoul", "Baghdad", "Kabul"]
    },
    OC: {
      countries: ["Australia", "Papua New Guinea", "New Zealand", "Fiji", "Solomon Islands", "Vanuatu", "New Caledonia", "French Polynesia", "Samoa", "Micronesia", "Guam", "Kiribati", "Tonga", "Marshall Islands", "Palau"],
      capitals: ["Canberra", "Port Moresby", "Wellington", "Suva", "Honiara", "Port Vila", "Nouméa", "Papeete", "Apia", "Palikir", "Hagåtña", "Tarawa", "Nukuʻalofa", "Majuro", "Ngerulmud"]
    },
    AN: {
      countries: ["Antarctica"],
      capitals: [""]
    }
  };

  
const GetRegion = () => {
    const { locationInfo } = useContext(LocationContext);
    const { continentCode } = locationInfo;
  
    const getContinentData = (code) => {
      return continentData[code] || { countries: [], capitals: [] };
    };
  
    const { countries, capitals } = getContinentData(continentCode);
  
    return [ countries, capitals ];
  };
  
  export default GetRegion;
