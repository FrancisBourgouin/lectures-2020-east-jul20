const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require('pg')
const databaseHelperGenerator = require('./helpers')
require("dotenv").config();


const client = new Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DBNAME,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT,
})

const { fetchAllJokes, fetchJoke } = databaseHelperGenerator(client)
const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get("/", (req, res) => {
  res.send("Hello!");
});

app.get('/jokes', (req, res) => {
  fetchAllJokes()
    .then(dbRes => res.json(dbRes.rows))
})

app.get('/jokes/:joke_id', (req, res) => {
  fetchJoke(req.params.joke_id)
    .then(dbRes => res.json(dbRes.rows[0]))
})

client.connect(() => {
  app.listen(port, () => {
    console.log('server is ready')
  })
})


console.log(process.env)