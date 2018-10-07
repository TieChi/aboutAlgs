// 链表节点
class ListNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 创建初始空节点，方便插入和删除操作
let head = new ListNode(null);

// 将js的数组转化为数据结构的链表
function chainList(head, arr) {
    if (typeof arr === 'object' && arr.length) {
        // 沿着链表结构获取尾端
        let p = head;
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
    return head;
}

// 多次向链表尾部添加数组
let arr = [0, 2, 4, 6, 8];
head = chainList(head, arr);
let arr2 = [10, 12, 14, 16];
head = chainList(head, arr2);

// 是用递归迭代链表
function iteration(item, callback) {
    callback(item.val);
    if (item.next && typeof item.next === 'object') {
        iteration(item.next, callback);
    }
}

console.log('迭代列表:');
iteration (head, function(val) {
    console.log(val);
});

function findByValue(head, value) {
    let p = head;
    while (p != null && p.val != value) {
        p = p.next;
    }

    return p;
}
console.log('根据value获取item:');
console.log(findByValue(head, 8));

function findByIndex(head, i) {
    let p = head;
    let index = 0;
    while (p != null && index < i) {
        p = p.next;
        index++;
    }

    return p;
}
console.log('根据index获取item:');
console.log(findByIndex(head, 1));

function insertByIndex(head, i, item) {
    if (i !== 0) {
        let p = head;
        let index = 0;
        while (p != null && index < (i-1)) {
            // 如果p在链表末端，停止向下查询
            if (p.next) {
                p = p.next;
            }
            index++;
        }
        item.next = p.next;
        p.next = item;
    }

    return head;
}
head = insertByIndex(head, 2, new ListNode(7));
console.log('根据index插入item:');
iteration (head, function(val) {
    console.log(val);
});

function deleteByIndex(head, i) {
    if (i !== 0) {
        let p = head;
        let index = 0;
        while (p != null && index < (i-1)) {
            // 如果p在链表末端，停止向下查询
            if (p.next) {
                p = p.next;
            }
            index++;
        }
        if (p.next.next) {
            p.next = p.next.next;
        } else {
            p.next = null;
        }
    }

    return head;
}
head = deleteByIndex(head, 9);
console.log('根据index删除item:');
iteration (head, function(val) {
    console.log(val);
});



















