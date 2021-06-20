const calculateOffer = require('./src/calculateOffer')

const discount = 100

calculateOffer({
  pkg_id: 'PKG1',
  pkg_weight_in_kg: 3,
  distance_in_km: 5,
  offer_code: 'OFR01',
  base_price: 400,
})
