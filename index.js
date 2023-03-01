function truncateString(str, num) {
  let truncateStr = "..."
  let cutStr = str.slice(str, num)
  if(str.length === cutStr.length) {
    return str
  }
  else if(cutStr.length === num) {
    return cutStr + truncateStr;
  }

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Absolutely Longer", 2));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));

