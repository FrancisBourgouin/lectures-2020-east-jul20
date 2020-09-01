import React from 'react'

const Player = (props) => {
  const { name, main, nickname } = props
  return (
    <article>
      <h1>{name}, also known as {nickname}</h1>
      <h2>Mains the {main} character</h2>
    </article>
  )
}

export default Player