import axios from 'axios';

const fetchCountryNames = async () => {
  try {
    const response = await axios.get('http://api.first.org/data/v1/countries?region=africa&limit=15&pretty=true');
    const countryData = response.data.data;
    const countryNames = Object.values(countryData).map(country => country.country);
    console.log(countryNames);
    return countryNames;
  } catch (error) {
    console.error('Error fetching country data:', error);
    return [];
  }
};

export default fetchCountryNames;
