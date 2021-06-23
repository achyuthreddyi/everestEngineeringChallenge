const getPackageDeliveryTime = require('../packageDeliveryTime')
const inquire = require('../inquiry')
const chalk = require('chalk')
const Table = require('cli-table3')

const getAllPkgDeliveryTime = async () => {
  const { basePrice, noOfPackages } = await inquire.askBaseCostNoofPkgs()
  const packageList = []

  const table = new Table({
    head: [
      'Package Id',
      'Package Discount',
      'Package Price',
      'Package Delivery Time',
    ],
    colWidths: [15, 23, 18, 23],
    wordWrap: true,
  })

  for (let i = 0; i < noOfPackages; i++) {
    console.log('enter the details of package', i + 1)
    const { pkgId, pkgWeightInKg, distanceInKm, offerCode } =
      await inquire.askQuestionsForDeliveryCost()
    packageList.push({
      pkgId,
      weight: parseInt(pkgWeightInKg),
      distance: parseInt(distanceInKm),
      offerCode,
      index: i,
    })
  }
  const { noOfVehicles, maxCarriableCapacity, maxSpeed } =
    await inquire.askVehicleDetails()

  const packageDeliveryTimes = await getPackageDeliveryTime({
    noOfPackages: noOfPackages,
    packageList: packageList,
    maxSpeed: maxSpeed,
    maxCarriableCapacity: maxCarriableCapacity,
    noOfVehicles: noOfVehicles,
    basePrice: basePrice,
  })

  packageDeliveryTimes.forEach(element => {
    element.duration === undefined
      ? table.push(['Please enter ', 'valid data', 'inputs'])
      : table.push([
          element.pkgId,
          element.discount,
          element.deliveryCost,
          element.duration,
        ])
  })

  console.log(
    chalk.green('calculated delivery time along with discount and price')
  )
  console.log(table.toString())
}

module.exports = getAllPkgDeliveryTime
