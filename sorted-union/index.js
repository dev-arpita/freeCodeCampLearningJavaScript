function uniteUnique(...arr) {
  const newArr = [];
  arr.map(item => item.map(i => newArr.push(i)));
  const sortedArr = [];
  newArr.filter(item => {
    if(!sortedArr.includes(item))
      sortedArr.push(item)
  })
  return sortedArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
