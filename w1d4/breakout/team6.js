// Write a function that will take a callback as a parameter.
// The job of the callback is an action on a specific element, build your function knowing this!

const genericFunction = (element, callback) => {
  callback(element);
}

const callback = function (element) {
  console.log(`The element passed is ${element}`);
}


genericFunction('bonjour', callback);


// Write a function that compare two elements, and will return true or false on your condition

const compareElements = (firstElement, secondElement, condition) => {
  if (condition(firstElement, secondElement)) {
    return true;
  } else {
    return false;
  }
};

const isGreaterThan = function (a, b) {
  if (a > b)
    return true;
  else
    return false;
}

const isEqualTo = function (a, b) {
  if (a === b)
    return true;
  else
    return false;
};

const isLessThan = function (a, b) {
  if (a < b)
    return true;
  else
    return false;
};


console.log(compareElements(2, 20, isLessThan));