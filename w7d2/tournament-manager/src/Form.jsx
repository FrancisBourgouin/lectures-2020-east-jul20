import React, { useState } from 'react'

const Form = (props) => {
  const { players, setMatches, addNewMatch } = props
  const [formData, setFormData] = useState({
    player1: "",
    player2: "",
    winner: ""
  })

  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [winner, setWinner] = useState("")

  const arr = [1, 2, 3, 4, 5]

  const output = []
  arr.forEach(number => output.push(number * 2))

  const output2 = arr.map(number => number * 2)

  const handleChange = (event) => {
    const newFormData = { ...formData }
    newFormData[event.target.name] = event.target.value
    // formData["player1"] = 2
    // setFormData(newFormData)
    // setFormData({ ...formData, winner: event.target.value })
    // setFormData({ ...newFormData, winner: event.target.value })
    setFormData(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
    setFormData(prevState => ({ ...prevState, winner: event.target.value }))
  }

  const handleSubmitOld = (event) => {
    event.preventDefault()

    setMatches(prevState => {
      const newId = Object.keys(prevState).length + 1
      console.log('prevstate', prevState)
      console.log('formData', formData)
      console.log('newId', newId)
      return ({
        ...prevState, [newId]: formData
      })
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    addNewMatch(formData)
  }

  // const parsedOptions = Object.values(players).map(player => <option key={player.id} value={player.id}>{player.name}</option>)
  const parsedOptions = Object.values(players).map(({ id, name }) => <option key={id} value={id}>{name}</option>)
  return (
    <form onSubmit={handleSubmit}>
      <select name="player1" value={formData.player1} onChange={handleChange}>
        <option value=""></option>
        {parsedOptions}
      </select>
      <select name="player2" value={formData.player2} onChange={handleChange}>
        <option value=""></option>
        {parsedOptions}
      </select>
      <select name="winner" value={formData.winner} onChange={handleChange}>
        <option value=""></option>
        {parsedOptions}
      </select>
      <button type="submit">Add new match!</button>
    </form>
  )
}

export default Form