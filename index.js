function myReplace(str, before, after) {

  const firstLetterOfBefore = before.charAt(0);
  const firstLetterOfAfter = after.charAt(0);

  let newAfter;

  if(firstLetterOfBefore.toUpperCase() === firstLetterOfBefore)
    newAfter = after.replace(firstLetterOfAfter, firstLetterOfAfter.toUpperCase())

  else
    newAfter = after.replace(firstLetterOfAfter, firstLetterOfAfter.toLowerCase())

  return str.replace(before, newAfter);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("His name is Tom", "Tom", "john"))

/*
  - replace before with after
  - if before is capitalized then after need to
      convert it to capitalized
*/
