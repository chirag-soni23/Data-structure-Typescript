"use strict";
class TreeNode6 {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let i6 = 0;
function treeConstructor6(arr) {
    if (arr[i6] === -1) {
        i6++;
        return null;
    }
    // nn => new node
    let nn = new TreeNode6(arr[i6]);
    i6++;
    let leftChild = treeConstructor6(arr);
    let rightChild = treeConstructor6(arr);
    nn.left = leftChild;
    nn.right = rightChild;
    return nn;
}
let tree6 = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
let root6 = treeConstructor6(tree6);
function lowestCommonAncestor2(node, p, q) {
    if (!node || !p || !q) {
        return null;
    }
    if (p.val < node.val && q.val < node.val) {
        return lowestCommonAncestor2(node.left, p, q);
    }
    else if (p.val > node.val && q.val > node.val) {
        return lowestCommonAncestor2(node.right, p, q);
    }
    return node;
}
