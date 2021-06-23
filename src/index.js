const chalk = require('chalk')
const Table = require('cli-table3')
const rl = require('readline')
const figlet = require('figlet')

const inquire = require('./inquiry')

const getDeliveryPriceDiscount = require('./getDeliveryPriceDiscount')
const getAllOfferCodes = require('./getAllOfferCodes')

console.log(
  chalk.yellow(
    figlet.textSync('Everest Engineering', { horizontalLayout: 'full' })
  )
)

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
