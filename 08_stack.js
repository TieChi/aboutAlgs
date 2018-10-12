class Stack {
    constructor(len) {
        this.arr = [1, 1];
        this.count = this.arr.length;
        this.arr.length = len;
    }
    displayAll() {
        console.log(this.arr);
    }
    push(n) {
        if (this.count !== this.arr.length) {
            this.arr[this.count] = n;
            ++this.count;
        }
        return this;
    }
    pop() {

    }
}

new Stack(10).push(2).push(2).displayAll();
