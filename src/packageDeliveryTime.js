const getNextPossibleShipmentsList = require('./util/nextPossibleShipmentList')
const getClosestShipment = require('./util/closestShipment')
const getPackagePriceDiscount = require('./packagePriceDiscount')
const truncate = require('./util/truncate')

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
    !maxSpeed ||
    !noOfVehicles ||
    !maxCarriableCapacity
  )
    return 'Please enter all the elements in the input array for the given length '

  const vehicleAvailabilityArray = Array(parseInt(noOfVehicles)).fill(0)

  let newUpdatedPackageList = [...packageList]

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

      let deliveryTime = truncate(packageList[element].distance / maxSpeed)

      currentPackage.duration = truncate(nextAvailabeAt + deliveryTime)

      calculatedTimeOfPkg.duration = truncate(nextAvailabeAt + deliveryTime)

      calculatedTimeOfPkg.pkgId = currentPackage.pkgId

      const packagePriceDiscount = getPackagePriceDiscount({
        pkgId: currentPackage.pkgId,
        pkgWeightInKg: currentPackage.weight,
        distanceInKm: currentPackage.distance,
        basePrice: basePrice,
        offerCode: currentPackage.offerCode,
      })

      calculatedTimeOfPkg.deliveryCost = truncate(packagePriceDiscount.price)

      calculatedTimeOfPkg.discount = truncate(packagePriceDiscount.discount)

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
