const reverse = (str) => {
  return str.split("").reverse().join("");
};

console.log("Reverse:", reverse("Hi my name is Dave"));

const longReverse = (str) => {
  let array = str.split("");
  let reversedString = "";
  for (let i = array.length - 1; i >= 0; i--) {
    reversedString += array[i];
  }
  return reversedString;
};

console.log("Long Reverse:", longReverse("Hi my name is Dave"));

// Udemy solution
function udemyReverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

console.log("Udemy Answer:", udemyReverse("Hi my name is Dave"));
