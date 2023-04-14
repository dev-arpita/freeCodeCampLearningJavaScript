const squareList = arr => {
  // Only change code below this line
  const squareListArr = [];
  arr.filter(num => {
    if(num === Math.floor(num) && num > 0)
    squareListArr.push(num * num)
  })
  return squareListArr;
  // Only change code above this line
};

const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
console.log(squaredIntegers);
