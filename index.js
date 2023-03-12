function mutation(arr) {
  let message= ""
  const firstEl = arr[0].toLowerCase().split("")
  const secondEl = arr[1].toLowerCase().split("")
  for(let i = 0; i < secondEl.length; i++){
    if(firstEl.includes(secondEl[i])){
      message = true
      }
    else
    message = false
  }
  if(!firstEl.includes(secondEl[0])){
      message = false
  }
  return message
}

console.log("mutation()=>",mutation(["hello", "hey"]));
console.log("mutation()=>",mutation(["Mary", "Aarmy"]));
console.log("mutation()=>",mutation(["hello", "neo"]));

