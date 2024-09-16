// 33. Search in Rotated Sorted Array

const search = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    // linear search
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === target){
    //         return i;
    //     }
    // }

    // binary search
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        } else if (nums[start] <= nums[middle]) {
            if (nums[start] <= target && target <= nums[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        } else {
            if (nums[middle] <= target && target <= nums[end]) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    }

    return -1;
};
