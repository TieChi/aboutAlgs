/*
* 排序三问：
*   1.当前排序是原地排序吗？
*   2.当前排序是稳定的排序算法吗？
*   3.当前排序的时间复杂度是多少？
* */

/*
* 冒泡排序
* */

let arr = [1, 6, 11, 5, 16, 0, 9, 4, 15, 18, 8, 2, 7, 19, 17, 14, 13, 10, 3, 12];

class BobbleSort {
    constructor(arr) {
        this.arr = arr;
    }
    sort() {
        let len = this.arr.length;
        if (len <= 1) return arr;
        // 冒泡算法
        // 循环整个数组
        for (let i = 0; i < len; i++) {
            let flag = false;
            // 从在整个数组中查找最大值并将其放在数组末尾开始，
            // 不断找到剩余数组中的最大值并将其放在（不断缩短的）当前剩余数组的末尾
            for (let j = 0; j < len - i - 1; j++) {
                // 如果当前值比它后面的值大，交换两者位置
                if (this.arr[j] > this.arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                    flag = true;
                }
            }
            if (!flag) break;
        }
        return this.arr;
    }
}

// console.log(new BobbleSort(arr).sort());

/*
* 回答：
*   1.是。原地交换数组中的两个值。
*   2.是。当且仅当后值大于前值的时候才交换，不影响值相同时的顺序。
*   3.最大交换次数为n*(n-1)/4，大概估算平均交换次数为n*(n-1)/4。
*       通常的（也许是所有，但我做不了那么复杂的数学证明）排序计算比较的次数一定大于交换次数，
*       所以平均时间复杂度等于最大时间复杂度为O(n^2)。
* */

/*
* 插入排序
* */
class InsertionSort {
    constructor(arr) {
        this.arr = arr;
    }
    sort() {
        let len = this.arr.length;
        if (len <= 1) return this.arr;

        for (let i = 1; i < len; ++i) {
            let value = this.arr[i];
            let j = i - 1;
            // 查找插入的位置：
            // 从后向前遍历i之前的数据（也就是已排序部分），
            // 如果遍历到的值比value大，就把该值向后移动1位，直到找到this.arr[j]小于或等于value的情况。
            for (; j >= 0; --j) {
                if (this.arr[j] > value) {
                    this.arr[j+1] = this.arr[j];  // 数据移动
                } else {
                    break;
                }
            }
            // j之后的数据都依次向后移动一位，第j+1位的值已经被复制到下一位
            // 把value放在第j+1位
            this.arr[j+1] = value; // 插入数据
        }

        return this.arr;
    }
}

console.log(new InsertionSort(arr).sort());

/*
* 1.是。插入排序不需要多余的存储空间，是原地排序。
* 2.是。可以自主决定将后比较的值插到后面所以插入排序可以是稳定排序。
* 3.插入排序的插入操作就是在数组中插入一个值，也就是O(n^2)。
*     又因为该排序最大时间复杂度也为O(n^2)，则插入排序的平均时间复杂度为O(n^2)。
* */


/*
* 希尔排序
* （实现暂无）
* */









