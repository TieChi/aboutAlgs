
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
    display() {
        return this.arr;
    }
}
let arr = [12, 2, 22, 42, 32];
console.log(new Heap().init(15).insertArr(arr).display());