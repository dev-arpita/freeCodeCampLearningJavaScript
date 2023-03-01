function repeatStringNumTimes(str, num) {
   // Step 1. Create an empty string that will host the repeated string
  let repeatStr = ""
    // Step 2. Set the While loop with (times > 0) as the condition to check
  while(num > 0) { { // As long as times is greater than 0, the statement is executed
    // The statement
    repeatStr += str // Same as repeatedString = repeatedString + string;
       num--// Same as times = times - 1;
       }
  /* While loop logic
                      Condition       T/F       repeatedString += string      repeatedString        times
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    }
  */
  }
  // Step 3. Return the repeated string
  return repeatStr // "abcabcabc"
}
console.log(repeatStringNumTimes("abc", 3));

/**console result
  3
abc
2
abcabc
1
abcabcabc
 */
