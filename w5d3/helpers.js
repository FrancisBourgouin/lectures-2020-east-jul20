// const fetchAllJokes = () => {
//   return client.query('SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id')
// }
// const fetchJoke = (id) => {
//   return client.query('SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = $1', [id])
// }

// module.exports = { fetchAllJokes, fetchJoke }


const databaseHelperGenerator = client => {
  const fetchAllJokes = () => {
    return client.query('SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id')
  }
  const fetchJoke = (id) => {
    return client.query('SELECT * FROM jokes JOIN authors ON authors.id = jokes.author_id WHERE jokes.id = $1', [id])
  }

  // const output = {}
  // output.fetchAllJokes = fetchAllJokes
  // output.fetchJoke = fetchJoke
  // return output

  return { fetchAllJokes, fetchJoke }
}

module.exports = databaseHelperGenerator