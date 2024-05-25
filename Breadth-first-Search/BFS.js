var Treende = /** @class */ (function () {
    function Treende(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return Treende;
}());
var j = 0;
function constructTree(arr) {
    if (arr[j] == -1) {
        j++;
        return null;
    }
    var nn = new Treende(arr[j]);
    j++;
    nn.left = constructTree(arr);
    nn.right = constructTree(arr);
    return nn;
}
var trie = [3, 9, -1, -1, 20, 15, -1, -1, 7, -1, -1];
var rout = constructTree(trie);
function BreadthFirstSearch(root) {
    if (root == null)
        return [];
    var q = [];
    q.push(root);
    var ans = [];
    while (q.length > 0) {
        var size = q.length;
        var currLevel = [];
        while (size > 0) {
            // Remove
            var currNode = q.shift();
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
