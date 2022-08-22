## AVL Tree
Unbalanced if subtrees differ by more than 1 level. Shift will occur that swaps nodes to make tree balanced

## Red/Black Tree
Self balancing binary search tree that adheres to a strict set of rules in order to maintain a logarithmic time complexity:
- Each node must be red or black
- root is always black
- 2 red nodes can never appear in a row within the tree; a red node must always have a black parent node and black child nodes
- every branch path from root node in tree to a null pointer passes through the exact same number of black nodes