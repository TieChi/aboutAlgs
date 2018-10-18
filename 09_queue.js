
/*
* 基于数组的队列
* */
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
            this.tail = count;
            count++;
        }

        return this;
    }
    displayAll() {
        console.log(this.arr);
    }
    enqueue(n) {
        this.init();
        if (this.head !== 0 && this.tail === this.arr.length) {
            for (let i = this.head; i < this.tail; i++) {
                this.arr[i - this.head] = this.arr[i];
            }
        }
        console.log(this.arr);
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

new Queue(5).init()
            .dequeue().dequeue()
            .enqueue(21)
            .displayAll();
