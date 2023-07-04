import { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function getRandomIndex(arrLength) {
    return Math.floor(Math.random() * arrLength);
  }

  function getMostVotesAnecdoteIndex() {
    let mostVotes = 0;
    let mostVotesIndex = 0;

    for (let i = 1; i < votes.length; i++) {
      if (votes[i] > mostVotes) {
        mostVotes = votes[i];
        mostVotesIndex = i;
      }
    }

    return mostVotesIndex;
  }

  function handleVoteClick() {
    const votesCopy = [...votes];
    votesCopy[selected]++;
    setVotes(votesCopy);
  }

  function handleNextClick() {
    let randomIndex = getRandomIndex(anecdotes.length);

    while (randomIndex === selected) {
      randomIndex = getRandomIndex(anecdotes.length);
    }

    setSelected(randomIndex);
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <p>Has {votes[selected]} votes.</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      <h3>Anecdote with most votes</h3>
      <p>{anecdotes[getMostVotesAnecdoteIndex()]}</p>
    </>
  );
}

export default App;
