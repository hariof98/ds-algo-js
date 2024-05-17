const twoSum = function (nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        // O(n)
        for (let j = i + 1; j <= nums.length; j++) {
            // O(n)
            if (nums[i] + nums[j] === target) {
                return [i, j]; // O(1)
            }
        }
    }
};

// SC => O(1)
// TC => O(n^2)
