<<<<<<< HEAD
# Understand Own Properties

In the following example, the Bird constructor defines two properties: name and numLegs:

=======
# Object Oriented Programming

Understand Own Properties

In the following example, the Bird constructor defines two properties: name and numLegs:

>>>>>>> e6d8ba591f4c9712f05999b971edca671524b5c0
function Bird(name) {
this.name = name;
this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
<<<<<<< HEAD

name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

=======

name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties. In fact every instance of Bird will have its own copy of these properties. The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

>>>>>>> e6d8ba591f4c9712f05999b971edca671524b5c0
for (let property in duck) {
if(duck.hasOwnProperty(property)) {
ownProps.push(property);
}
}

console.log(ownProps);

The console would display the value ["name", "numLegs"].

Add the own properties of canary to the array ownProps

## Tests

Waiting: ownProps should include the values numLegs and name.
Waiting: You should solve this challenge without using the built in method Object.keys().
Waiting: You should solve this challenge without hardcoding the ownProps ar

<!-- ## Solutions: -->
