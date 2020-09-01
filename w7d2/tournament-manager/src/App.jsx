import React, { useState } from 'react';
import Intro from './Intro';
import './App.css';
import Players from './Players';
import Form from './Form';


// Players
// name
// nickname
// main
const playerOne = {
  id: 1,
  name: "Francis",
  nickname: "Cadaei",
  main: "Inkling"
}
const playerTwo = {
  id: 2,
  name: "Joao",
  nickname: "Jojotao",
  main: "Falco"
}
// Matches
// player1 <- 
// player2 <-
// winner <-

const match = {
  id: 1,
  player1: 1,
  player2: 2,
  winner: null
}
function App() {
  const [intro, setIntro] = useState(false)
  const [players, setPlayers] = useState({ 1: playerOne, 2: playerTwo })
  const [matches, setMatches] = useState({ 1: match })

  const addNewMatch = (matchData) => {
    const matchLength = Object.keys(matches).length
    setMatches(prevState => ({ ...prevState, [(Object.keys(prevState).length + 1)]: matchData }))
    setMatches(prevState => ({ ...prevState, [(Object.keys(prevState).length + 1)]: matchData }))
    setMatches(prevState => ({ ...prevState, [(Object.keys(prevState).length + 1)]: matchData }))
    setMatches(prevState => ({ ...prevState, [(Object.keys(prevState).length + 1)]: matchData }))
  }
  let bob = 1
  console.log(bob)

  bob++
  return (
    <div className="App">
      {false && <Intro intro={intro} setIntro={setIntro} />}
      <h1>Game tournament management system</h1>
      <Players {...{ players }} />
      {/* <Players players={players} /> */}
      <Form {...{ players, setMatches, addNewMatch }} />
    </div>
  );
}

export default App;
