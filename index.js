function filteredArray(arr, elem) {
  let newArr = [];
  console.log(elem)
  // console.log(arr)

  // Only change code below this line
for(let i = 0; i < arr.length; i++) {
  // console.log("arr[i]", arr[i])
  // console.log(arr[i].indexOf(elem))

  if(arr[i].indexOf(elem) == -1) {
   newArr.push(arr[i])
  }
}
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) )
