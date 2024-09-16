// 33. Search in Rotated Sorted Array

// linear search
const searched = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    return -1;
};
