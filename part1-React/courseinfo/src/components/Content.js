import Part from './Part';

function Content({ parts }) {
  return (
    <>
      {parts.map(part => {
        return <Part key={part.id} part={part} />
      })}
    </>
  );
}

export default Content;
