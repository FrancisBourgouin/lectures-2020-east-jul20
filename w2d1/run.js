const shoppingCart = require('./shoppingCart')


const input = [
  { name: "Pineapple", price: 4.99, quantity: 1, description: "Has a sponge living in it" },
  { name: "Fried Chicken", price: 1.99, quantity: 5, description: "So fresh it's too hot." }
]

console.log(shoppingCart(input, 0.05))