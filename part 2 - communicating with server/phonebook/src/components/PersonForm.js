function PersonForm({onSubmit, newName, setNewName, newNumber, setNewNumber}) {
  return (
    <form onSubmit={onSubmit}>
      <h3>add a new</h3>
      <div>
        name: <input type='text' value={newName} onChange={ev => setNewName(ev.target.value)} />
      </div>
      <div>
        number: <input type='text' value={newNumber} onChange={ev => setNewNumber(ev.target.value)} />
      </div>
      <div><button type="submit">add</button></div>
    </form>
  );
}

export default PersonForm;
