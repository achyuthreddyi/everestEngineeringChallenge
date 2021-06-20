const offerCodes = require('./offerCodes')
function calculateOffer({
  pkg_id,
  pkg_weight_in_kg,
  distance_in_km,
  offer_code,
}) {
  if (!pkg_id || !pkg_weight_in_kg || !distance_in_km || !offer_code)
    return 'Please enter all the parameters'
  if (!(offer_code in offerCodes)) return 'Please enter a valid offerCode '

  return ''
}

module.exports = calculateOffer
