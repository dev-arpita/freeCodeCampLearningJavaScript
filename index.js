function spinalCase(str) {

  const newStr = str.split(/\s|_|(?=[A-Z])/).join("-")
    /*
    Explaination:
    whiteSpace or underscore or is followed by an uppercase letter
    join hyphen after
    */
  return newStr.toLowerCase();
}

console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("this Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("Teletubbies say Eh-oh"));

/*
solution plan of this problem:
  string need to be lower case
  and joined by dashes
*/
