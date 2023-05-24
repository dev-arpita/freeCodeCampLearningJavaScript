function translatePigLatin(str) {
  const strRegex = /[aeiou]/;
  const strArr = str.split("")

  const index = str.indexOf(str.match(strRegex))
  const consonent = strArr.slice(0, index)
  const newStr = strArr.slice(index)


  let result;
  if (!str.match(strRegex)) {
    result = consonent.concat(newStr).concat("ay").join("")
  }
  else if (!strRegex.test(str[0])) {
    result = newStr.concat(consonent).concat("ay").join("")
  }
  else {
    result = newStr.concat(consonent).concat("way").join("")
  }
  return result;
}


console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"))
