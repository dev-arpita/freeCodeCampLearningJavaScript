function convertHTML(str) {
  let htmlEntities = {
    "&": "&amp;",
    "<" : "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'" : "&apos;"
    };

  return str
    .split("")
    .map(char => htmlEntities[char] || char)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Sixty > twelve"));
