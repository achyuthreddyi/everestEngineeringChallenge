const { expect } = require('@jest/globals')
const calculateOffer = require('./calculateOffer')

describe('verify CalulateOffer function ', () => {
  describe('Invalid arguments passed, passes', () => {
    test('No offercode or no default arguments', () => {
      expect(calculateOffer({})).toEqual('Please enter all the parameters')
    })
    test('No offercode', () => {
      expect(
        calculateOffer({
          pkg_id: 'PKG1',
          pkg_weight_in_kg: 3,
          distance_in_km: 5,
        })
      ).toEqual('Please enter all the parameters')
    })
    test('Invalid offercode', () => {
      expect(
        calculateOffer({
          pkg_id: 'PKG1',
          pkg_weight_in_kg: 3,
          distance_in_km: 5,
          offer_code: 'OFR01',
        })
      ).toEqual('Please enter a valid offerCode ')
    })
  })
})
