// ABOUT

// Has a head node connected to other nodes that end with a tail and terminated with null

 const basket = ['apples', 'grapes', 'pears'];

//  linked list: apples => grapes => pears

// apples
// 8947 => grapes
//          8742 => pears
//                  372 => null

// prepend O(1)
// append O(1)
// lookup O(n)
// insert O(n)
// delete O(n)

// Pointer
const obj1 = { a: true }
const obj2 = obj1 // no second object is being created. Obj2 is simply pointing to the same location in memory as obj1.

console.log("OBJECT1", obj1);
console.log("OBJECT2", obj2);

delete obj1
console.log("New OBJECT2", obj2) // despite obj1 being deleted, obj2 still points to place in memory where {a: true } exists. If we change obj2 to equal something else (obj2 = "hello") {a: true} gets garbage collected and deleted from memory since we are no longer pointing to it.