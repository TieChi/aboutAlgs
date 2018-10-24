/*
    链表部分还有原地翻转没有清晰的注释，
    环形验证没有实现
 */

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
    getHead() {
        return this.head;
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
        
        return this;
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

        return this;
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

        return this;
    }
    // 原地翻转
    reverse3List() {
        // 从第一个有数据的节点开始翻转
        let begin = this.head.next;
        let t = null;
        let p = begin;
        let q = begin.next;
        let next = null;
        while (q != null) {
            next = q.next;
            q.next = p;
            p.next = t;
            t = p;
            p = q;
            q = next;
        }
        begin = p;
        // 把翻转后的链表重新接到哨兵后面
        this.head.next = begin;

        return this;
    }
    // 检查环形

}
// 合并任意多个链表
function concatList() {
    let len = arguments.length;
    // 该函数的参数只接收LinkedList的实例
    let i = 0;
    while (i < len) {
        if (!(arguments[i] instanceof LinkedList)) {
            console.log('参数出错');
            return;
        }
        ++i;
    }
    if (len === 0) {
        return new ListNode(null);
    }
    if (len === 1) {
        return arguments[0].getHead();
    }
    if (len > 1) {
        let i = 0;
        while (i < (len - 1)) {
            let p = arguments[i].getHead();
            while (p.next != null) {
                p = p.next;
            }
            let tail = p;
            if ((i + 1) !== len) {
                let nextHead = arguments[i+1].getHead();
                tail.next = nextHead.next;
                // 手动删除合并后冗余的哨兵
                delete nextHead;
            }
            ++i;
        }

        return arguments[0].getHead();
    }
}
// 根据head打印出对应链表
function displayAll(head) {
    let display = [];
    let p = head;
    while (p.next && typeof p.next === 'object') {
        display.push(p.val);
        p = p.next;
    }
    display.push(p.val);
    console.log(display);
}

/*多种方法翻转链表的结果*/
console.log( new LinkedList().chainList([1, 3, 5, 7, 9]).reverseList().getAll() );
console.log( new LinkedList().chainList([0, 2, 4, 6, 8]).reverse2List().getAll() );
console.log( new LinkedList().chainList([1, 3, 5, 7, 9]).reverse3List().getAll() );

/*合并链表结果*/
let myLink1 = new LinkedList().chainList([1, 3, 5, 7, 9]);
let myLink2 = new LinkedList().chainList([2, 4, 6, 8]);
let myLink3 = new LinkedList().chainList([9, 4, 15, 18, 8]);
let head = concatList(myLink1, myLink2, myLink3);
displayAll(head);