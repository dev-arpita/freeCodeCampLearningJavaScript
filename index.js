function findLongestWordLength(str) {
  let strArr= str.split(" ")
  const wordArr = strArr.map(word => {
    return word.length
  })
  return Math.max(...wordArr);
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
