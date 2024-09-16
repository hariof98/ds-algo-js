// 34. Find First and Last Position of Element in Sorted Array

const searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }

    return [findLeftMost(nums, target), findRightMost(nums, target)];
};

const findLeftMost = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let leftMost = -1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            leftMost = middle;
            end = middle - 1;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return leftMost;
};

const findRightMost = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    let rightMost = -1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            rightMost = middle;
            start = middle + 1;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return rightMost;
};
