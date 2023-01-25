function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum)
  return [];
    else {
    const numArr = rangeOfNumbers(startNum, endNum - 1)
      numArr.push(endNum)
    return numArr
  }
};
console.log(rangeOfNumbers(1, 10))


