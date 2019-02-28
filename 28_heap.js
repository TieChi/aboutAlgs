
class HeapNode{
    constructor(data) {
        this.data = data;
    }
}

class Heap{
    constructor(arr){
        this.arr = [];
        this.count = 1;
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
        while (parseInt(i/2) > 0 && this.arr[i] > this.arr[parseInt(i/2)]) {
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
        if (this.count === 1) {
            return null;
        } else {
            let top = this.arr[1];
            this.arr[1] = this.arr[this.count - 1];
            this.arr[this.count - 1] = void 0;
            --this.count;
            this.heapify();
            return top;
        }
    }
    heapify() {
        let i = 1;
        while (true) {
            // 获取当前操作节点和它的两个子节点中最大的那个
            let maxPos = i;
            // 如果操作节点的值小于子节点，就将maxPos下沉到该子节点
            if (i*2 <= this.count && this.arr[maxPos] < this.arr[i*2]) {
                maxPos = i*2;
            };
            if (i*2+1 <= this.count && this.arr[maxPos] < this.arr[i*2+1]) {
                maxPos = i*2+1;
            };
            // 当最大值在当前操作节点时打断循环
            if (maxPos === i) {
                break;
            }
            // 如果没有被打断就将操作节点的值交换到对应子节点，
            // 操作节点也对应下移。
            [this.arr[i], this.arr[maxPos]] = [this.arr[maxPos], this.arr[i]];
            i = maxPos;
        }
    }
    display() {
        return this.arr;
    }
}

let arr = [12, 2, 24, 25, 22, 42, 32, 21];
let ex = new Heap().init(30).insertArr(arr);
console.log(ex.display());
console.log(ex.removeTop());
console.log(ex.display());