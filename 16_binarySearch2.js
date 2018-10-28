
let arr = [ 10, 24, 28, 28, 43, 44, 53, 53, 53, 79, 81, 81, 86, 95 ];
/*
* 获取重复值第一项索引值的二分查找
* （这是最大众、最容易理解的解法，但不是最简洁漂亮的）
* */

function bsearch1(arr, n) {
    let len = arr.length;
    let low = 0;
    let high = len - 1;

    while(low <= high) {
        let mid = Math.floor(low + ((high - low) >> 1));
        if (n > arr[mid]) {
            low = mid + 1;
        } else if (n < arr[mid]) {
            high = mid - 1;
        } else {
            if (mid == 0 || arr[mid - 1] !== n) {
                return mid;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}

// console.log(bsearch1(arr, 12));


/*
* 用相似的方法，可以获取到所有相同值中最靠后的一个
* */
function bsearch2(arr, n) {
    let len = arr.length;
    let low = 0;
    let high = len - 1;

    while(low <= high) {
        let mid = Math.floor(low + ((high - low) >> 1));
        if (n > arr[mid]) {
            low = mid + 1;
        } else if (n < arr[mid]) {
            high = mid - 1;
        } else {
            if (mid == 0 || arr[mid + 1] !== n) {
                return mid;
            } else {
                low = mid + 1;
            }
        }
    }

    return -1;
}

// console.log(bsearch2(arr, 53));

/*
* 查找第一个大于等于当前值的元素
* */
function bsearch3(arr, n) {
    let len = arr.length;
    let low = 0;
    let high = len - 1;

    while(low <= high) {
        let mid = Math.floor(low + ((high - low) >> 1));
        if (n <= arr[mid]) {
            if (mid == 0 || arr[mid - 1] < n) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else {
            low = mid + 1;
        }
    }

    return -1;
}

console.log(bsearch3(arr, 22));

/*
* 思考题：如何在循环数组中使用二分查找
* */