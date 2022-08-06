const twoSum = (nums, target) => {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (target.includes(i)) {
      sum += nums[i];
    }  
  }
  return sum;
}

console.log(twoSum([2,7,11,15], [0,1]));