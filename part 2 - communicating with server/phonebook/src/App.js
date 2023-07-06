import { useState, useEffect } from 'react';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const url = 'http://localhost:3001/persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPersons(response.data);
      });
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

    axios.post(url, newPersonData)
      .then(response => {
        const newPerson = response.data;
        setPersons([...persons, newPerson]);
        setNewName('');
        setNewNumber('');
      })
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
