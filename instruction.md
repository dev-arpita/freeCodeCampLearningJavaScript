# Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

## Tests:-

Waiting: confirmEnding("Bastian", "n") should return true.
Waiting: confirmEnding("Congratulation", "on") should return true.
Waiting: confirmEnding("Connor", "n") should return false.
Waiting: confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Waiting: confirmEnding("He has to give me a new name", "name") should return true.
Waiting: confirmEnding("Open sesame", "same") should return true.
Waiting: confirmEnding("Open sesame", "sage") should return false.
Waiting: confirmEnding("Open sesame", "game") should return false.
Waiting: confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Waiting: confirmEnding("Abstraction", "action") should return true.
Waiting: Your code should not use the built-in method .endsWith() to solve the challenge.

## Solutions:

function confirmEnding(str, target) {
// "Never give up and good luck will find you."
// -- Falcor

let re = new RegExp(target + "$", "i");

return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));
//Code Explanation//

    We need to make a pattern from the target variable that exists at the end of the string str.
    Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object new RegExp(pattern[, flags]), so we start with: new RegExp(target).
    Then we have to check at the end of the string, so we concatenate to the target variable the $ character to match the end: new RegExp(target+'$').
    We use the flag i to ignore the case of the pattern and we have our completed RegExp: new RegExp(target+'$','i'), or we can ommit the flag entirely.
    Finally, we are using our regular expression with the test method to the given string, to check if the string ends with the pattern and return true or false accordingly.

function confirmEnding(str, target) {
return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n");
--Code Explanation

    If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.
