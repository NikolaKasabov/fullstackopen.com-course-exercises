import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: nanoid() },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: nanoid() },
    { name: 'Dan Abramov', number: '12-43-234345', id: nanoid() },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: nanoid() },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);

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

  function handleFilter(ev) {
    const filterValue = ev.target.value;
    setFilter(filterValue);
    const filtered = persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase()));
    setFilteredPersons(filtered);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input type='text' value={filter} onChange={handleFilter} />
      </div>

      <form onSubmit={handleSubmit}>
        <h3>add a new</h3>
        <div>
          name: <input type='text' value={newName} onChange={ev => setNewName(ev.target.value)} />
        </div>
        <div>
          number: <input type='text' value={newNumber} onChange={ev => setNewNumber(ev.target.value)} />
        </div>
        <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
      {filteredPersons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App;
