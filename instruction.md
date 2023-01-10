Adding a Default Option in Switch Statements

In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

A default statement should be the last case.

switch (num) {
case value1:
statement1;
break;
case value2:
statement2;
break;
...
default:
defaultStatement;
break;
}

Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff
Tests

Waiting: switchOfStuff("a") should return the string apple
Waiting: switchOfStuff("b") should return the string bird
Waiting: switchOfStuff("c") should return the string cat
Waiting: switchOfStuff("d") should return the string stuff
Waiting: switchOfStuff(4) should return the string stuff
Waiting: You should not use any if or else statements
Waiting: You should use a default statement
Waiting: You should have at least 3 break statements
