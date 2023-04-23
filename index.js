
function sumAll(arr) {
  const startNum = Math.min(arr[0],arr[1])
  const endNum = Math.max(arr[0], arr[1])
  let sumInRange = 0
  for(let num = startNum; num <= endNum; num++ )

  sumInRange += num

  return sumInRange;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([4, 1]))
console.log(sumAll([10, 5]))
