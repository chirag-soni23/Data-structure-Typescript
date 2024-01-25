// DFS => Depth First Search
class TreeNode2 {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
let i1 = 0;
function treeConstructor1(arr: number[]): TreeNode2 | null {
  if (arr[i1] == -1) {
    i1++;
    return null;
  }
  // nn => new node
  let nn = new TreeNode2(arr[i1]);
  i1++;
  let leftChild = treeConstructor1(arr);
  let rightChild = treeConstructor1(arr);
  nn.left = leftChild;
  nn.right = rightChild;
  return nn;
}
let tree1 = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
let root1 = treeConstructor1(tree1);
function NodetorootPath(node: TreeNode2 | null, target: number): number[] {
  if (node == null) return [];
  if (node.val == target) return [node.val];
  let leftPath = NodetorootPath(node.left, target);
  if (leftPath.length != 0) {
    leftPath.push(node.val);
    return leftPath;
  }
  let rightPath = NodetorootPath(node.right, target);
  if (rightPath.length != 0) {
    rightPath.push(node.val);
    return rightPath;
  }
  return [];
}
console.log(NodetorootPath(root1,44))
