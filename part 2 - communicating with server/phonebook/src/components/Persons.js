import Person from './Person';

function Persons({ persons }) {
  return (
    <>
      {persons.map(person => <Person key={person.id} person={person} />)}
    </>
  );
}

export default Persons;
