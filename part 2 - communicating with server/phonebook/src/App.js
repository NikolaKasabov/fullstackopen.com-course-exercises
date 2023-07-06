import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    personsService
      .getAll()
      .then(data => setPersons(data));
  }, []);

  function isNameAlreadyAdded(name) {
    return persons.find(person => person.name === name);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    if (isNameAlreadyAdded(newName)) {
      alert(`${newName} is already added to the phonebook.`);
      return;
    }

    const newPersonData = {
      name: newName,
      number: newNumber,
    };
    
    personsService
      .create(newPersonData)
      .then(newPerson => {
        setPersons([...persons, newPerson]);
        setNewName('');
        setNewNumber('');
      });
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />

      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} />
    </div>
  )
}

export default App;
