## ABOUT

- Trees have a root, parents, children, leaves, and siblings

 <!-- 1
    / | \
   2  3  4
     / \
    6   7 -->

Root: 1
Parent: 1 and 3
Child: 2, 3, 4 and 6, 7
Leaf: 2, 4, 6, 7 <!-- Ends of any branches -->
Siblings: 2, 3, 4 and 6, 7


### Binary Tree

- Each node can only have 0, 1, or 2 nodes.

```js
function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
```

 <!-- 1
    /   \
   1     1
  / \   / \
 1   1 1   1 
Perfect Binary Tree 

      1
     / \
    1   1
   / \ 
  1   1
     / \
    1   1
Full Binary Tree -->