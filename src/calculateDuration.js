function calculateDuration({ length, inputArray }) {
  const condition = element =>
    element.weight === undefined || element.distance === undefined
  if (
    !length ||
    !inputArray ||
    inputArray.length !== length ||
    inputArray.some(condition)
  )
    return 'Please enter all the elements in the input array for the given length '
  return 'valid input'
}
// calculateDuration({
//   length: 4,
//   inputArray: {
//     PKG1: { weight: 50, distance: 30 },
//     PKG2: { weight: 75, distance: 125 },
//     PKG3: { weight: 175, distance: 100 },
//     PKG4: { weight: 110, distance: 60 },
//     PKG5: { weight: 155, distance: 95 },
//   },
// })
module.exports = calculateDuration
