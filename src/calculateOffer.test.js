const { expect } = require('@jest/globals')
const calculateOffer = require('./calculateOffer')

describe('verifyCalulateOffer', () => {
  test('should pass the calculation', () => {
    expect(calculateOffer()).toEqual('Invalid Offer Code')
  })
})
