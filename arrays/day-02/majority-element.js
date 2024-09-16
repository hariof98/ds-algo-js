// 169. Majority Element

const majorityElement = function (nums) {
    if (nums.length === 0) {
        return -1;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let result = {
        element: null,
        count: Number.NEGATIVE_INFINITY,
    };

    for (let i = 0; i < nums.length; i++) {
        result[nums[i]] = result[nums[i]] ? result[nums[i]] + 1 : 1;

        if (result[nums[i]] > result.count) {
            result.element = nums[i];
            result.count = result[nums[i]];
        }
    }

    return result.element;
};
