function Bird() {
  const weight = 15;
  this.getWeight = function () {
    return weight
  }

}
let ducky = new Bird();
console.log(ducky.getWeight())
