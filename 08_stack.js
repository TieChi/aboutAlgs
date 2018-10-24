/*
* 可扩展练习：
*   把数组栈扩展为自动扩容
*   用栈实现四则运算
*   用栈实现括号检查
*   用栈实现前进后退操作
*/

// 自动扩容的数组栈
class ArrayStack {
    constructor() {
        this.arr = [1, 3, 5, 7, 9];
        this.len = 5;
        // 栈的唯一操作指针，增加或删除
        this.count = this.arr.length;
        this.arr.length = this.len;
    }
    init() {
        let i = 0;
        while (i < this.arr.length) {
            if (this.arr[i]) {
                i++;
            } else {
                break;
            }
        }
        this.count = i;

        return this;
    }
    displayAll() {
        console.log(this.arr);
    }
    push(n) {
        // 当监测到当前栈数组已满时，
        // 先扩容再添加数据到栈顶。
        if (this.count === this.len) {
            this.len *= 2;
            let expandArray = [];
            expandArray.length = this.len;
            let i = 0;
            while (i < this.arr.length) {
                expandArray[i] = this.arr[i];
                ++i;
            }
            this.arr = expandArray;
        }
        this.arr[this.count] = n;
        ++this.count;

        return n;
    }
    pop() {
        let item;
        if (this.count) {
            item = this.arr[this.count - 1];
            this.arr[this.count - 1] = void 0;
            --this.count;
        }
        return item;
    }
}

// let stack1 = new ArrayStack();
// stack1.init().push(12);
// stack1.displayAll();

/*
* 链表栈
* */
class ListNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class LinkedStack {
    constructor() {
        this.head = new ListNode(null);
        this.count = this.head;
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
        console.log(display);
    }
    push(n) {
        let node = new ListNode(n);
        this.count.next = node;
        this.count = node;

        return n;
    }
    pop() {
        if (this.count !== this.head) {
            let n;
            let p = this.head;
            while (p.next && p.next !== this.count) {
                p = p.next;
            }
            p.next.val = n;
            p.next = void 0;

            return n;
        }
    }
}

let stack2 = new LinkedStack();
stack2.push(12);
stack2.push(42);
stack2.pop();
stack2.getAll();