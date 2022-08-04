const strings = ['a', 'b', 'c', 'd']
// 4 * 4 = 16 bytes of storage

// push 
strings.push('e'); // O(1)

// pop 
strings.pop(); // O(1)

// unshift 
strings.unshift('x') // O(n) because we have to loop through array and reasign indexes now that we have inserted 'x' to 0 element

// splice
strings.splice(2, 0, 'alien') // O(n) because we have to loop again and change indexes for everything after alien

// lookup O(1) ex. strings[2]
// push O(1)
// insert O(n) ex. unshift
// delete O(n) ex. splice(2, 1)