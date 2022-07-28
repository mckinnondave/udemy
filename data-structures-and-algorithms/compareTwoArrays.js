const array1 = ["a", "b", "c", "x"]
const array2 = ["z", "y", "x"]
const array3 = ["z", "y", "i"]

const compareArrays = (arr1, arr2) => {
  for (const element of arr1) {
    if (arr2.includes(element)) {
      return true;
    }
  }
  return false;
}

console.log(compareArrays(array1, array2))
console.log(compareArrays(array1, array3))