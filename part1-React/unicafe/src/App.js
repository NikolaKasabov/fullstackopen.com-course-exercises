import './App.css';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good => good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral => neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad => bad + 1)}>bad</button>
      <h3>statistics</h3>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
}

export default App;
