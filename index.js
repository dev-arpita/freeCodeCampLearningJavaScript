function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
console.log(canary)
for (let prop in canary) {
 if(canary.hasOwnProperty(prop))
  ownProps.push(prop)
}
