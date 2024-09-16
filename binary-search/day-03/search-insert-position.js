// 35. Search Insert Position

const searchInsert = function (nums, target) {
    if (nums.length === 0) {
        return -1;
    }

    // linear search
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] === target){
    //         return i;
    //     }

    //     if(nums[i] > target){
    //         return i;
    //     }
    // }

    // return nums.length;

    // binary search
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return start;
};
