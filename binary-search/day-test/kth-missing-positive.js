// 1539. Kth Missing Positive Number

const findKthPositive = function (arr, k) {
    if (arr.length === 0) {
        return 0;
    }

    let missingCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + missingCount) {
            missingCount++;
        }
    }

    return k + missingCount;
};
