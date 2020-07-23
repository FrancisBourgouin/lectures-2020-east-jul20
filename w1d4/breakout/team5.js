// Write a function that will take a callback as a parameter.
// The job of the callback is an action on a specific element, build your function knowing this!

const myFunc = (element, callback) => {
  return callback(element);
}

const add2 = (element) => {
  return element + 2;
}

const tellSecret = (shouldItell) => {
  if (shouldItell) {
    console.log("I have a secret");
  } else {
    console.log("I have nothing to say")
  }
}

tellSecret(() => add2(-2))




console.log(myFunc(2, add2));

// Write a function that compare two elements, and will return true or false on your condition

const comparator = (elementA, elementB) => elementA === elementB;

