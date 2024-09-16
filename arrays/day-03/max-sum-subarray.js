// 53. Maximum Subarray - (similar to max-product-subarray)
// Kadane's Algorithm

const maxSubArray = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let max = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        max = Math.max(nums[i], max + nums[i]);

        result = Math.max(result, max);
    }

    return result;
};
