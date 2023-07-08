import { useEffect, useState } from 'react';

import './App.css';
import fetchCountries from './services/fetchCountries';

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

  function handleSearchInput(ev) {
    const inputValue = ev.target.value;
    setFilter(inputValue);
    const filteredCountriesData = countries.filter(country => country?.name?.toLowerCase().includes(inputValue.toLowerCase()));
    setfilteredCountries(filteredCountriesData);
  }

  let result;

  if (filter.length > 0) {
    if (filteredCountries.length > 10) {
      result = <p>Too many matches, specify another filter.</p>;
    }

    if (filteredCountries.length > 1 && filteredCountries.length < 10) {
      result = (
        <div>
          {filteredCountries.map(country => <p key={country.name}>{country.name}</p>)}
        </div>
      );
    }

    if (filteredCountries.length === 1) {
      result = (
        <>
          <h2>{filteredCountries[0].name}</h2>
          {filteredCountries[0].capital && <p>capital {filteredCountries[0].capital}</p>}
          <p>area {filteredCountries[0].area}</p>
          {filteredCountries[0].languages.length > 0 && (
            <>
              <strong>languages:</strong>
              <ul>
                {filteredCountries[0].languages.map(lang => <li key={lang}>{lang}</li>)}
              </ul>
            </>
          )}
          <p>
            <img src={filteredCountries[0].flag} alt="country flag" style={{border: '1px solid black'}} />
          </p>
        </>
      );
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
