function chunkArrayInGroups(arr, size) {
  const newArr = []
  for (let i = 0; i < arr.length; i += size)
    newArr.push(arr.slice(i, i + size))
  return newArr;
}


console.log("chunkArrayInGroups()=> ", chunkArrayInGroups(["a", "b", "c", "d"], 2));
// console.log("chunkArrayInGroups()=> ",chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4))
console.log("chunkArrayInGroups()=> ", chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
