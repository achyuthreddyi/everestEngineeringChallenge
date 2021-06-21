function minDistancePackage(nextWeightIndexes, inputArray) {
  if (nextWeightIndexes.length === 1) return nextWeightIndexes[0]
  weightList = []

  nextWeightIndexes.forEach(element => {
    let intermediateWeight = 0
    element.forEach(ele => {
      intermediateWeight = intermediateWeight + inputArray[ele].distance
    })
    weightList.push(intermediateWeight)
  })

  const minArray =
    nextWeightIndexes[weightList.indexOf(Math.min(...weightList))]
  return minArray
}

module.exports = minDistancePackage
