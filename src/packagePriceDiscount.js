const offerCodes = require('./offerCodes.json')
function isBetween(value, min, max) {
  return value >= min && value <= max
}

function getPackagePriceDiscount({
  pkgId,
  pkgWeightInKg,
  distanceInKm,
  offerCode,
  basePrice,
  costOfUnitDistance = 5,
  costOfUnitWeight = 10,
}) {
  if (
    !pkgId ||
    !pkgWeightInKg ||
    !distanceInKm ||
    typeof pkgWeightInKg !== 'number' ||
    typeof distanceInKm !== 'number'
  )
    return 'Please enter all the valid parameters'

  let price =
    basePrice +
    pkgWeightInKg * costOfUnitWeight +
    distanceInKm * costOfUnitDistance
  let discount = 0

  offerCode =
    offerCode &&
    offerCode
      .split(/[ ,]+/)
      .find(element => offerCodes.hasOwnProperty(element.toUpperCase()))

  if (!offerCode) return { price, discount }

  if (
    isBetween(
      distanceInKm,
      offerCodes[offerCode].distanceRange.min,
      offerCodes[offerCode].distanceRange.max
    ) &&
    isBetween(
      pkgWeightInKg,
      offerCodes[offerCode].weightRange.min,
      offerCodes[offerCode].weightRange.max
    )
  ) {
    discount = (offerCodes[offerCode].discount / 100) * price
    price = price - discount
  }

  return { price, discount }
}

module.exports = getPackagePriceDiscount
