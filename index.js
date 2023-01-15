const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

const newMusic = {
  "artist": "Billy",
    "title": "Piano_Man",
    "release_year": 1970,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
}
myMusic.push (newMusic)
console.log(myMusic)
