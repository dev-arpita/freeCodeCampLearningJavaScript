function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for( let i = 0; i < arr.length; i++) {
    for( let a = 0; a < arr[i].length; a++) {
      console.log(product *= arr[i][a])

    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
