const chalk = require('chalk')
const Table = require('cli-table3')
const rl = require('readline')
const figlet = require('figlet')
const inquire = require('./inquiry')

const getAllOfferCodes = require('./wrapper/getAllOfferCodes')
const getDeliveryPriceDiscount = require('./wrapper/getDeliveryPriceDiscount')
const getAllDeliveryTime = require('./wrapper/getDeliveryTime')
const putNewOfferCode = require('./wrapper/putNewOffer')
const getAllPkgDeliveryTime = require('./wrapper/getDeliveryTime')

console.log(
  chalk.yellow(
    figlet.textSync('Everest Engineering', {
      horizontalLayout: 'full',
      verticalLayout: 'controlled smushing',
    })
  )
)

const runApp = async () => {
  const { typeOfFunctionality } = await inquire.askTypeFunction()

  switch (typeOfFunctionality) {
    case 'Calculate delivery cost':
      await getDeliveryPriceDiscount()
      break
    case 'Calculate delivery time':
      await getAllPkgDeliveryTime()
      break
    case 'Get all existing offercodes':
      await getAllOfferCodes()
      break
    case 'Calculate delivery time':
      await getAllDeliveryTime()
      break
    case 'Add new offercode':
      await putNewOfferCode()
      break

    case 'Exit':
      process.exit(0)

    default:
      break
  }
  runApp()
}

runApp()
