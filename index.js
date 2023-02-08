
let findRegex = ("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3")
let reCriminals = /C+/g; // Change this line
let result = findRegex.match(reCriminals)
console.log(result)
