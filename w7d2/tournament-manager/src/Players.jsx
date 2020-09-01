import React from 'react'
import Player from './Player'

const Players = (props) => {
  const { players } = props

  const parsedPlayers = Object.values(players).map(player => <Player key={player.id} {...player} />)
  return (
    <section>
      <h1>Player list</h1>
      {parsedPlayers}
    </section>
  )
}

export default Players