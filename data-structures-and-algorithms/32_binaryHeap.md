## About

- Shaped like a binary tree except that every node is either greater than the nodes below it (max heap) or the nodes are greater every level down the tree, starting with the smallest root node (min heap).

- Lookup is O(n) and not O(log N) like binary search trees because they arent as ordered

- Great at comparative operations

- Inserts add value left to right, and in some cases has to 'bubble up' nodes to have their values make sense. 
  - Inserts are O(log n) if the node has to bubble up, but can be O(1) if no movement is required

