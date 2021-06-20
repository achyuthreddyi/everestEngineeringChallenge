const { expect } = require('@jest/globals')
const calculateDuration = require('./calculateDuration')

describe('verify calculate Duration function', () => {
  describe('Invalid arguments, passes', () => {
    test('No input array or no individual values ', () => {
      expect(
        calculateDuration({
          length: 4,
        })
      ).toEqual(
        'Please enter all the elements in the input array for the given length '
      )
    })
  })
})
