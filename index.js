function bouncer(arr) {
  let newArr = []
   arr.map(item => {
    if(item)
      newArr.push(item)
  })
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
