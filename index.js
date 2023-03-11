function getIndexToIns(arr, num) {
  let arrIndex = ""
  arr.push(num)
  arr.map(index => {
    if (index >= num) {
      arr.sort((a, b) => a - b)
      arrIndex = arr.indexOf(num)
    }
  })
  return arrIndex
}

console.log("getIndexToIns =>", getIndexToIns([40, 60], 50))
console.log("getIndexToIns =>", getIndexToIns([20, 3, 5], 19))
console.log("getIndexToIns =>", getIndexToIns([], 1))
console.log("getIndexToIns =>", getIndexToIns([10, 20, 30, 40, 50], 30))
