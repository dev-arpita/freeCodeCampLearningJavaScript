function sentensify(str) {
  // Only change code below this line
  const strArr = str.split(/\W/)
  return strArr.join(" ")
  // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));
