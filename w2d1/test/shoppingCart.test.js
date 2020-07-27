const chai = require('chai')
const shoppingCart = require('../shoppingCart')
chai.should()

const exampleInput = [
  { name: "Pineapple", price: 4.99, quantity: 1, description: "Has a sponge living in it" }
]
const exampleTaxAmount = 0.14975
const exampleOutput = {
  total: 0,
  subtotal: 0,
  taxAmount: 0,
  amountOfItems: 0,
  listOfNames: ["NO", "ITEMS"]
}
const exampleOutputIfEmpty = {}
const QCTAX = 0.14975
const ONTTAX = 0.13


describe('Validation of shoppingCart functionnalities with a single itemed cart', () => {
  const input = [
    { name: "Pineapple", price: 4.99, quantity: 1, description: "Has a sponge living in it" }
  ]

  it('should return the expected total, given a cart of one item', () => {

    const expectedOutput = 5.74

    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.total.should.equal(expectedOutput)

  })
  it('should return the expected subtotal, given a cart of one item', () => {

    const expectedOutput = 4.99
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.subtotal.should.equal(expectedOutput)
  })
  it('should return the expected taxAmount, given a cart of one item', () => {

    const expectedOutput = 0.75
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.taxAmount.should.equal(expectedOutput)
  })
  it('should return the expected amountOfItems, given a cart of one item', () => {

    const expectedOutput = 1
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.amountOfItems.should.equal(expectedOutput)
  })
  it('should return the expected list of names, given a cart of one item', () => {

    const expectedOutput = ["Pineapple"]
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.listOfNames.should.be.an('array')
    result.listOfNames.should.deep.equal(expectedOutput)
  })
})


describe('Validation of shoppingCart functionnalities with a cart with multiple items', () => {
  const input = [
    { name: "Pineapple", price: 4.99, quantity: 1, description: "Has a sponge living in it" },
    { name: "Fried Chicken", price: 1.99, quantity: 5, description: "So fresh it's too hot." }
  ]

  it('should return the expected total, given a cart of one item', () => {

    const expectedOutput = 17.18

    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.total.should.equal(expectedOutput)

  })
  it('should return the expected subtotal, given a cart of one item', () => {

    const expectedOutput = 14.94
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.subtotal.should.equal(expectedOutput)
  })
  it('should return the expected taxAmount, given a cart of one item', () => {

    const expectedOutput = 2.24
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.taxAmount.should.equal(expectedOutput)
  })
  it('should return the expected amountOfItems, given a cart of one item', () => {

    const expectedOutput = 6
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.amountOfItems.should.equal(expectedOutput)
  })
  it('should return the expected list of names, given a cart of one item', () => {

    const expectedOutput = ["Pineapple", "Fried Chicken"]
    const result = shoppingCart(input, QCTAX)

    result.should.be.an('object')
    result.listOfNames.should.be.an('array')
    result.listOfNames.should.deep.equal(expectedOutput)
  })
})

describe('Various error situations for the shoppingCart function', () => {
  it('shoppingCart should return an empty object if there is no items in the cart array', () => {
    const input = []
    const expectedResult = {}
    const result = shoppingCart(input, QCTAX)

    result.should.deep.equal(expectedResult)
    result.should.not.have.any.keys('total', 'subtotal', 'taxAmount', 'listOfNames', 'quantity');
  })
  it('shoppingCart should return an empty object if there is no tax amount', () => {
    const input = [
      { name: "Pineapple", price: 4.99, quantity: 1, description: "Has a sponge living in it" },
      { name: "Fried Chicken", price: 1.99, quantity: 5, description: "So fresh it's too hot." }
    ]
    const expectedResult = {}
    const result = shoppingCart(input)

    result.should.deep.equal(expectedResult)
    result.should.not.have.any.keys('total', 'subtotal', 'taxAmount', 'listOfNames', 'quantity');
  })
  it('shoppingCart should return an empty object if the cart is malformed', () => {
    const input = {
      a: { name: "Pineapple", price: 4.99, quantity: 1, description: "Has a sponge living in it" },
      b: { name: "Fried Chicken", price: 1.99, quantity: 5, description: "So fresh it's too hot." }
    }
    const expectedResult = {}
    const result = shoppingCart(input)

    result.should.deep.equal(expectedResult)
    result.should.not.have.any.keys('total', 'subtotal', 'taxAmount', 'listOfNames', 'quantity');
  })

})