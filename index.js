function whatIsInAName(collection, source) {
/* problem:
    If source prop and collection prop are same then only return
    that object from collection array
  solution:
    - take out source object prop
    - filter collection array to match the array object prop with
      the source obj prop
    - and return that matched object only.
  */
  const sourceProp = Object.keys(source)

  return collection.filter(object => sourceProp.every( key =>
    object.hasOwnProperty(key) && object[key] === source[key]
    )
  )
}



console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
{ last: "Capulet" }));

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 },
 { "apple": 1, "bat": 2, "cookie": 2 }],
 { "apple": 1, "bat": 2 }))
 console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}))
