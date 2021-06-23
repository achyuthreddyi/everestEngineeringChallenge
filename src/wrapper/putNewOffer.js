const inquire = require('../inquiry')
const chalk = require('chalk')
const addNewOfferCode = require('../addOfferCodes')
const getAllOfferCodes = require('./getAllOfferCodes')

const putNewOfferCode = async () => {
  // getPackageDeliveryTime
  const { offerId, discount, minWeight, maxWeight, minDistance, maxDistance } =
    await inquire.askNewOfferDetails()
  console.log(
    ' fdfdfdfofferId, discount, minWeight, maxWeight, minDistance, maxDistance'
  )

  await addNewOfferCode({
    offerId,
    discount,
    minWeight,
    maxWeight,
    minDistance,
    maxDistance,
  })
  getAllOfferCodes()
}
// putNewOfferCode()
module.exports = putNewOfferCode
