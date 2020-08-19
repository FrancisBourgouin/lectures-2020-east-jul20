const { Client } = require('pg')
const databaseHelperGenerator = require('./helpers')
const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'puns',
  password: 'francis',
  port: 5432,
})
const { fetchAllJokes } = databaseHelperGenerator(client)
const parseJoke = jokeObj => {
  console.log(jokeObj.question)
  setTimeout(() => console.log(jokeObj.answer), 1500)
  setTimeout(() => console.log(`This joke was provided for you for for free by ${jokeObj.name}`), 2500)
}

// const fetchJokes = () => {
//   return client.query('SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id')
// }

client.connect()

// client.query('SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id', (err, res) => {
//   // console.log(res.rows)
//   const randomIndex = Math.floor(Math.random() * res.rowCount)
//   parseJoke(res.rows[randomIndex])
//   client.end()
// })


fetchAllJokes()
  .then(res => {
    const randomIndex = Math.floor(Math.random() * res.rowCount)
    parseJoke(res.rows[randomIndex])
  })
  .finally(() => client.end())

// Considering that a joke looks like this:

// const randomJoke = {
//   id: 2,
//   question: 'How do you know that a mathematician planted a tree ?',
//   answer: 'It has square roots.',
//   author_id: 5
// }

// console.log(randomJoke.question)
// console.log(randomJoke.answer)
// console.log(`This joke was provided for you for for free by ${randomJoke.author_id}`)

