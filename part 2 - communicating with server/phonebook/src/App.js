import { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [persons, setPersons] = useState([
    {
      id: nanoid(),
      name: 'Arto Hellas',
    },
  ]);
  const [newName, setNewName] = useState('');

  function isNameAlreadyAdded(name) {
    return persons.find(person => person.name === name);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    if (!newName) return;

    if (isNameAlreadyAdded(newName)) {
      alert(`${newName} is already added to the phonebook.`);
      return;
    }

    const newPersons = [
      ...persons,
      {
        id: nanoid(),
        name: newName
      },
    ];

    setPersons(newPersons);
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={ev => setNewName(ev.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p key={person.id}>{person.name}</p>)}
    </div>
  )
}

export default App;
