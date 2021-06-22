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
    const possibleShipmentList = getNextPossibleShipmentsList(
      newUpdatedPackageList,
      200
    )
    const nextDelivery = getClosestShipment(possibleShipmentList, packageList)

    const nextAvailabeAt = Math.min(...vehicleAvailabilityArray)

    let durationForSingleTrip = 0
    nextDelivery.forEach(element => {
      let currentPackage = calculatedPackageList[element]
      let deliveryTime =
        Math.trunc((packageList[element].distance / maxSpeed) * 100) / 100

      currentPackage.duration =
        Math.trunc((nextAvailabeAt + deliveryTime) * 100) / 100

      const packagePriceDiscount = getPackagePriceDiscount({
        pkgId: '001',
        pkgWeightInKg: currentPackage.weight,
        distanceInKm: currentPackage.distance,
        basePrice: 100,
        offerCode: currentPackage.pkgOfr,
      })

      currentPackage.deliveryCost = packagePriceDiscount.price

      currentPackage.discount = packagePriceDiscount.discount

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
