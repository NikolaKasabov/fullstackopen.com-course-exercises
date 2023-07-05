import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => { 
    axios.get('http://localhost:3001/persons')
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

    const newPersons = [
      ...persons,
      {
        id: nanoid(),
        name: newName,
        number: newNumber,
      },
    ];

    setPersons(newPersons);
    setNewName('');
    setNewNumber('');
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
