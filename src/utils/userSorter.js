module.exports = arrayToSort => {
  const arrayToReturn = arrayToSort.sort((a, b) => b.score - a.score)
  return arrayToReturn
}
