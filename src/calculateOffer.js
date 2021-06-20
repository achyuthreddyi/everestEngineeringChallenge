const offerCodes = require('./offerCodes')

function calculateOffer({
  pkg_id,
  pkg_weight_in_kg,
  distance_in_km,
  offer_code,
  base_price,
}) {
  if (
    !pkg_id ||
    !pkg_weight_in_kg ||
    !distance_in_km ||
    typeof pkg_weight_in_kg !== 'number' ||
    typeof distance_in_km !== 'number'
  )
    return 'Please enter all the valid parameters'

  if (offer_code && !(offer_code.toUpperCase() in offerCodes))
    return 'Please enter a valid offerCode '

  let price_after_discount =
    base_price + pkg_weight_in_kg * 10 + distance_in_km * 5

  if (!offer_code) return price_after_discount

  if (
    distance_in_km >= offerCodes[offer_code].distance_range.min &&
    distance_in_km <= offerCodes[offer_code].distance_range.max &&
    pkg_weight_in_kg >= offerCodes[offer_code].weight_range.min &&
    pkg_weight_in_kg <= offerCodes[offer_code].weight_range.max
  )
    price_after_discount =
      price_after_discount -
      (offerCodes[offer_code].offer / 100) * price_after_discount
  console.log(offerCodes[offer_code].distance_range.min)
  console.log(price_after_discount)

  return 'valid offer code'
}

module.exports = calculateOffer
