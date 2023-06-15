# Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

## Tests

Waiting: translatePigLatin("california") should return the string aliforniacay.
Waiting: translatePigLatin("paragraphs") should return the string aragraphspay.
Waiting: translatePigLatin("glove") should return the string oveglay.
Waiting: translatePigLatin("algorithm") should return the string algorithmway.
Waiting: translatePigLatin("eight") should return the string eightway.
Waiting: Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
Waiting: Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

## Solutions:

```

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);

return myConsonants !== null
? str
.replace(consonantRegex, "")
.concat(myConsonants)
.concat("ay")
: str.concat("way");
}

```

```
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }
}

```
