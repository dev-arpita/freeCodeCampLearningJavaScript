// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {
  for( let list = 0; list <contacts.length; list++){
    if(contacts[list].firstName === name){
      if(contacts[list].hasOwnProperty(prop)) {
        return contacts[list][prop]
      }
      else{
        return "No such property"
      }
    }
  }
  return "No such contact"
}
console.log(lookUpProfile("Sherlock", "likes"))
