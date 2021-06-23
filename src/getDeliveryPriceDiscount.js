const inquire = require('./inquiry')
const Table = require('cli-table3')
const getPackagePriceDiscount = require('./packagePriceDiscount')
const chalk = require('chalk')

const getDeliveryPriceDiscount = async () => {
  const { basePrice, noOfPackages } = await inquire.askBaseCostNoofPkgs()

  const table = new Table({
    head: ['Package Id', 'Package Discount', 'Package Price'],
    colWidths: [15, 23, 18],
    wordWrap: true,
  })
  for (let index = 0; index < noOfPackages; index++) {
    console.log('Enter details of package', index + 1)

    const { pkgId, pkgWeightInKg, distanceInKm, offerCode } =
      await inquire.askQuestionsForDeliveryCost()
    const pkgPriceDiscount = getPackagePriceDiscount({
      pkgId,
      pkgWeightInKg,
      distanceInKm,
      offerCode,
      basePrice,
    })
    pkgPriceDiscount.discount !== undefined
      ? table.push([
          pkgPriceDiscount.pkgId,
          pkgPriceDiscount.discount,
          pkgPriceDiscount.price,
        ])
      : table.push(['entered', 'details', 'are not valid'])
  }
  console.log(chalk.green('calculated discount and price'))

  console.log(table.toString())
}

module.exports = getDeliveryPriceDiscount
