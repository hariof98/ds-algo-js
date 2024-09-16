// 153. Find Minimum in Rotated Sorted Array

// linear search
const findMins = function (nums) {
    if (nums.length === 0) {
        return -1;
    }

    let min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }

    return min;
};

// binary search
const findMin = function (nums) {
    if (nums.length === 0) {
        return -1;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] > nums[end]) {
            // because of rotation, the smaller elements will be on the leftmost side
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return nums[start];
};
