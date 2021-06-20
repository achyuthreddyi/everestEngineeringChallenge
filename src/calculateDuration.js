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

module.exports = calculateDuration
