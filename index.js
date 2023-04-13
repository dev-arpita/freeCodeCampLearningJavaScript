
Array.prototype.myFilter = function(callback) {
  const newArray = [];

  // Only change code below this line

  this.forEach((element, index, array) => {
    if(callback(element, index, array))
       newArray.push(element)
  })

// Only change code above this line
  return newArray;
};
console.log("newArray",[23, 65, 98, 5, 13].myFilter(item => item % 2))
 console.log("newArray",["naomi", "quincy", "camperbot"].myFilter(
   element => element === "naomi"))
   console.log([1, 1, 2, 5, 2].myFilter((element, index, array) =>
   array.indexOf(element) === index))
