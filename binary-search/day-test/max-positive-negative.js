// 2529. Maximum Count of Positive Integer and Negative Integer

// linear search
const maximumCount = function (nums) {
    if (nums.length === 0) {
        return -1;
    }

    let max = 0;
    let min = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            min++;
        } else if (nums[i] > 0) {
            max++;
        }
    }

    return max >= min ? max : min;
};
