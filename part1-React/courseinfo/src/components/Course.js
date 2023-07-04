import Content from './Content';
import Header from './Header';
import Total from './Total';

function Course({ course }) {
  const total = course.parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  );
}

export default Course;
