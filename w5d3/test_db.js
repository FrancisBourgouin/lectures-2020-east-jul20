const { Client } = require('pg')

const client = new Client({
  user: 'francis',
  host: 'localhost',
  database: 'puns',
  password: 'francis',
  port: 5432,
})

client.connect()

client.query('SELECT * FROM authors', (err, res) => {
  console.log(err, res.rows)
  console.table(res.rows)
  client.end()
})