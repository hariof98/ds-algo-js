// 228. Summary Ranges

const summaryRanges = function (nums) {
    if (nums.length === 0) {
        return [];
    }

    let arr = [];

    let start = nums[0];

    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            // checking for consecutive elements
            if (start === nums[i - 1]) {
                arr.push(`${start}`);
            } else {
                arr.push(`${start}->${nums[i - 1]}`);
            }

            start = nums[i];
        }
    }

    return arr;
};
