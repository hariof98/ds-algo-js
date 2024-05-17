// leetcode - 217. Contains Duplicate
const containsDuplicate = function (nums) {
    for (let i = 0; i <= nums.length; i++) {
        // TC -> O(n)
        for (let j = i + 1; j <= nums.length; j++) {
            // TC -> O(n)
            if (nums[i] === nums[j]) {
                return true; // SC -> O(1)
            }
        }
    }

    return false; // SC -> O(1)
};
/* Final, time limit exceeding
    TC => O(n)
    SC => O(1) 
*/

const containsDuplicateOptimized = function (nums) {
    const newNums = Array.from(new Set(nums)); // TC -> O(n)

    if (newNums.length === nums.length) {
        return false; // SC -> O(1)
    } else {
        return true; // SC -> O(1)
    }
};
/* Final,
    TC => O(n)
    SC => O(1) 
*/
