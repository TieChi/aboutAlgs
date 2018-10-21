/*
* 冒泡排序和插入排序无论如何都是要多次遍历所有的数据，时间复杂度为O(n^2)。
* 大规模的数据排序需要用到分治思想或者说用到递归。
* */
let arr = [1, 6, 11, 5, 16, 0, 9, 4, 15, 18, 8, 2, 7, 19, 17, 14, 13, 10, 3, 12];

/*
* 归并排序
* */
class mergeSort {
    constructor() {

    }
    // 融合方法
    /*输入左右两个数组，返回将两个数组中的值比较合并后的一个数组*/
    merge(left, right) {
        let tmp = [];
        // 从最细粒度开始，逐渐将数组排序
        while (left.length && right.length) {
            // 如果左右有值相同，我们可以让左边的值优先放入tmp临时数组，
            // 这也是归并排序稳定的关键
            if (left[0] <= right[0])
                tmp.push(left.shift());
            else
                tmp.push(right.shift());
        }

        return tmp.concat(left, right);
    }
    // 分割方法
    devide(arr) {
        // 终止条件为arr只有一个元素
        if (arr.length === 1) return arr;

        // 将数组分为前后两部分，分别传入merge方法
        let mid = ~~(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);

        return this.merge(this.devide(left), this.devide(right));
    }
}

// console.log(new mergeSort().devide(arr));

/*
* 快速排序
* */

class QuickSort {
    constructor() {

    }
    sort(arr) {
        if (arr.length <= 1) { return arr; }
        var pivotIndex = Math.floor(arr.length / 2);
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];

        for (var i = 0; i < arr.length; i++){
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return this.sort(left).concat([pivot], this.sort(right));
    };
}

console.log(new QuickSort().sort(arr));

