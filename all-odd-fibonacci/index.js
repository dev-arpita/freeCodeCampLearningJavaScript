function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      console.log("C",currNumber)
      console.log("RB",result)
      result += currNumber;
      console.log("R",result)
    }
    // Update next number
    currNumber += prevNumber;
     console.log("C",currNumber)
    // Update previous number
    prevNumber = currNumber - prevNumber;
     console.log("P",prevNumber)
  }
  return result;
}

// test here
console.log(sumFibs(4));