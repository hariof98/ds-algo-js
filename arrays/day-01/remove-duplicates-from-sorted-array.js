// 80. Remove Duplicates from Sorted Array II

const removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return nums;
    }

    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1;

        if (obj[nums[i]] > 2) {
            nums.splice(i, 1);
            i--; // important -> make sure to decrement to properly remove elements

            obj[nums[i]] = obj[nums[i]] - 1;
        }
    }
};
