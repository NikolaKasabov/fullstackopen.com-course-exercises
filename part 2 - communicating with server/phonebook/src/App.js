import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [persons, setPersons] = useState([
    {
      id: nanoid(),
      name: 'Arto Hellas',
      number: '040-1234567',
    },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type='text' value={newName} onChange={ev => setNewName(ev.target.value)} />
        </div>
        <div>
          number: <input type='text' value={newNumber} onChange={ev => setNewNumber(ev.target.value)} />
        </div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App;
