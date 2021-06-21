const { expect } = require('@jest/globals')
const calculateDuration = require('./calculateDuration')

describe('verify calculate Duration function', () => {
  describe('Invalid arguments, passes', () => {
    test('No input array or no individual values ', () => {
      expect(
        calculateDuration({
          inputArray: [],
        })
      ).toEqual(
        'Please enter all the elements in the input array for the given length '
      )
    })
  })
  describe('Valid arguments, passes', () => {
    test('Valid inputs with same weight packages  ', () => {
      expect(
        calculateDuration({
          listCount: 5,
          inputList: [
            { weight: 50, index: 0, distance: 30 },
            { weight: 75, index: 1, distance: 125 },
            { weight: 175, index: 2, distance: 100 },
            { weight: 110, index: 3, distance: 60 },
            { weight: 155, index: 4, distance: 95 },
          ],
          speedOfVehicle: 70,
          noOfVehicles: 2,
        })
      ).toEqual([
        { weight: 50, index: 0, distance: 30, duration: 3.98 },
        { weight: 75, index: 1, distance: 125, duration: 1.78 },
        { weight: 175, index: 2, distance: 100, duration: 1.42 },
        { weight: 110, index: 3, distance: 60, duration: 0.85 },
        { weight: 155, index: 4, distance: 95, duration: 4.18 },
      ])
    })
    test('Valid inputs with different weight packages  ', () => {
      expect(
        calculateDuration({
          listCount: 5,
          inputList: [
            { weight: 100, index: 0, distance: 30 },
            { weight: 75, index: 1, distance: 125 },
            { weight: 175, index: 2, distance: 100 },
            { weight: 40, index: 3, distance: 60 },
            { weight: 155, index: 4, distance: 95 },
          ],
          speedOfVehicle: 70,
          noOfVehicles: 2,
        })
      ).toEqual([
        { weight: 100, index: 0, distance: 30, duration: 3.12 },
        { weight: 75, index: 1, distance: 125, duration: 4.48 },
        { weight: 175, index: 2, distance: 100, duration: 1.42 },
        { weight: 40, index: 3, distance: 60, duration: 0.85 },
        { weight: 155, index: 4, distance: 95, duration: 1.35 },
      ])
    })
  })
})
