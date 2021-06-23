const getNextPossibleShipmentsList = require('./util/nextPossibleShipmentList')
const getClosestShipment = require('./util/closestShipment')
const getPackagePriceDiscount = require('./packagePriceDiscount')

function getPackageDeliveryTime({
  noOfPackages,
  packageList,
  noOfVehicles,
  maxSpeed,
  maxCarriableCapacity,
  basePrice,
}) {
  if (
    !noOfPackages ||
    !packageList ||
    packageList.length !== noOfPackages ||
    !maxSpeed ||
    !noOfVehicles ||
    !maxCarriableCapacity ||
    packageList.some(
      element => element.weight === undefined || element.distance === undefined
    )
  )
    return 'Please enter all the elements in the input array for the given length '

  const vehicleAvailabilityArray = Array(noOfVehicles).fill(0)

  let newUpdatedPackageList = [...packageList]
  let arrayLength = packageList.length

  let packagesWithDuration = []

  while (newUpdatedPackageList.length > 0) {
    const possibleShipmentList = getNextPossibleShipmentsList(
      newUpdatedPackageList,
      maxCarriableCapacity
    )
    const nextDelivery = getClosestShipment(possibleShipmentList, packageList)

    const nextAvailabeAt = Math.min(...vehicleAvailabilityArray)

    let durationForSingleTrip = 0

    nextDelivery.forEach(element => {
      let currentPackage = packageList[element]
      let calculatedTimeOfPkg = {}

      let deliveryTime =
        Math.trunc((packageList[element].distance / maxSpeed) * 100) / 100

      currentPackage.duration =
        Math.trunc((nextAvailabeAt + deliveryTime) * 100) / 100

      calculatedTimeOfPkg.duration =
        Math.trunc((nextAvailabeAt + deliveryTime) * 100) / 100
      calculatedTimeOfPkg.pkgId = currentPackage.pkgId

      const packagePriceDiscount = getPackagePriceDiscount({
        pkgId: currentPackage.pkgId,
        pkgWeightInKg: currentPackage.weight,
        distanceInKm: currentPackage.distance,
        basePrice: basePrice,
        offerCode: currentPackage.offerCode,
      })

      currentPackage.deliveryCost = packagePriceDiscount.price
      calculatedTimeOfPkg.deliveryCost = packagePriceDiscount.price

      // currentPackage.discount = packagePriceDiscount.discount
      // calculatedTimeOfPkg.discount = packagePriceDiscount.discount
      currentPackage.discount = 0
      calculatedTimeOfPkg.discount = 0

      durationForSingleTrip = Math.max(deliveryTime, durationForSingleTrip)
      packagesWithDuration.push(calculatedTimeOfPkg)
    })

    vehicleAvailabilityArray[vehicleAvailabilityArray.indexOf(nextAvailabeAt)] =
      nextAvailabeAt + 2 * durationForSingleTrip

    newUpdatedPackageList = newUpdatedPackageList.filter(
      element => element.duration === undefined
    )
  }

  return packagesWithDuration
}

module.exports = getPackageDeliveryTime
