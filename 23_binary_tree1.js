/*
* 二叉树的遍历
* */

let arr = [ 10, 24, 28, 43, 44, 53, 79, 81, 86, 95 ];

class TreeNode{
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree{
    constructor() {
        this.root = new TreeNode(null, null, null);
    }
    insert(data) {
        if (!this.root.data) {
            this.root = new TreeNode(data, null, null);
        } else {
            let parent;
            let current = this.root;
            while (current.data) {
                parent = current;
                if (data < parent.data) {
                    current = parent.left;
                }
                else {
                    current = parent.right;
                }
            }
            current.data = new TreeNode(data, null, null);
        }
        return this;
    }
    insertArr(arr) {
        let i = 0;
        while (i < arr.length) {
            this.insert(arr[i]);
            ++i;
        }
    }
    // Preorder() {
    //
    // }
}

new BinaryTree().insertArr(arr);
