// Write a function that will take a callback as a parameter.


// The job of the callback is to return true or false, build your function knowing this!

const compare = (a, b, action) => {
  if (action(a, b)) {
    return true;
  } else {
    return false;
  }
}

console.log(compare(5, '5', (a, b) => a === b));

/* 
const doSomethingWithNumbers = (a, b, operationAction, displayAction) => {
  const result = operationAction(a, b);
  displayAction(result);

};
 */
// Write a function that will write to the console the parameter it was given


const writer = param => console.log(param);