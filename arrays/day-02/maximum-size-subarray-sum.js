// 209. Minimum Size Subarray Sum

// brute force - not optimized
const minSubArray = function (target, nums) {
    if (nums.length === 0 || !target) {
        return 0;
    }

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] >= target) {
                const val1 = [nums[i], nums[j]];
                result.push(val1);
            }
        }
    }

    const obj = {
        minimalSum: Number.POSITIVE_INFINITY,
        count: 0,
    };

    for (let i = 0; i < result.length; i++) {
        const stringify = JSON.stringify(result[i]);

        if (!obj[stringify]) {
            let sum = 0;

            for (let j = 0; j < result[i].length; j++) {
                sum = sum + result[i][j];
            }

            if (sum <= obj.minimalSum) {
                obj.minimalSum = sum;
                obj.count++;
            }

            obj[stringify] = sum;
        }
    }

    return obj.count;
};
