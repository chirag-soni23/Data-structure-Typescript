class TreeNode3{
    val:number;
    left:TreeNode3 | null;
    right:TreeNode3|null
    constructor(val:number) {
        this.val = val,
        this.left = null,
        this.right = null
        
    }
}
let i2 = 0
function treeConstructor2(arr:number[]):TreeNode3|null {
    if(arr[i2]==-1){
        i2++ 
        return null
    }  
    let newNode = new TreeNode3(arr[i2])
    i2++ 
    let leftNode = treeConstructor2(arr) 
    let rightNode = treeConstructor2(arr)
    newNode.left = leftNode
    newNode.right = rightNode
    return newNode; 
}
let tree3 = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
let root3 = treeConstructor2(tree3);