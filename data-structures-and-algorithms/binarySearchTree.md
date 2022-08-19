### Rules
- All child nodes to right of tree is greater than current node. Value always increases to the right. To the left, node is always decreasing
- Node can only have as many as 2 children.

Lookup: O(log N)
Insert: O(log N)
Delete: O(log N)

### Balanced vs Unbalanced
- Balanced: Tree is symetrical and balanced for node distribution - performance is O(log N)
- Unbalanced: Tree isn't symetrical and has nodes more on one side causing performance to be O(n)

Ideally, we want balanced search trees to have log N performance