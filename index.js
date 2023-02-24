function largestOfFour(arr) {
  return arr.map( item => Math.max(...item));
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
/** Returns Largest(max-value) sub-array in Arrays
 * function largestOfFour(arr) {

  const newArr = arr.map( item => {
   let newValue = item.reduce((value, num) => value + num, 0)

   return newValue
  })
  let maxValue = Math.max(...newArr)

  return arr[newArr.indexOf(maxValue)]
}

console.log("largestOfFour",largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log("largestOfFour",largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))
 */
