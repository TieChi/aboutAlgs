
/*
* 基于数组的队列
*/
class Queue {
    constructor(len) {
        this.arr = [1, 3, 5, 7, 9];
        this.arr.length = len;
        // 表示队列入口和出口的指针，从tail处增加，从head处减少
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

new CircularQueue(5).init().dequeue().enqueue(13).enqueue(15).enqueue(23).displayAll();
