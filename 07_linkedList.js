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
    // 翻转单链表
    reverseList() {
        let p = this.head;
        while (p.next != null) {
            p.next.next = p;
        }
        
        return this.head;
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

let myLink1 = new LinkedList();
myLink1.chainList([1, 3, 5]);
let myLink2Head = new LinkedList().chainList([2, 4, 6]);
myLink1.concatList(myLink2Head);
console.log(myLink1.getAll());

let myList3 = new LinkedList();
myList3.chainList([1, 2, 3]).reverseList();
console.log(myList3);


