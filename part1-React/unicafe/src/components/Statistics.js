import StatisticLine from './StatisticLine';

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + ' %';

  return (
    <div>
      <h3>statistics</h3>
      {(good || neutral || bad)
        ? (
          <>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={all} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive} />
          </>
        )
        : <p>No feedback given</p>
      }
    </div>
  );
}

export default Statistics;
