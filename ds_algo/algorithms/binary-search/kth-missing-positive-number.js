const findKthPositive = function (arr, k) {
    let count = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] <= k + count) {
            // 11 <= 5 + 4
            count++;
        }
    }

    return k + count;
};
