const offerCodes = require('./offerCodes.json')
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
  console.log(chalk.green('getting all offer codes'))
  Object.keys(offerCodes).forEach(element =>
    table.push([
      element,
      offerCodes[element].discount,
      offerCodes[element].distanceRange.min,
      offerCodes[element].distanceRange.max,
      offerCodes[element].weightRange.min,
      offerCodes[element].weightRange.max,
    ])
  )
  console.log(table.toString())
}

module.exports = getAllOfferCodes
