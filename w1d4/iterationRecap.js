// for..of
// for..in
// c style for
// while
// forEach?
// map?
// reduce?
// do while

for (const element of /* an */ array) {
  // Element is the actual current value
}

// we have an array[1, 2, 3]
// we pick 1, then we put it in const element
// we pick 2, then we put it in const element
// we pick 3, then we put it in const element

for (let i = 0; i < array.length; i++) {
  const element = array[i]
}

// we have an array[1, 2, 3]
// we check the length, and we compare it to i, 0 < 3
// do something with the current index(i)
// add 1 to the i
// we check the length, and we compare it to i, 1 < 3
// do something with the current index(i)
// add 1 to the i
// we check the length, and we compare it to i, 1 < 3
// do something with the current index(i)
// add 1 to the i

for (const key in /* an */ object) {
  // key is the currrent key, not the current value
}


