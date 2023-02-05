# Ignore Case While Matching

Up until now, you've looked at regexes to do literal matches of strings. But sometimes, you might want to also match case differences.

Case (or sometimes letter case) is the difference between uppercase letters and lowercase letters. Examples of uppercase are A, B, and C. Examples of lowercase are a, b, and c.

You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

## Tests

Waiting: Your regex should match the string freeCodeCamp
Waiting: Your regex should match the string FreeCodeCamp
Waiting: Your regex should match the string FreecodeCamp
Waiting: Your regex should match the string FreeCodecamp
Waiting: Your regex should not match the string Free Code Camp
Waiting: Your regex should match the string FreeCOdeCamp
Waiting: Your regex should not match the string FCC
Waiting: Your regex should match the string FrEeCoDeCamp
Waiting: Your regex should match the string FrEeCodECamp
Waiting: Your regex should match the string FReeCodeCAmp
