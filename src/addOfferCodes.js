const fs = require('fs')
const offerCodes = require('./offerCodes.json')

function addNewOfferCode({
  offerId,
  discount,
  minWeight,
  maxWeight,
  minDistance,
  maxDistance,
}) {
  discount = parseInt(discount)
  minWeight = parseInt(minWeight)
  maxWeight = parseInt(maxWeight)
  minDistance = parseInt(minDistance)
  maxDistance = parseInt(maxDistance)

  if (
    !offerId ||
    !discount ||
    !minWeight ||
    !maxWeight ||
    !minDistance ||
    !maxDistance
  )
    return 'Please enter all valid inputs'

  offerCodes[offerId.toUpperCase()] = {
    discount,
    distanceRange: {
      min: minDistance,
      max: maxDistance,
    },
    weightRange: {
      min: minWeight,
      max: maxWeight,
    },
  }
  fs.writeFile('src/offerCodes.json', JSON.stringify(offerCodes), err => {
    if (err) throw err
  })
  console.log('Offer added successfully')
  return
}

module.exports = addNewOfferCode
