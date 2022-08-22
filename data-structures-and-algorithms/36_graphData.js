// Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]] // 0 connected to 2, 2 connected to 3, 2 connected to 1, 1 connected to 3

  //   2 - 0
  //  / \
  // 1 - 3


// Adjacent List
const graph2 = [[2], [2,3], [0,1,3], [1,2]] // uses index to describe releationship - 0 connected to 2, 1 connected to 2 and 3, 2 connected to 0, 1, and 3...


// Adjacent Matrix
const graph3 = [
  [0, 0, 1, 0] // 0 element connected to 2
  [0, 0, 1, 1] // 1 element connected to 2, 3 ...
  [1, 1, 0, 1]
  [0, 1, 1, 0]
]