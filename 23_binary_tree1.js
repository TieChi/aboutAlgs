/*
* 二叉树的遍历
* */

let arr = [1, 6, 11, 5, 16, 0, 9, 4, 15, 18, 8, 2, 7, 19, 17, 14, 13, 10, 3, 12];

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
    // 简洁标准的插入方法
    insert1(data) {
        if (!this.root.data) {
            this.root = new TreeNode(data, null, null);
        } else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = new TreeNode(data, null, null);
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current == null) {
                        parent.right = new TreeNode(data, null, null);
                        break;
                    }
                }
            }
        }
        return this;
    }
    // 啰嗦但更容易理解的插入方法
    insert2(data) {
        if (!this.root.data) {
            this.root = new TreeNode(data, null, null);
        } else {
            let parent;
            let current = this.root;
            while (current && current.data) {
                parent = current;
                if (data < parent.data) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
            if (data < parent.data) {
                parent.left = new TreeNode(data, null, null);
            }
            else {
                parent.right = new TreeNode(data, null, null);
            }
        }
        return this;
    }
    insertArr(arr) {
        let i = 0;
        while (i < arr.length) {
            this.insert2(arr[i]);
            ++i;
        }
        return this;
    }
    find(data) {
        var current = this.root;
        while (current && current.data) {
            if (data === current.data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            }
        }
        return null;
    }
    remove(data) {
        this.removeNode(this.root, data);
        return this;
    }
    removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            let current = node;
            // 没有子节点的节点
            if (node.left == null && node.right == null) {
                return null;
            }
            // 没有左子节点的节点
            if (node.left == null) {
                return node.right;
            }
            // 没有右子节点的节点
            if (node.right == null) {
                return node.left;
            }
            // 有两个子节点的节点
            var tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
    getSmallest(node) {
        let current = node;
        if (node.left) {
            current = node.left;
        }
        return current;
    }
    // 中序遍历
    midOrderTree() {
        this.midOrder(this.root);
    }
    midOrder(node) {
        if (node && node.data) {
            this.midOrder(node.left);
            console.log(node.data);
            this.midOrder(node.right);
        }
    }
}

console.log(new BinaryTree().insertArr(arr).remove(12).midOrderTree());
