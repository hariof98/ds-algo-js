// 189. Rotate Array

const rotate = function (nums, k) {
    if (nums.length === 0) {
        return nums;
    }

    if (k > nums.length) {
        k = k % nums.length;
    }

    // for(let i = 0; i < k; i++){
    //     const popped = nums.pop();
    //     nums.unshift(popped);
    // }

    // const spliced = nums.splice(nums.length - k, k);
    // nums.unshift(...spliced);

    // rotate all elements in the array
    rotateArray(nums, 0, nums.length - 1);

    // sort first k elements
    rotateArray(nums, 0, k - 1);

    // sort the rest
    rotateArray(nums, k, nums.length - 1);

    function rotateArray(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;

            start++;
            end--;
        }
    }

    return nums;
};
