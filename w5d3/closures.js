// Closures !

const countdown = (initialTime) => {
  for (let time = initialTime; time > 0; time--) {
    console.log(`${time} remaining....`)
  }
}

// countdown(10)

const createCountdownFunction = (initialTime) => {
  return () => {
    for (let time = initialTime; time > 0; time--) {
      console.log(`${time} remaining....`)
    }
  }
}

console.log(createCountdownFunction(10))

const countdownFromTen = createCountdownFunction(10)

countdownFromTen()