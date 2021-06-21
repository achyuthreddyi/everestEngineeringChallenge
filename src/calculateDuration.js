const getNextWeightIndex = require('./util/nextWeightInList')
const elementsWithoutDuration = require('./util/elementsWithoutDuration')
const minDistancePackage = require('./util/minDistancePackage')
function calculateDuration({
  listCount,
  inputList,
  noOfVehicles,
  speedOfVehicle,
}) {
  const condition = element =>
    element.weight === undefined || element.distance === undefined
  const vehicleArray = Array(noOfVehicles).fill(0)

  if (
    !listCount ||
    !inputList ||
    inputList.length !== listCount ||
    !speedOfVehicle ||
    !noOfVehicles ||
    inputList.some(condition)
  )
    return 'Please enter all the elements in the input array for the given length '

  let newUpdatedList = [...inputList]

  while (inputList.some(element => element.duration === undefined)) {
    const nextIndexToWorkOn = minDistancePackage(
      getNextWeightIndex(newUpdatedList, 200),
      inputList
    )
    console.log(' next input to work on ', nextIndexToWorkOn)

    let durationForSingleTrip = 0
    const minVehicle = Math.min(...vehicleArray)

    nextIndexToWorkOn.forEach(element => {
      let indidurationForSingleTrip =
        parseInt((inputList[element].distance / speedOfVehicle) * 100) / 100

      inputList[element].duration =
        parseInt((minVehicle + indidurationForSingleTrip) * 100) / 100
      durationForSingleTrip = Math.max(
        indidurationForSingleTrip,
        durationForSingleTrip
      )
    })

    vehicleArray[vehicleArray.indexOf(minVehicle)] =
      minVehicle + 2 * durationForSingleTrip

    newUpdatedList = elementsWithoutDuration(inputList)
  }

  return inputList
}
console.log(
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
)

module.exports = calculateDuration
