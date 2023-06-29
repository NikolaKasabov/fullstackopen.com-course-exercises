import Part from './Part';

function Content({ part1, part2, part3 }) {
  return (
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  );
}

export default Content;
