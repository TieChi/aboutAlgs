// 链表节点
class ListNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new ListNode(null);
    }
    // 用数组列出链表内容
    getAll() {
        let display = [];
        // 是用递归迭代链表
        function iteration(item, callback) {
            callback(item.val);
            if (item.next && typeof item.next === 'object') {
                iteration(item.next, callback);
            }
        }
        iteration (this.head, function(val) {
            display.push(val);
        });
        return display;
    }
    // 向链表末尾添加数组
    chainList(arr) {
        if (typeof arr === 'object' && arr.length) {
            // 沿着链表结构获取尾端
            let p = this.head;
            while (p.next != null) {
                p = p.next;
            }
            let tail = p;
            // 把数组转化成链表添加在最后
            for (let i = 0; i < arr.length; i++) {
                let node = new ListNode(arr[i]);
                tail.next = node;
                tail = node;
            }
        }
        
        return this.head;
    }
    // 翻转单链表 方法名不明
    reverseList() {
        let source, head;
        // 首先截去头部空节点简化翻转过程
        head = this.head.next;
        this.head = new ListNode(null);
        // 如果去掉空节点的链表长度大于1
        if (head && head.next) {
            let p = head;
            let q = head.next;
            // 切断p到q的指向
            p.next = null;
            // 以q为起点开始循环
            while (q != null) {
                // 源链表以q的next为起点
                // 将q的next指向p，把q从旧链表头部去掉并加入新链表头部
                source = q.next;
                q.next = p;
                // 新链表的头部（p）是当前的q
                // 旧链表头部（q）是当前source
                p = q;
                q = source;
            }
            this.head.next = p;
        } else {
            this.head.next = head;
        }

        return this.head;
    }
    // 尾插法 反转单链表
    reverse2List() {
        // 定义新链表
        const root = new ListNode(null);
        // 跳过作为占位的头部空节点
        let currentNode = this.head.next;
        // 只要当前节点没不为空就可以一直向下继续寻找
        while (currentNode != null) {
            // 可能为null的next节点
            const next = currentNode.next;
            // 在当前节点后接入新链表除头部空节点主体
            // 把当前节点接入新链表头部空节点后面
            currentNode.next = root.next;
            root.next = currentNode;
            // 移动到当前节点的next节点
            currentNode = next;
        }
        this.head = root;
    }
    reverse3List() {
        let t = null;
        let p = this.head;
        let q = this.head.next;
        let next = null;
        while(q != null){
            console.log(t);
            next = q.next;
            q.next = p;
            p.next = t;
            t = p;
            p = q;
            q = next;
        }
        this.head = p;
    }
    // 向后接入其它链表
    concatList(addition) {
        if (typeof addition === 'object' && addition.next) {
            let p = this.head;
            while (p.next != null) {
                p = p.next;
            }
            let tail = p;
            tail.next = addition.next;
        }
        
        return this.head;
    }
}

// let myLink1 = new LinkedList();
// myLink1.chainList([1, 3, 5, 7, 9]);
// let myLink2Head = new LinkedList().chainList([2, 4, 6, 8]);
// myLink1.concatList(myLink2Head);
// console.log(myLink1.getAll());

// let myList3 = new LinkedList();
// myList3.chainList([1, 3, 5, 7, 9]);
// console.log(myList3.getAll());
// myList3.reverseList();
// console.log(myList3.getAll());

// let myList4 = new LinkedList();
// myList4.chainList([0, 2, 4, 6, 8]);
// console.log(myList4.getAll());
// myList4.reverse2List();
// console.log(myList4.getAll());

let myList5 = new LinkedList();
myList5.chainList([0, 2, 4, 6, 8]);
console.log(myList5.getAll());
myList5.reverse3List();
console.log(myList5.getAll());