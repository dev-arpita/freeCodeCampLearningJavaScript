function destroyer(arr, ...argument) {
  return arr
  .concat(argument)
  .filter(item => !argument.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
