class TreeNode1 {
  val: number;
  left: TreeNode1 | null;
  right: TreeNode1 | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let ix = 0;
function treeConstructors(arr: number[]): TreeNode1 | null {
  if (arr[ix] == -1) {
    ix++;
    return null;
  }
  // nn => new node
  let nn = new TreeNode1(arr[ix]);
  ix++;
  let leftChild = treeConstructors(arr);
  let rightChild = treeConstructors(arr);
  nn.left = leftChild;
  nn.right = rightChild;
  return nn;
}
let treee = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
let rooot = treeConstructors(treee);

// Size of node
function getSize(node: TreeNode1 | null): number {
  if (node == null) return 0;
  let leftSize = getSize(node.left);
  let rightSize = getSize(node.right);
  return leftSize + rightSize + 1;
}
// maximum no. of node
function getMax(node: TreeNode1 | null): number {
  if (node == null) return -Infinity;
  let leftmaxNode = getMax(node.left);
  let rightmaxNode = getMax(node.right);
  return Math.max(node.val, Math.max(leftmaxNode, rightmaxNode));
}
// console.log(getSize(rooot))
console.log(getMax(rooot));
