const offerCodes = require('../offerCodes.json')
const chalk = require('chalk')
const Table = require('cli-table3')

const table = new Table({
  head: [
    'offer Id',
    'Discount',
    'Minimum Weight',
    'Maximum Weight',
    'Minimum Distance',
    'Maximum Distance',
  ],
  colWidths: [15, 18, 18, 18, 18, 18],
  wordWrap: true,
})

function getAllOfferCodes() {
  console.log(chalk.green('All the existing offer codes'))

  Object.keys(offerCodes).forEach(element => {
    const offer = offerCodes[element]
    table.push([
      element,
      offer.discount,
      offer.distanceRange.min,
      offer.distanceRange.max,
      offer.weightRange.min,
      offer.weightRange.max,
    ])
  })
  console.log(table.toString())
}

module.exports = getAllOfferCodes
