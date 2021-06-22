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
  if (
    !offerId ||
    !discount ||
    !minWeight ||
    !maxWeight ||
    !minDistance ||
    !maxDistance
  )
    return 'Please enter all valid inputs'

  console.log(offerId, discount, minWeight, maxWeight, minDistance, maxDistance)

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
  fs.writeFileSync('offerCodes.json', JSON.stringify(offerCodes), err => {
    if (err) throw err
  })
  console.log('Offer added successfully')
  return
}
let functionADd = data => addNewOfferCode(data)
module.exports = addNewOfferCode

// console.log(
//   functionADd({
//     offerId: 'gaga23',
//     discount: 100,
//     minDistance: 4,
//     maxDistance: 5,
//     maxWeight: 76,
//     minWeight: 56,
//   })
// )
// console.log(
//   addNewOfferCode({
//     offerId: 'achyuth',
//     discount: 100,
//     minDistance: 4,
//     maxDistance: 5,
//     maxWeight: 76,
//     minWeight: 56,
//   })
// )
