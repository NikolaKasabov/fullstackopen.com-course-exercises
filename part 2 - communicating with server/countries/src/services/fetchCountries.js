import axios from 'axios';

const url = 'https://studies.cs.helsinki.fi/restcountries/api/all';

function getAllCountries() {
  return axios.get(url);
}

export default {
  getAllCountries,
};
