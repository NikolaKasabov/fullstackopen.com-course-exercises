function CountriesList({countries, handleShowClick}) {
  return (
    <div>
      {countries.map(country => <p key={country.name}>{country.name} <button onClick={() => handleShowClick(country)}>show</button></p>)}
    </div>
  );
}

export default CountriesList;
