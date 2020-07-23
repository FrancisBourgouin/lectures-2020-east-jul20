// Write a function that will take a callback as a parameter.
// The job of the callback is to return true or false, build your function knowing this!


const tellSecret = (shouldItell) => {
  if (shouldItell) {
    console.log("I have a secret");
  } else {
    console.log("I have nothing to say")
  }
}

const shouldItell = () => Math.round(Math.random())


tellSecret(shouldItell)

const saySomething = () => {

  if (!saySomething) {
    return true;
  }
  else {
    return false;
  }

}

console.log(tellSecret); //?






// Write a function that will write to the console the parameter it was given