import StatisticLine from './StatisticLine';

function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const average = ((good - bad) / all).toFixed(2);
  const positive = ((good / all) * 100).toFixed(2) + ' %';

  return (
    <div>
      <h3>statistics</h3>
      {(good || neutral || bad)
        ? (
            <table>
              <tbody>
                <StatisticLine text='good' value={good} />
                <StatisticLine text='neutral' value={neutral} />
                <StatisticLine text='bad' value={bad} />
                <StatisticLine text='all' value={all} />
                <StatisticLine text='average' value={average} />
                <StatisticLine text='positive' value={positive} />
              </tbody>
            </table>
        )
        : <p>No feedback given</p>
      }
    </div>
  );
}

export default Statistics;
