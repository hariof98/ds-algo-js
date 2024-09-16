// 153. Find Minimum in Rotated Sorted Array

const findMin = function (nums) {
    if (nums.length === 0) {
        return -1;
    }

    // linear search
    //let min = NUMBER.POSITIVE_INFINITY;
    // let min = nums[0];

    // for(let i = 1; i < nums.length; i++){
    //     if(nums[i] < min){
    //         min = nums[i];
    //     }
    // }

    // return min;

    // binary search
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] > nums[end]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return nums[start];
};
