function titleCase(str) {
  return str
  .toLowerCase()
  .split(" ")
  .map( word =>  word.charAt(0).toUpperCase() + word.slice(1, word.length))
  .join(" ")

}

console.log("titleCase()=>",titleCase("I'm a little tea pot"));
console.log("titleCase()=>",titleCase("sHoRt AnD sToUt"));
