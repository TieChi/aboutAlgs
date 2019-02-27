
class HeapNode{
    constructor(data) {
        this.data = data;
    }
}

class Heap{
    constructor(arr){
        this.arr = [];
        this.count = 0;
    }
    init(capacity) {
        this.arr.length = capacity;
        return this;
    }
    insert(data) {
        if (this.count > this.capacity) {
            return this;
        }
        this.arr[this.count] = data;
        let i = this.count;
        while (parseInt(i/2) >= 0 && this.arr[i] > this.arr[parseInt(i/2)]) {
            [this.arr[i], this.arr[parseInt(i/2)]] = [this.arr[parseInt(i/2)], this.arr[i]];
            i = parseInt(i/2);
        }
        ++this.count;
        return this;
    }
    insertArr(arr) {
        let _this = this;
        arr.forEach(function(num) {
            _this.insert(num);
        });
        return this;
    }
    removeTop() {
        if (this.count === 0) {
            return null;
        } else {
            let top = this.arr[0];
            this.arr[0] = this.arr[this.count - 1];
            --this.count;
            this.heapify();
            return top;
        }
    }
    heapify() {
        let i = 0;
        while (true) {
            let maxPos = i;
            if (i*2+1 <= this.count && this.arr[maxPos] < this.arr[i*2]) maxPos = i*2+1;
            if (i*2+2 <= this.count && this.arr[maxPos] < this.arr[i*2+1]) maxPos = i*2+2;
            if (maxPos === i) break;
            [this.arr[i], this.arr[maxPos]] = [this.arr[maxPos], this.arr[i]];
            i = maxPos;
        }
    }

    display() {
        return this.arr;
    }
}

let arr = [12, 2, 22, 42, 32, 21, 24, 25];
let ex = new Heap().init(15).insertArr(arr);
console.log(ex.display());
console.log(ex.removeTop());
console.log(ex.display());

