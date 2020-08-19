const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'puns',
  password: 'francis',
  port: 5432,
})

// first two of argv are path, file
// const question = process.argv[2]
// const answer = process.argv[3]
// const author_id = process.argv[4]

const [, , question, answer, author_id] = process.argv


console.log(question, answer, author_id)

client.connect()

const insertJokeDANGER = () => {
  return client.query(`INSERT INTO jokes (question, answer, author_id) VALUES ('${question}', '${answer}', ${author_id}) RETURNING *`)
}
const insertJoke = () => {
  const values = [question, answer, author_id]
  return client.query(`INSERT INTO jokes (question, answer, author_id) VALUES ($1,$2,$3) RETURNING *`, values)
}

insertJoke()
  .then(res => console.log(res.rows[0]))
  .finally(() => client.end())

