const fs = require('fs')
const offerCodes = require('./offerCodes.json')

const abc = 'OFR010'
let newOffer = {
  OFR002: {
    discount: 7,
    distanceRange: {
      min: 50,
      max: 150,
    },
    weightRange: {
      min: 100,
      max: 250,
    },
  },
}
;(offerCodes[abc] = {
  discount: 7,
  distanceRange: {
    min: 50,
    max: 150,
  },
  weightRange: {
    min: 100,
    max: 250,
  },
}),
  console.log('newOffer', offerCodes)
fs.writeFile('offerCodes.json', JSON.stringify(offerCodes), err => {
  // Checking for errors
  if (err) throw err

  console.log('Done writing') // Success
})
// console.log(offerCodes[abc])
