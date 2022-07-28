const array1 = ["a", "b", "c", "x"]
const array2 = ["z", "y", "x"]
const array3 = ["z", "y", "i"]

// const compareArrays = (arr1, arr2) => {
//   for (const element of arr1) {
//     if (arr2.includes(element)) {  <= time complexity is O(n)
//       return true;
//     }
//   }
//   return false;
// }

// O(a * b)
// O(1) Space complexity because no new variables are being created

// console.log(compareArrays(array1, array2))
// console.log(compareArrays(array1, array3))


// New Solution

const containsCommonItem = (arr1, arr2) => {
  // Loop through first array and create objects where properties === items in the array
  let map = {}
  for (let i = 0; i < arr1.length; i++) {
    if(!map[arr1[i]]) {
      const item = arr1[i]
      map[item] = true;
    }
  }

  // Loop through second array nad check if item in second array exists on created objects
  for (const element of arr2) {
    if(map[element]) {
      return true;
    }
  }
  return false
}

// O(a + b) Time Complexity is better here
// O(a) Space complexity because it creates a new object 

console.log(containsCommonItem(array1, array2))
console.log(containsCommonItem(array1, array3))

// How might we break this code? Ask interviewer if they want details on this.
// What if we have null? (breaks)

const containsCommonItem2 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item))
}

console.log("One-Liner", containsCommonItem2(array1, array2))
console.log("One-Liner", containsCommonItem2(array1, array3))