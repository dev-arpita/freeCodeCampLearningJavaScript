
function sumAll(arr) {
  let sumInRange = 0
  for(let num =  Math.min(...arr); num <= Math.max(...arr); num++ )
  sumInRange += num
  return sumInRange;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));
console.log(sumAll([4, 1]))
console.log(sumAll([10, 5]))
