const getNextPossibleShipmentsList = require('./util/nextPossibleShipmentList')
const getClosestShipment = require('./util/closestShipment')
const getPackagePriceDiscount = require('./packagePriceDiscount')

function getPackageDeliveryTime({
  noOfPackages,
  packageList,
  noOfVehicles,
  maxSpeed,
}) {
  if (
    !noOfPackages ||
    !packageList ||
    packageList.length !== noOfPackages ||
    !maxSpeed ||
    !noOfVehicles ||
    packageList.some(
      element => element.weight === undefined || element.distance === undefined
    )
  )
    return 'Please enter all the elements in the input array for the given length '

  const vehicleAvailabilityArray = Array(noOfVehicles).fill(0)

  let newUpdatedPackageList = [...packageList]
  let calculatedPackageList = [...packageList]

  while (newUpdatedPackageList.length > 0) {
    const nextDelivery = getClosestShipment(
      getNextPossibleShipmentsList(newUpdatedPackageList, 200),
      packageList
    )

    let durationForSingleTrip = 0

    const nextAvailabeAt = Math.min(...vehicleAvailabilityArray)

    nextDelivery.forEach(element => {
      let deliveryTime =
        Math.trunc((packageList[element].distance / maxSpeed) * 100) / 100

      packageList[element].duration =
        Math.trunc((nextAvailabeAt + deliveryTime) * 100) / 100

      const packagePriceDiscount = getPackagePriceDiscount({
        pkgId: '001',
        pkgWeightInKg: packageList[element].weight,
        distanceInKm: packageList[element].distance,
        basePrice: 100,
        offerCode: packageList[element].pkgOfr,
      })

      calculatedPackageList[element].deliveryCost = packagePriceDiscount.price

      calculatedPackageList[element].discount = packagePriceDiscount.discount

      durationForSingleTrip = Math.max(deliveryTime, durationForSingleTrip)
    })

    vehicleAvailabilityArray[vehicleAvailabilityArray.indexOf(nextAvailabeAt)] =
      nextAvailabeAt + 2 * durationForSingleTrip

    newUpdatedPackageList = newUpdatedPackageList.filter(
      element => element.duration === undefined
    )
  }

  return calculatedPackageList
}

module.exports = getPackageDeliveryTime
