// What is a callback ?
// A fct that is passed as a parameter
// Why ? More flexible ? dryer ? Simplicity


// const addNumbers = (a, b) =>  {
//   const result = a + b
//   console.log(`The result is ${result}`)
// }

// const substractNumbers = (a, b) => {
//   const result = a - b
//   console.log(`The result is ${result}`)
// }

const showResult = (value) => {
  console.log(`The result is ${value}.`)
}

const singResult = (value) => {
  console.log(`🎵🎶The result is ${value}.🎶🎵`)
}

const addNumbers = (a, b) => {
  const result = a + b
  singResult(result)
}

const substractNumbers = (a, b) => {
  const result = a - b
  showResult(result)
}

// We use callbacks to decide when we execute what we want

const multiplyNumbers = (a, b, displayAction) => {
  const result = a * b
  displayAction(result)
}

multiplyNumbers(4, 5, singResult)
// const multiplyNumbers = (a, b, displayAction) => {
//   // In the context of a being 4, b being 5, and displayAction being singResult
//   const result = a * b
//   displayAction(result)
// }

multiplyNumbers(4, 5, showResult)

const doSomethingWithNumbers = (a, b, operationAction, displayAction) => {
  const result = operationAction(a, b)
  displayAction(result)
}

const divide = (a, b) => a / b
const console = (a) => console.log(a)

doSomethingWithNumbers(5, 5, ((a, b) => a / b), showResult)
doSomethingWithNumbers(5, 5, function (a, b) { return a / b }, showResult)

doSomethingWithNumbers(5, 5, () => {
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
},
  () => {
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
    // ...
  })



const bob = [1, 2, 3, 4]

bob.forEach(singResult)
bob.forEach((value) => {
  // aaa
  console.log(`🎵🎶The result is ${value}.🎶🎵`)
})


const compareNumbers = (a, b, comparisonAction) => {
  if (comparisonAction(a, b)) {
    return true
  } else {
    return false
  }
}

console.log(compareNumbers(5, 5, (a, b) => a > b))
console.log(compareNumbers(5, 5, singResult))

// 🧙‍♀️ : I iterate over an array
// 👩‍🦱 : I sing a value
// 🎅 : compare if two values are identic
// 🧔 : prints to a file

// 🧙‍♀️ -> 👩‍🦱

