"use strict";
// DFS => Depth First Search
class TreeNode4 {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let i4 = 0;
function treeConstructor4(arr) {
    if (arr[i4] === -1) {
        i4++;
        return null;
    }
    // nn => new node
    let nn = new TreeNode4(arr[i4]);
    i4++;
    let leftChild = treeConstructor4(arr);
    let rightChild = treeConstructor4(arr);
    nn.left = leftChild;
    nn.right = rightChild;
    return nn;
}
let tree4 = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
let root4 = treeConstructor4(tree4);
function nodetoRootPath(node, target) {
    if (node == null)
        return [];
    if (node.val === target)
        return [node];
    let leftPath = nodetoRootPath(node.left, target);
    if (leftPath.length > 0) {
        leftPath.push(node);
        return leftPath;
    }
    let rightPath = nodetoRootPath(node.right, target);
    if (rightPath.length > 0) {
        rightPath.push(node);
        return rightPath;
    }
    return [];
}
function lowestCommonAncestor(root, p, q) {
    let ntrpP = nodetoRootPath(root, p.val);
    let ntrpQ = nodetoRootPath(root, q.val);
    let i = ntrpP.length - 1;
    let j = ntrpQ.length - 1;
    let ans = null;
    while (i >= 0 && j >= 0 && ntrpP[i] === ntrpQ[j]) {
        ans = ntrpP[i];
        i--;
        j--;
    }
    return ans;
}
let targetNodeValue1 = 36;
let targetNodeValue2 = 44;
let targetNode1 = new TreeNode4(targetNodeValue1);
let targetNode2 = new TreeNode4(targetNodeValue2);
console.log(lowestCommonAncestor(root4, targetNode1, targetNode2));
