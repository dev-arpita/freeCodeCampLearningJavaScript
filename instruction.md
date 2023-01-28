# Write Arrow Functions with Parameters

Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item \* 2;
doubler(4);

doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item \* 2;

It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item \* multi;
multiplier(4, 2);

multiplier(4, 2) would return the value 8.

Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

/**Tests**/

Waiting: You should replace the var keyword.
Waiting: myConcat should be a constant variable (by using const).
Waiting: myConcat should be an arrow function with two parameters
Waiting: myConcat() should return [1, 2, 3, 4, 5].
Waiting: The function keyword should not be used.
