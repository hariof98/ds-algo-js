// re-visit
const maxProduct = function (nums) {
    if (nums.length === 0) return 0;

    let max = nums[0]; // 4
    let min = nums[0]; // -8
    let result = nums[0]; // 30

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            // 7 < 0
            let temp = max;
            max = min;
            min = temp;
        }

        max = Math.max(nums[i], max * nums[i]); // Math.max(7, 4*7=28) => Math.max(7, 28) => 28
        min = Math.min(nums[i], min * nums[i]); // Math.min(7, -8*7=-56) => Math.min(7, -56) => -56

        result = Math.max(result, max); // Math.max(30, 28) => 30
    }

    return result;
};

console.log(maxProduct([2, 3, 1, 5, -2, 4, 7]));
