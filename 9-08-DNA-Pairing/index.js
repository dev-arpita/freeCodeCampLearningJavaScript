function pairElement(str) {
  let mainArr = [];

  const pairs = [
    ["A", "T"],
    ["T", "A"],
    ["C", "G"],
    ["G", "C"]

  ];
  const strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "A")
      mainArr.push(pairs[0]);

    else if (strArr[i] === "T")
      mainArr.push(pairs[1]);

    else if (strArr[i] === "C")
      mainArr.push(pairs[2]);

    else if (strArr[i] === "G")
      mainArr.push(pairs[3]);
  }
  return mainArr;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
