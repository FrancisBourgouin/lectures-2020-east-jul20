const express = require("express");
const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt');
const app = express();

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const port = 3000;
const hash =

  app.use(express.static("public"));
// app.use(cookieParser())
app.use(cookieSession({
  name: 'session',
  keys: ['IamWritingSometheingBecauseWhynot', 'I like space a a a a a a']
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const userDatabaseIsh = {
  bob: {
    username: "bob",
    name: "Robert J. Oppenheimer",
    password: bcrypt.hashSync("boomer", salt)
  },
  pollo: {
    username: "pollo",
    name: "Pequeño Pollo de la Pampa",
    password: bcrypt.hashSync("pockpock", salt)
  }
}
console.log(userDatabaseIsh)
const authenticateUser = (submittedUsername, submittedPassword) => {
  if (userDatabaseIsh[submittedUsername]) {
    if (bcrypt.compareSync(submittedPassword, userDatabaseIsh[submittedUsername].password)) {
      // if (userDatabaseIsh[submittedUsername].password === submittedPassword) {
      // GREAT SUCCESS
      // req.session.username = submittedUsername
      return true
    } else {
      // GREAT FAILURE BAD PASSWORD
      console.log('username was good, password was bad')
      // res.send("Bad username/password combination...")
      return false
    }
  } else {
    // ULTIMATE FAILURE BAD USERNAME
    console.log("username was bad, dont care about the password")
    // res.send("Bad username/password combination...")
    return false
  }
}

app.get("/", (req, res) => {
  const currentDate = new Date()
  const username = userDatabaseIsh[req.session.username] ? userDatabaseIsh[req.session.username].name : ""
  const templateVars = { username: username, date: currentDate.toLocaleString() }
  console.log(req.session)
  res.render("index", templateVars);
});

app.get('/secret-login', (req, res) => {
  req.session.username = 'Pequeño Pollo de la Pampa'
  res.redirect('/')
})

app.get("/login", (req, res) => {
  const templateVars = { error: "" }
  res.render("login", templateVars);
});

app.post("/login", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (authenticateUser(username, password)) {
    req.session.username = username
    res.redirect('/')
  } else {
    const templateVars = { error: "Bad username/password combination..." }
    res.render("login", templateVars);
  }

})

app.post('/logout', (req, res) => {
  delete req.session.username
  res.redirect('/')
})

app.post('register', (req, res) => {
  const newUser = {}
  newUser.name = req.body.name
  newUser.username = req.body.username
  newUser.password = bcrypt.hashSync(req.body.password)

  userDatabaseIsh[req.body.username] = newUser

  res.redirect('/')
})

app.listen(port, () => console.log(`Express server running on port ${port}`));
