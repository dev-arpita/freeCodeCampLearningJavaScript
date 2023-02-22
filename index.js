let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop',["deep"], 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', ['array', ["deeper"]]],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', ['depth', ["array", ["deepest"]]]]
  // Only change code above this line
];
// myNestedArray[1][0][0] = "deep"
// console.log(myNestedArray[1][0][0] = "deep")
console.log(myNestedArray[1][1][0])
console.log(myNestedArray[2][4][1][0])
console.log(myNestedArray[4][5][1][1][0])
