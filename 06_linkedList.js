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
    // 按值查找
    findByValue(value) {
        let p = this.head;
        while (p != null && p.val != value) {
            p = p.next;
        }
        
        return p;
    }
    // 按索引查找
    findByIndex(index) {
        let p = this.head;
        let i = 0;
        while (p != null && i < index) {
            p = p.next;
            i++;
        }
    
        return p;
    }
    // 根据索引插入
    // 基本逻辑是只在索引值合乎插入条件的时候才执行插入操作，
    // 否则返回原链表
    insertByIndex(index, item) {
        // 有头链表第一项为哨兵，不能删除或修改
        if (index !== 0) {
            let p = this.head;
            let i = 0;
            while (p != null && i < (index-1)) {
                // 如果p在链表末端，停止向下查询
                if (!p.next) break;
                p = p.next;
                i++;
            }
            // 如果链表中存在索引值为index的位置，才插入
            if (i === (index - 1)) {
                item.next = p.next;
                p.next = item;
            }
        }
        
        return this;
    }
    // 根据索引删除
    deleteByIndex(index) {
        if (index !== 0) {
            let p = this.head;
            let i = 0;
            while (p != null && i < (index-1)) {
                // 如果p在链表末端，停止向下查询
                if (!p.next) break;
                p = p.next;
                i++;
            }
            if (p && p.next && p.next.next) {
                p.next = p.next.next;
            } else {
                p.next = null;
            }
        }
    
        return this;
    }
}

let myLink = new LinkedList();
myLink.chainList([0, 2, 4]);
myLink.chainList([6, 8]);

// console.log(myLink.findByValue(0));
// console.log(myLink.findByIndex(1));
console.log(myLink.insertByIndex(1, new ListNode(7)).getAll());
console.log(myLink.deleteByIndex(2).getAll());




















