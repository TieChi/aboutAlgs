/*
* 每一次有走1个或2个台阶两种可能，
* 求任意数量台阶有多少种走法
* */

let hasSolvedList = { };
function f(n){
    if (n == 1) return 1;
    if (n == 2) return 2;
    // 优先使用保存的计算结果，避免重复计算
    if (hasSolvedList[n]) {
        return hasSolvedList[n];
    }
    let rlt = f(n - 1) + f(n - 2);
    hasSolvedList[n] = rlt;

    return rlt;
}
// console.log(f(19));

// 非递归版
// 时间复杂度高于保存计算值的递归版，但不受内存空间的限制
function g(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    let ret = 0;
    let pre = 2;
    let prepre = 1;
    for (let i = 3; i <= n; ++i) {
        ret = pre + prepre;
        prepre = pre;
        pre = ret;
    }

    return ret;
}

// console.log(g(12));


/*
* 获取斐波那契数列
* */

let n = 12;
let arr = [];

/*递归式计算*/
function Fibonacci(index) {
    if (index === 0) return 1;
    if (index === 1) return 1;

    return Fibonacci(index - 1) + Fibonacci(index - 2);
}

/*非递归式计算*/
// function Fibonacci(index) {
//     if (index === 0) return 1;
//     if (index === 1) return 1;
//
//     let prepre = 1;
//     let pre = 1;
//     let rlt = 2;
//     for (let i = 2; i <= index; i++) {
//         rlt = prepre + pre;
//         prepre = pre;
//         pre = rlt;
//     }
//     return rlt;
// }

for (let i = 0; i <= n; i++) {
    arr.push(Fibonacci(i));
}
console.log(arr);