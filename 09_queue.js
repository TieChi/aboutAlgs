
/*
* 基于数组的队列
*/
// 从tail处入队，head处出队
class Queue {
    constructor(len) {
        this.arr = [1, 3, 5, 7, 9];
        this.arr.length = len;
        this.head = 0;
        this.tail = 0;
    }
    // 如果初始arr不为空需要首先获取tail的位置
    init() {
        // 从head出发寻找tail的位置
        let count = this.head;
        while (this.arr[count]) {
            this.tail = count + 1;
            count++;
        }

        return this;
    }
    displayAll() {
        console.log(this.arr);
    }
    enqueue(n) {
        // 如果数据已经在tail方向塞满，
        // 整体向head方向移动
        if (this.head !== 0 && this.tail === this.arr.length) {
            for (let i = this.head; i < this.tail; i++) {
                this.arr[i - this.head] = this.arr[i];
                this.arr[i] = void 0;
            }
            // 在重置队列中元素后重新获取head和tail的位置
            this.tail -= this.head;
            this.head = 0;
        }
        if (this.tail !== this.arr.length) {
            this.arr[this.tail] = n;
            ++this.tail;
        }

        return this;
    }
    dequeue() {
        this.arr[this.head] = void 0;
        ++this.head;

        return this;
    }
}

// 基于数组的循环队列
class CircularQueue {
    constructor(len) {
        this.arr = [1, 3, 5];
        this.arr.length = len;
        this.head = 0;
        this.tail = 0;
    }
    // 如果初始arr不为空需要首先获取tail的位置
    init() {
        // 从head出发寻找tail的位置
        let count = this.head;
        while (this.arr[count]) {
            this.tail = count + 1;
            count++;
        }

        return this;
    }
    displayAll() {
        console.log(this.arr);
    }
    enqueue(n) {
        if (this.tail % this.arr.length !== this.head) {
            this.arr[this.tail] = n;
            this.tail = (this.tail + 1) % this.arr.length;
        }

        return this;
    }
    dequeue() {
        this.arr[this.head] = void 0;
        this.head = (this.head + 1) % this.arr.length;

        return this;
    }
}

// 链表节点
class ListNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 链表实现队列
// 队列是在一端入队另一端出队的数据结构，不能使用哨兵
class linkedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    displayAll() {
        if (this.head) {
            var arr = [];
            var p = this.head;
            while (p.next) {
                arr.push(p.val);
                p = p.next;
            }
            arr.push(p.val);
            console.log(arr);
        } else {
            console.log(void 0);
        }
    }
    enqueue(n) {
        if (!this.tail) {
            this.head = new ListNode(n);
            this.tail = this.head;
        } else {
            this.tail.next = new ListNode(n);
            this.tail = this.tail.next;
        }

        return this;
    }
    dequeue() {
        if (this.head) {
            this.head = this.head.next;
        } else {
            this.head = null;
        }

        return this;
    }
}

new linkedQueue().enqueue(32).enqueue(32).dequeue().dequeue().displayAll();
