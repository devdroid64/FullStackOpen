
import {useState} from 'react';

const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.voteHandler}>vote</button>
      <button onClick={props.handleClick}>next anecdote</button>
    </div>
  )
}


const Header = (props) => {
  return (
    <h1> {props.text} </h1>
  )
}


const MaxAnecdote = (props) => {

  const {votes, anecdotes} = props
  let mxAnecdoteIdx = null;
  let maxVotes = Number.NEGATIVE_INFINITY
  for(const key in votes) {
    if(votes.hasOwnProperty(key)) {
      if(votes[key] > maxVotes) {
        maxVotes = votes[key]
        mxAnecdoteIdx = key
      }
    }
  }


  return (
    <div>
      {anecdotes[mxAnecdoteIdx]}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const initVotes = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  }

  const [votes, setVotes] = useState(initVotes);


  const handleClick = () => {
    const l = anecdotes.length;
    const randomIdx = Math.floor(Math.random() * l);
    setSelected(randomIdx);
  }

  const voteHandler = () => {
    const copy = {...votes}
    copy[selected] += 1
    setVotes(copy);
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      {anecdotes[selected]} <br />
      {"has " + votes[selected] + " votes"}
      <Buttons handleClick={handleClick} voteHandler={voteHandler}/>
      <Header text="Anecdote with most votes"/>
      <MaxAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App;
