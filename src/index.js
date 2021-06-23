const chalk = require('chalk')
const Table = require('cli-table3')
const rl = require('readline')
const figlet = require('figlet')

const inquire = require('./inquiry')

const getDeliveryPriceDiscount = require('./getDeliveryPriceDiscount')

console.log(
  chalk.red(
    figlet.textSync('Everest Engineering', { horizontalLayout: 'full' })
  )
)

const getAllOfferCodes = () => {
  //  const table = new Table({
  //    head: ['Package Id', 'Package Discount', 'Package Price'],
  //    colWidths: [15, 23, 18],
  //    wordWrap: true,
  //  })
}

const runApp = async () => {
  const { typeOfFunctionality } = await inquire.askTypeFunction()

  switch (typeOfFunctionality) {
    case 'calculate delivery cost':
      getDeliveryPriceDiscount()

      break
    case 'get all existing offercodes':
      getAllOfferCodes()
      break

    default:
      break
  }
}
runApp()
