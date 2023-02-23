function reverseString(str) {
  let newStr = ""
  let strArray = str.split("")
  for( let i = strArray.length -1; i >= 0; i--) {
    newStr += strArray[i]
    str = newStr
  }
  return str;
}

console.log(reverseString("hello"));
