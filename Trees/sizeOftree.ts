class TreeNode1 {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val: number) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  let ix = 0;
  function treeConstructors(arr: number[]): TreeNode | null {
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

  function getSize(node:TreeNode1 | null) :number{
    if(node==null) return 0;
    let leftSize = getSize(node.left)
    let rightSize = getSize(node.right)
    return leftSize + rightSize + 1
  }
  console.log(getSize(rooot))