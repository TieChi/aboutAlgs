/*
* 二分查找（二分查找的难点在于确定边界条件）
* */

let arr = [ 10, 24, 28, 43, 44, 53, 79, 81, 86, 95 ];

function bsearch(arr, n) {
    let len = arr.length;
    let low = 0;
    let high = len - 1;
    // 当值在数组末尾时，最后一次查找在一个长度为1的数组，
    // 所以需要包含low == high的情况
    while(low < high) {
        let mid = Math.floor(low + ((high - low) >> 1));
        // 当剩余待查找量为2时，不排除arr[mid]会导致死循环
        if (n > arr[mid]) {
            low = mid - 1;
        } else if (n < arr[mid]) {
            high = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// console.log(bsearch(arr, 95));

// 二分查找的递归实现
function bsearch2(arr, n) {
    let len = arr.length;
    return bsearchInternally(arr, 0, len - 1, n);
}

function bsearchInternally(arr, low, high, n) {
    if (low > high) return -1;

    let mid =  low + ((high - low) >> 1);
    if (arr[mid] == n) {
        return mid;
    } else if (arr[mid] < n) {
        return bsearchInternally(arr, mid+1, high, n);
    } else {
        return bsearchInternally(arr, low, mid-1, n);
    }
}

// console.log(bsearch2(arr, 81));

/*
* 使用二分查找原理求n精确到小数点后6位的平方根
* */

function getSquareRoot() {

}