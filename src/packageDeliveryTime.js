const getNextPossibleShipmentsList = require("./util/nextPossibleShipmentList")
const getClosestShipment = require("./util/closestShipment")
const getPackagePriceDiscount = require("./packagePriceDiscount")

function getPackageDeliveryTime({
  noOfPackages,
  packageList,
  noOfVehicles,
  maxSpeed,
  maxCarriableCapacity,
  basePrice,
}) {
  console.log(
    noOfPackages,
    packageList,
    noOfVehicles,
    maxSpeed,
    maxCarriableCapacity,
    basePrice
  )
  if (
    !noOfPackages ||
    !packageList ||
    !maxSpeed ||
    !noOfVehicles ||
    !maxCarriableCapacity
  )
    return "Please enter all the elements in the input array for the given length "

  const vehicleAvailabilityArray = Array(noOfVehicles).fill(0)

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

    nextDelivery.forEach((element) => {
      let currentPackage = packageList[element]
      let calculatedTimeOfPkg = {}

      let deliveryTime =
        Math.trunc((packageList[element].distance / maxSpeed) * 100) / 100

      currentPackage.duration =
        Math.trunc((nextAvailabeAt + deliveryTime) * 100) / 100

      calculatedTimeOfPkg.duration =
        Math.trunc((nextAvailabeAt + deliveryTime) * 100) / 100

      calculatedTimeOfPkg.pkgId = currentPackage.pkgId

      console.log("duration at each place")

      const packagePriceDiscount = getPackagePriceDiscount({
        pkgId: currentPackage.pkgId,
        pkgWeightInKg: currentPackage.weight,
        distanceInKm: currentPackage.distance,
        basePrice: basePrice,
        offerCode: currentPackage.offerCode,
      })

      calculatedTimeOfPkg.deliveryCost = packagePriceDiscount.price

      calculatedTimeOfPkg.discount = packagePriceDiscount.discount

      durationForSingleTrip = Math.max(deliveryTime, durationForSingleTrip)
      packagesWithDuration.push(calculatedTimeOfPkg)
    })

    vehicleAvailabilityArray[vehicleAvailabilityArray.indexOf(nextAvailabeAt)] =
      nextAvailabeAt + 2 * durationForSingleTrip
    console.log("vehicle avalilabilty array", vehicleAvailabilityArray)

    newUpdatedPackageList = newUpdatedPackageList.filter(
      (element) => element.duration === undefined
    )
  }

  return packagesWithDuration
}
// console.log(
//   getPackageDeliveryTime({
//     noOfPackages: 5,
//     packageList: [
//       {
//         pkgId: "PKG1",
//         weight: 50,
//         index: 0,
//         distance: 30,
//         offerCode: "OFR0061",
//       },
//       {
//         pkgId: "PKG2",
//         weight: 75,
//         index: 1,
//         distance: 125,
//         offerCode: "OFR0008",
//       },
//       {
//         pkgId: "PKG3",
//         weight: 175,
//         index: 2,
//         distance: 100,
//         offerCode: "OFR0002",
//       },
//       {
//         pkgId: "PKG4",
//         weight: 110,
//         index: 3,
//         distance: 60,
//         offerCode: "NA",
//       },
//       {
//         pkgId: "PKG5",
//         weight: 155,
//         index: 4,
//         distance: 95,
//         offerCode: "OFR004",
//       },
//     ],
//     maxSpeed: 70,
//     noOfVehicles: 2,
//     maxCarriableCapacity: 200,
//     basePrice: 100,
//   })
// )

module.exports = getPackageDeliveryTime
