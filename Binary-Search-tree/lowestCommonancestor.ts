class TreeNode6 {
  val: number;
  left: TreeNode6 | null;
  right: TreeNode6 | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let i6 = 0;

function treeConstructor6(arr: number[]): TreeNode6 | null {
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

function lowestCommonAncestor2(
  node: TreeNode6 | null,
  p: TreeNode6 | null,
  q: TreeNode6 | null
): TreeNode6 | null {
  if (!node || !p || !q) {
    return null;
  }
  if (p.val < node.val && q.val < node.val) {
    return lowestCommonAncestor2(node.left, p, q);
  } else if (p.val > node.val && q.val > node.val) {
    return lowestCommonAncestor2(node.right, p, q);
  }

  return node;
}
