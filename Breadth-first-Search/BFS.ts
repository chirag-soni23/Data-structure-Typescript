class Treende {
    val: number;
    left: Treende | null;
    right: Treende | null;

    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let j = 0;

function constructTree(arr: number[]): Treende | null {
    if (arr[j] == -1) {
        j++;
        return null;
    }
    let nn = new Treende(arr[j]);
    j++;
    nn.left = constructTree(arr);
    nn.right = constructTree(arr);
    return nn;
}

let trie = [3, 9, -1, -1, 20, 15, -1, -1, 7, -1, -1];
let rout = constructTree(trie);

function BreadthFirstSearch(root: Treende | null): number[][] {
    if (root == null) return [];
    
    let q: (Treende | null)[] = [];
    q.push(root);
    let ans: number[][] = [];

    while (q.length > 0) {
        let size = q.length;
        let currLevel: number[] = [];
        
        while (size > 0) {
            // Remove
            let currNode = q.shift();
            if (currNode) {
                // Work
                currLevel.push(currNode.val);
                // left child insert
                if (currNode.left != null) {
                    q.push(currNode.left);
                }
                // right child insert
                if (currNode.right != null) {
                    q.push(currNode.right);
                }
            }
            size--;
        }
        ans.push(currLevel);
    }
    return ans;
}

console.log(BreadthFirstSearch(rout));
