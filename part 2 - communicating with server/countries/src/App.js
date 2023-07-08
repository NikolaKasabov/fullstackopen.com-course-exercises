import { useEffect, useState } from 'react';

import './App.css';
import fetchCountries from './services/fetchCountries';
import SingleCountry from './components/SingleCountry';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredCountries, setfilteredCountries] = useState([]);

  useEffect(() => {
    fetchCountries
      .getAllCountries()
      .then(res => {
        const countriesData = res.data.map(item => ({
          name: item?.name?.common,
          capital: item?.capital && item?.capital[0],
          area: item?.area,
          languages: Object.values(item?.languages || []),
          flag: item?.flags?.png,
        }));

        setCountries(countriesData);
      })
      .catch(err => console.log(err));
  }, []);

  // filter countries on input change
  function handleSearchInput(ev) {
    const inputValue = ev.target.value;
    setFilter(inputValue);
    const filteredCountriesData = countries.filter(country => country?.name?.toLowerCase().includes(inputValue.toLowerCase()));
    setfilteredCountries(filteredCountriesData);
  }

  // show the country with clicked 'show' button
  function handleShowClick(country) {
    setfilteredCountries([country]);
  }

  // displays countries/country data
  let result;

  if (filter.length > 0) {
    if (filteredCountries.length > 10) {
      result = <p>Too many matches, specify another filter.</p>;
    }

    if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      result = <CountriesList countries={filteredCountries} handleShowClick={handleShowClick} />;
    }

    if (filteredCountries.length === 1) {
      result = <SingleCountry country={filteredCountries[0]} />;
    }
  }

  return (
    <div className="App">
      find countries: &nbsp;
      <input type="text" value={filter} onChange={handleSearchInput} />

      {result}
    </div>
  );
}

export default App;
