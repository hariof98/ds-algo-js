// 35. Search Insert Position

// linear search
const searchInserts = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > target) {
            return j;
        }
    }

    // return last elment if none matches
    return nums.length;
};

// binary search
const searchInsert = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return start;
};
