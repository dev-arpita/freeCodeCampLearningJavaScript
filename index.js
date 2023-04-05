// The global variable
const bookList = ["The Hound of the Baskervilles",
 "On The Electrodynamics of Moving Bodies",
 "Philosophiæ Naturalis Principia Mathematica",
 "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookArr, bookName) {
  const list = bookArr.slice()
  list.push(bookName);
  return list;

  // Change code above this line
}

// Change code below this line
function remove(bookArr, bookName) {
  const list = bookArr.slice()
  const book_index = list.indexOf(bookName);

  if (book_index >= 0) {
    list.splice(book_index, 1);
    return list;

    // Change code above this line
    }
}
console.log("ADD",add(bookList, "A Brief History of Time"))

console.log("remove()=>",remove(bookList, 'Disquisitiones Arithmeticae'))
// console.log("bookList",bookList)
