const climbStairss = function (n) {
    if (n <= 1) {
        return 1;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
};

const climbStairs = (n) => {
    if (n <= 1) {
        return 1;
    }

    let arr = [1, 2];

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr[n - 1];
};

console.log(climbStairs(7));

// n = 7
// 1, 1, 1, 1, 1, 1, 1

// 2, 2, 2, 1
// 1, 2, 2, 2
// 2, 2, 1, 2

// 2, 1, 1, 1, 1, 1
// 1, 2, 1, 1, 1, 1
// 1, 1, 2, 1, 1, 1
// 1, 1, 1, 2, 1, 1
// 1, 1, 1, 1, 2, 1
// 1, 1, 1, 1, 1, 2
// output -> 5
