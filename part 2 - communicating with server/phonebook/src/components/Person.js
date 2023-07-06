function Person({ person, handleDelete }) {
  function handleClick() {
    const shouldDelete = window.confirm(`Delete ${person.name}?`);
    if (shouldDelete) {
      handleDelete(person.id);
    }
  }

  return <p>{person.name} {person.number} <button onClick={handleClick}>delete</button></p>;
}

export default Person;
