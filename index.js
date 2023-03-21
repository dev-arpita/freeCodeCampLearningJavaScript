function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function () {
    return "Meat"
  },
  describe: function () {
    return `My name is ${this.name}`
  }

};
