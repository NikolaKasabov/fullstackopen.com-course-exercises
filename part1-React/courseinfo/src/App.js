import { nanoid } from 'nanoid';

import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: nanoid(),
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: nanoid(),
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: nanoid(),
        name: 'State of a component',
        exercises: 14
      },
    ],
  };

  const total = course.parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
}

export default App;
