// Write a function that will take a callback as a parameter.
// The job of the callback is to return true or false, build your function knowing this!

// Function about seing if my grade is good or bad
// The callback should give me back true or false
const checkMyGrade = (grade, evaluatorAction) => {
  if(evaluatorAction(grade)){
    return "good job"
  } else {
    return "bad job"
  }
}

// Write a funlction that will write to the console the parameter it was given

