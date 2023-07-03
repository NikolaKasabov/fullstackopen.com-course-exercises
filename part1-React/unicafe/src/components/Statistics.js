function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + ' %';

  return (
    <div>
      <h3>statistics</h3>
      {(good || neutral || bad)
        ? <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}</p>
          </>
        : <p>No feedback given</p>
      }

    </div>
  );
}

export default Statistics;
