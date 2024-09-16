// 34. Find First and Last Position of Element in Sorted Array

const searchRange = function (nums, target) {
    if (nums.length === 0) {
        return [-1, -1];
    }

    // let result = [];

    // let start = -1;
    // let end = -1;

    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === target){
    //         if(start < 0){
    //             start = i;
    //         }
    //         else{
    //             end = i;
    //         }
    //     }
    // }

    // return start >= 0 && end <=0 ? [start, start] : [start, end];

    // binary search
    return [findLeftMost(nums, target), findRightMost(nums, target)];
};

const findLeftMost = (nums, target) => {
    let left = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            left = middle;
            end = middle - 1;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return left;
};

const findRightMost = (nums, target) => {
    let right = -1;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            right = middle;
            start = middle + 1;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return right;
};
