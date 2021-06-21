function elementsWithoutDuration(list) {
  return list.filter(element => element.duration === undefined)
}

module.exports = elementsWithoutDuration
