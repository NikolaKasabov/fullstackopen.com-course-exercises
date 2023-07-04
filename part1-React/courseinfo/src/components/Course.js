import Content from './Content';
import Header from './Header';

function Course({course}) {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  );
}

export default Course;
