"use strict";
class TreeNode5 {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let i5 = 0;
function treeConstructor5(arr) {
  if (i5 >= arr.length || arr[i5] === -1) {
    i5++;
    return null;
  }
  // nn => new node
  let nn = new TreeNode5(arr[i5]);
  i5++;
  let leftChild = treeConstructor5(arr);
  let rightChild = treeConstructor5(arr);
  nn.left = leftChild;
  nn.right = rightChild;
  return nn;
}
let tree5 = [4, 2, 7, 1, 3];
let root5 = treeConstructor5(tree5);
// BST => Binary Search Tree
function searchBST(node, target) {
  if (node == null) return null;
  if (node.val == target) return node;
  if (target < node.val) {
    // left
    return searchBST(node.left, target);
  } else {
    // right
    return searchBST(node.right, target);
  }
}
let targetValue = 2;
console.log(searchBST(root5, targetValue));
