function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.map(num => num)
  for (let i = arr1.length - 1; i >= 0; i--) {
    newArr.splice(n, 0, arr1[i])
  }
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
