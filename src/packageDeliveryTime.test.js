const { expect } = require('@jest/globals')
const getPackageDeliveryTime = require('./packageDeliveryTime')

describe('verify calculate Duration function', () => {
  describe('Invalid arguments, passes', () => {
    test('No input array or no individual values ', () => {
      expect(
        getPackageDeliveryTime({
          packageList: [],
        })
      ).toEqual(
        'Please enter all the elements in the input array for the given length '
      )
    })
  })
  describe('Valid arguments, passes', () => {
    test('Valid inputs with same weight packages  ', () => {
      expect(
        getPackageDeliveryTime({
          noOfPackages: 5,
          packageList: [
            { weight: 50, index: 0, distance: 30 },
            { weight: 75, index: 1, distance: 125 },
            { weight: 175, index: 2, distance: 100 },
            { weight: 110, index: 3, distance: 60 },
            { weight: 155, index: 4, distance: 95 },
          ],
          maxSpeed: 70,
          noOfVehicles: 2,
        })
      ).toEqual([
        {
          weight: 50,
          index: 0,
          distance: 30,
          duration: 3.98,
          deliveryCost: 750,
          discount: 0,
        },
        {
          weight: 75,
          index: 1,
          distance: 125,
          duration: 1.78,
          deliveryCost: 1475,
          discount: 0,
        },
        {
          weight: 175,
          index: 2,
          distance: 100,
          duration: 1.42,
          deliveryCost: 2350,
          discount: 0,
        },
        {
          weight: 110,
          index: 3,
          distance: 60,
          duration: 0.85,
          deliveryCost: 1500,
          discount: 0,
        },
        {
          weight: 155,
          index: 4,
          distance: 95,
          duration: 4.18,
          deliveryCost: 2125,
          discount: 0,
        },
      ])
    })
    test('Valid inputs with different weight packages  ', () => {
      expect(
        getPackageDeliveryTime({
          noOfPackages: 5,
          packageList: [
            { weight: 100, index: 0, distance: 30 },
            { weight: 75, index: 1, distance: 125 },
            { weight: 175, index: 2, distance: 100 },
            { weight: 40, index: 3, distance: 60 },
            { weight: 155, index: 4, distance: 95 },
          ],
          maxSpeed: 70,
          noOfVehicles: 2,
        })
      ).toEqual([
        {
          weight: 100,
          index: 0,
          distance: 30,
          duration: 3.12,
          deliveryCost: 1250,
          discount: 0,
        },
        {
          weight: 75,
          index: 1,
          distance: 125,
          duration: 4.48,
          deliveryCost: 1475,
          discount: 0,
        },
        {
          weight: 175,
          index: 2,
          distance: 100,
          duration: 1.42,
          deliveryCost: 2350,
          discount: 0,
        },
        {
          weight: 40,
          index: 3,
          distance: 60,
          duration: 0.85,
          deliveryCost: 800,
          discount: 0,
        },
        {
          weight: 155,
          index: 4,
          distance: 95,
          duration: 1.35,
          deliveryCost: 2125,
          discount: 0,
        },
      ])
    })
  })
})
