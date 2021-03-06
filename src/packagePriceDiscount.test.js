const { expect } = require('@jest/globals')
const getPackagePriceDiscount = require('./packagePriceDiscount')

describe('verify CalulateOffer function ', () => {
  describe('Invalid arguments, passes', () => {
    test('No offercode or no default arguments', () => {
      expect(getPackagePriceDiscount({})).toEqual(
        'Please enter all the valid parameters'
      )
    })

    test('Invalid package details', () => {
      expect(
        getPackagePriceDiscount({
          pkgId: 'PKG1',
          pkgWeightInKg: 3,
          distanceInKm: 'any input',
          basePrice: 100,
          offerCode: 'OFR001',
        })
      ).toEqual('Please enter all the valid parameters')
    })

    test('Invalid offercode', () => {
      expect(
        getPackagePriceDiscount({
          pkgId: 'PKG1',
          pkgWeightInKg: 3,
          distanceInKm: 5,
          basePrice: 100,
          offerCode: 'OFR01',
        })
      ).toEqual({ price: 155, discount: 0, pkgId: 'PKG1' })
    })
    test('Two invalid offercode', () => {
      expect(
        getPackagePriceDiscount({
          pkgId: 'PKG1',
          pkgWeightInKg: 3,
          distanceInKm: 5,
          basePrice: 100,
          offerCode: 'invalidOfferCode1, invalidOfferCode2',
        })
      ).toEqual({ price: 155, discount: 0, pkgId: 'PKG1' })
    })
  })

  describe('valid arguments, passes', () => {
    test('NO offerCode', () => {
      expect(
        getPackagePriceDiscount({
          pkgId: 'PKG1',
          pkgWeightInKg: 5,
          distanceInKm: 5,
          basePrice: 100,
        })
      ).toEqual({ price: 175, discount: 0, pkgId: 'PKG1' })
    })
    test('Valid offerCode', () => {
      expect(
        getPackagePriceDiscount({
          pkgId: 'PKG1',
          pkgWeightInKg: 15,
          distanceInKm: 5,
          basePrice: 100,
        })
      ).toEqual({ price: 275, discount: 0, pkgId: 'PKG1' })
    })
    test('Valid offerCode', () => {
      expect(
        getPackagePriceDiscount({
          pkgId: 'PKG1',
          pkgWeightInKg: 155,
          distanceInKm: 50,
          offerCode: 'OFR002',
          basePrice: 100,
        })
      ).toEqual({ price: 1767, discount: 133, pkgId: 'PKG1' })
    })
    test('Valid 2 or more offerCodes ', () => {
      expect(
        getPackagePriceDiscount({
          pkgId: 'PKG1',
          pkgWeightInKg: 155,
          distanceInKm: 50,
          offerCode: 'OFR002 OFR003',
          basePrice: 100,
        })
      ).toEqual({ price: 1767, discount: 133, pkgId: 'PKG1' })
    })
  })
})
