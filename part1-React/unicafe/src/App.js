import './App.css';
import { useState } from 'react';

import Statistics from './components/Statistics';
import Button from './components/Button';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good => good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral => neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad => bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
