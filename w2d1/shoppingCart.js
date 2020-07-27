// Expected output:
// List of items
// Total, subtotal, tax amount
// amount of items
// output -> object

const expectedOutput = {
  total: 0,
  subtotal: 0,
  taxAmount: 0,
  amountOfItems: 0,
  listOfNames: ["NO", "ITEMS"]
}


// Expected Input
// List of items
// item -> price, quantity, name and/or description
// taxAmount ?
// Arrays (independent) vs Objects (dependent)

const expectedInput = [
  { name: "Pineapple", price: 4.99, quantity: 1, description: "Has a sponge living in it" }
]

// STAGE 1 - HARDCODE
// const shoppingCart = () => {
//   return {
//     total: 5.74,
//     subtotal: 4.99,
//     taxAmount: 0.75,
//     amountOfItems: 1,
//     listOfNames: ["Pineapple"]
//   }
// }


// 0.7479...
// 074.79....
// 075
// 0.75

// STAGE 2 - HANDLES A SPECIFIC CASE

// const shoppingCart = (cart, tax) => {
//   const subtotal = cart[0].price
//   const taxAmount = Math.round(subtotal * tax * 100) / 100
//   const total = taxAmount + subtotal
//   const amountOfItems = cart.length
//   const listOfNames = [cart[0].name]

//   return {
//     total,
//     subtotal,
//     taxAmount,
//     amountOfItems,
//     listOfNames
//   }
// }

// MULTIPLE ITEMS
const cartIsValid = (cart, tax) => {
  if (!cart.length || !tax || !Array.isArray(cart)) {
    return false
  } else {
    return true
  }
}



const shoppingCart = (cart, tax) => {
  if (!cartIsValid(cart, tax)) {
    return {}
  }
  let subtotal = 0
  let amountOfItems = 0
  const listOfNames = []
  for (const item of cart) {
    subtotal += item.price * item.quantity
    amountOfItems += item.quantity
    listOfNames.push(item.name)
  }
  const taxAmount = Math.round(subtotal * tax * 100) / 100
  const total = taxAmount + subtotal

  return {
    total,
    subtotal,
    taxAmount,
    amountOfItems,
    listOfNames
  }
}
module.exports = shoppingCart