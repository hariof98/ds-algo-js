const maxSubArray = function (nums) {
    let sum = 0;
    let max = nums[0];

    /* 
        Kadane's Algorithm -
            1. sum = sum + nums[i]
            2. sum > max => max = sum
            3. sum < 0 (for negative values verification) => sum = 0
    */

    for (let i = 0; i <= nums.length; i++) {
        sum = sum + nums[i];

        if (sum > max) {
            max = sum;
        }

        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
