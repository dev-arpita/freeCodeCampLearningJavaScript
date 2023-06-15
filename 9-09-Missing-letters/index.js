function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    // console.log(str.charCodeAt(0) + i)
    if (charCode !== str.charCodeAt(0) + i) {
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
