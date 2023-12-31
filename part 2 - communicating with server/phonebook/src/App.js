import { useState, useEffect } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personsService from './services/persons';
import Notification from './components/Notification';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null);

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

    // update the number of existing name
    const existingPerson = isNameAlreadyAdded(newName);
    if (existingPerson) {
      const shouldUpdate = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`);
      if (shouldUpdate) {
        const personNewData = {
          ...existingPerson,
          number: newNumber,
        };

        personsService
          .update(existingPerson.id, personNewData)
          .then(data => {
            const updatedPersons = persons.map(person => person.id === existingPerson.id ? personNewData : person);
            setPersons(updatedPersons);
            showMessage(`Updated phone number for ${newName}.`);
            setNewName('');
            setNewNumber('');
          })
      }

      return;
    }

    // add new person
    const newPersonData = {
      name: newName,
      number: newNumber,
    };

    personsService
      .create(newPersonData)
      .then(newPerson => {
        setPersons([...persons, newPerson]);
        showMessage(`Added ${newName}.`);
        setNewName('');
        setNewNumber('');
      });
  }

  function handleDelete(id) {
    personsService
      .deletePerson(id)
      .then(res => {
        if (res.status === 200) {
          const newPersons = persons.filter(person => person.id !== id);
          setPersons(newPersons);
        }
      })
      .catch(err => {
        const person = persons.find(person => person.id === id);
        showMessage(`Information of ${person?.name} has already been removed from server.`, 'error');
      });
  }

  function showMessage(text, type = '') {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  }

  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification text={message?.text} type={message?.type} />

      <Filter filter={filter} setFilter={setFilter} />

      <PersonForm
        onSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} handleDelete={handleDelete} />
    </div>
  )
}

export default App;
