function getClosestShipment(possibleShipmentList, packageList) {
  if (possibleShipmentList.length === 1) return possibleShipmentList[0]
  const distanceList = []

  possibleShipmentList.forEach(element => {
    let distance = 0
    element.forEach(ele => {
      distance = Math.max(distance, packageList[ele].distance)
    })
    distanceList.push(distance)
  })

  const closestShipment =
    possibleShipmentList[distanceList.indexOf(Math.min(...distanceList))]
  return closestShipment
}

module.exports = getClosestShipment
