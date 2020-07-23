// Write a function that will take a callback as a parameter.
// The job of the callback is an action on a specific element, build your function knowing this!

// 
const actionOnElement = (input, actionCallback) => {
  return actionCallback(input);
}

// Write a function that compare two elements, and will return true or false on your condition
const compareElements = (input) => {
  return input > 5;
};

console.log(actionOnElement(4, compareElements));
