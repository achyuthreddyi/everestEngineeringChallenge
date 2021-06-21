function getNextWeightInList(list, largestSumPossible) {
  if (!list || list.length == 0 || !largestSumPossible) return 'Invalid Inputs'
  let resultObj = []
  let localHighestSum = 0
  const indexArray = []

  for (let i = 1; i < 1 << list.length; i++) {
    const weightedSubset = {}
    const subset = []

    for (let j = 0; j < list.length; j++) if (i & (1 << j)) subset.push(list[j])

    weightedSubset.subset = subset

    let temp = 0

    subset.forEach(element => (temp = element.weight + temp))
    weightedSubset.integratedSum = temp

    if (temp <= largestSumPossible && temp >= localHighestSum) {
      localHighestSum = temp

      resultObj.push(weightedSubset)
    }
  }

  resultObj = resultObj.filter(
    element => element.integratedSum === localHighestSum
  )

  resultObj.forEach(element => {
    let temp = []
    element.subset.forEach(ele => temp.push(ele.index))
    indexArray.push(temp)
  })

  return indexArray
}

console.log(
  getNextWeightInList(
    [
      { weight: 50, index: 0 },
      { weight: 60, index: 1 },
      { weight: 175, index: 2 },
      { weight: 110, index: 3 },
      { weight: 155, index: 4 },
    ],
    200
  )
)
module.exports = getNextWeightInList
