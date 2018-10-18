/*
* 可扩展练习：
*   把栈扩展为自动扩容
*   用栈实现四则运算
*   用栈实现括号检查
*   用栈实现前进后退操作
*/

class Stack {
    constructor(len) {
        this.arr = [1, 3, 5];
        // 栈的唯一操作指针，增加或删除
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
        if (this.count) {
            this.arr[this.count - 1] = void 0;
            --this.count;
        }
        return this;
    }
}

new Stack(10).pop().pop().push(2).displayAll();
