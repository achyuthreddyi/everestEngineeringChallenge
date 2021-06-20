const offerCodes = require('./offerCodes')
const between = require('./util/between')

function calculateOffer({
  pkg_id,
  pkg_weight_in_kg,
  distance_in_km,
  offer_code,
  base_price,
  cost_of_unit_distance = 5,
  cost_of_unit_weight = 10,
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
    base_price +
    pkg_weight_in_kg * cost_of_unit_weight +
    distance_in_km * cost_of_unit_distance

  if (!offer_code) return price_after_discount

  if (
    between(
      distance_in_km,
      offerCodes[offer_code].distance_range.min,
      offerCodes[offer_code].distance_range.max
    ) &&
    between(
      pkg_weight_in_kg,
      offerCodes[offer_code].weight_range.min,
      offerCodes[offer_code].weight_range.max
    )
  ) {
    let discount = (offerCodes[offer_code].offer / 100) * price_after_discount
    price_after_discount = price_after_discount - discount
  }

  return price_after_discount
}

module.exports = calculateOffer
