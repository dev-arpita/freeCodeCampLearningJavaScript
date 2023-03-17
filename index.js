function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

const myHouse = new House(3)
console.log(myHouse)
console.log(myHouse instanceof House)
