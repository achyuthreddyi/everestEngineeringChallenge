const { expect } = require('@jest/globals')
const calculateOffer = require('./calculateOffer')

describe('verify CalulateOffer function ', () => {
  describe('Invalid arguments, passes', () => {
    test('No offercode or no default arguments', () => {
      expect(calculateOffer({})).toEqual(
        'Please enter all the valid parameters'
      )
    })

    test('Invalid package details', () => {
      expect(
        calculateOffer({
          pkg_id: 'PKG1',
          pkg_weight_in_kg: 3,
          distance_in_km: '5',
          base_price: 100,
          offer_code: 'OFR001',
        })
      ).toEqual('Please enter all the valid parameters')
    })

    test('Invalid offercode', () => {
      expect(
        calculateOffer({
          pkg_id: 'PKG1',
          pkg_weight_in_kg: 3,
          distance_in_km: 5,
          base_price: 100,
          offer_code: 'OFR01',
        })
      ).toEqual('Please enter a valid offerCode ')
    })
  })

  describe('valid arguments, passes', () => {
    test('NO offerCode', () => {
      expect(
        calculateOffer({
          pkg_id: 'PKG1',
          pkg_weight_in_kg: 5,
          distance_in_km: 5,
          base_price: 100,
        })
      ).toEqual(175)
    })
    test('Valid offerCode', () => {
      expect(
        calculateOffer({
          pkg_id: 'PKG1',
          pkg_weight_in_kg: 15,
          distance_in_km: 5,
          base_price: 100,
        })
      ).toEqual(275)
    })
    test('Valid offerCode', () => {
      expect(
        calculateOffer({
          pkg_id: 'PKG1',
          pkg_weight_in_kg: 155,
          distance_in_km: 50,
          offer_code: 'OFR002',
          base_price: 100,
        })
      ).toEqual(1767)
    })
  })
})
