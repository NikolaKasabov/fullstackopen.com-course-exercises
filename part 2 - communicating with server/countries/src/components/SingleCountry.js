function SingleCountry({ country }) {
  return (
    <>
      <h2>{country.name}</h2>
      {country.capital && <p>capital {country.capital}</p>}
      <p>area {country.area}</p>
      {country.languages.length > 0 && (
        <>
          <strong>languages:</strong>
          <ul>
            {country.languages.map(lang => <li key={lang}>{lang}</li>)}
          </ul>
        </>
      )}
      <p>
        <img src={country.flag} alt="country flag" style={{ border: '1px solid black' }} />
      </p>
    </>
  );
}

export default SingleCountry;
