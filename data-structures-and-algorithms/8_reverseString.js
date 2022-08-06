const reverse = (str) => {
  return str.split('').reverse().join('')
}

console.log("Reverse:", reverse("Hi my name is Dave"));

const longReverse = (str) => {
  let array = str.split('')
  let reversedString = ""
  for (let i = array.length - 1; i >= 0; i--) {
     reversedString += array[i]   
  }
  return reversedString
}

console.log("Long Reverse:", longReverse("Hi my name is Dave"));