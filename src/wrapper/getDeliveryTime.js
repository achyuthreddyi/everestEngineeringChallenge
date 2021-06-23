const getPackageDeliveryTime = require('../packageDeliveryTime')
const inquire = require('../inquiry')
const chalk = require('chalk')

const getAllDeliveryTime = async () => {
  // getPackageDeliveryTime
  const { offerId, discount, minWeight, maxWeight, minDistance, maxDistance } =
    await inquire.askNewOfferDetails()
  console.log(offerId, discount, minWeight, maxWeight, minDistance, maxDistance)
}
getAllDeliveryTime
module.exports = getAllDeliveryTime
