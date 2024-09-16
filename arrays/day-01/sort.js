// 912. Sort an Array

const sortArray = function (nums) {
    if (nums.length <= 1) {
        return nums;
    }

    // return nums.sort((a, b) => {
    //     return a - b;
    // });

    let left = [];
    let right = [];
    let pivot = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...sortArray(left), pivot, ...sortArray(right)];
};
