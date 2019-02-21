/*
* 冒泡排序和插入排序无论如何都是要多次遍历所有的数据，时间复杂度为O(n^2)。
* 大规模的数据排序需要用到分治思想或者说用到递归。
* **归并排序能不能改造成原地排序？为什么？
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
            if (left[0] <= right[0]) {
                tmp.push(left.shift());
            } else {
                tmp.push(right.shift());
            }
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

console.log(new mergeSort().devide(arr));

/*
* 快速排序
* */

class QuickSort1 {
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

class QuickSort2 {
    constructor(arr) {
        this.arr = arr;
    }
    // 快速排序递归函数，p和r为下标
    quickSortInternally(p, r) {
        // 当数组长度为0或1时终止调用
        if (p >= r) {
            return;
        }
        // 该函数有两个作用：
        // return获取分割点
        // sideeffect为arr中p到r中的值被q平分（不一定按顺序）
        let q = this.partition(p, r);
        // 按分割点q分别递归地对数组的两部分（大于或小于arr[q]）,
        // 调用排序（按q分割）
        // 注意：因为arr[q]在arr[p]到arr[r]中排位不固定，
        //       所以q在p到r中的位置也不固定，
        //       所以arr中p到q-1与q+1到r的长度和长度比例也不固定
        this.quickSortInternally(p, q-1);
        this.quickSortInternally(q+1, r);

        return this.arr;
    }
    partition(p, r) {
        // 取数组最后一个值为分割点
        let pivot = this.arr[r];
        // 定义i和j两个都从p开始，但自增规则不同的变量
        let i = p;
        let j = p;
        // 循环p到r所有值，
        // 把所有小于pivot的值交换到i前面
        for(; j < r; ++j) {
            if (this.arr[j] < pivot) {
                [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
                ++i;
            }
        }
        // 把分割点pivot（a[r]）交换到a[i]位置
        [this.arr[i], this.arr[r]] = [this.arr[r], this.arr[i]];

        return i;
    }
}

// 是原地排序所以也可以不取返回值，只利用函数的sideeffect
// let len = arr.length;
// console.log( new QuickSort2(arr).quickSortInternally(0, (len-1)) );

