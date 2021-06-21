const { expect } = require('@jest/globals')
const calculateDuration = require('./calculateDuration')

describe('verify calculate Duration function', () => {
  describe('Invalid arguments, passes', () => {
    test('No input array or no individual values ', () => {
      expect(
        calculateDuration({
          length: 4,
          inputArray: [],
        })
      ).toEqual(
        'Please enter all the elements in the input array for the given length '
      )
    })
  })
  //   describe('Valid arguments, passes', () => {
  //     test('Valid inputs  ', () => {
  //       expect(
  //         calculateDuration({
  //           length: 5,
  //           inputArray: {
  //             PKG1: { weight: 50, distance: 30 },
  //             PKG2: { weight: 75, distance: 125 },
  //             PKG3: { weight: 175, distance: 100 },
  //             PKG4: { weight: 110, distance: 60 },
  //             PKG5: { weight: 155, distance: 95 },
  //           },
  //         })
  //       ).toEqual()
  //     })
  //   })
})
