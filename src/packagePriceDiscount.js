const offerCodes = require('./offerCodes')

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

  if (!offerCode || (offerCode && !(offerCode.toUpperCase() in offerCodes)))
    return { price, discount }

  if (
    between(
      distanceInKm,
      offerCodes[offerCode].distanceRange.min,
      offerCodes[offerCode].distanceRange.max
    ) &&
    between(
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

function between(value, min, max) {
  return value >= min && value <= max
}
