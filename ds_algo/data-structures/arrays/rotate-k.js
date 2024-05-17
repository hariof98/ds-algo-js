// leetcode - 189. Rotate Array
const rotatess = function (nums, k) {
    const arr = nums;

    if (k !== arr.length) {
        // to avoid unwated rotations
        if (k > arr.length) {
            k = k % arr.length;
        }

        for (let i = 1; i <= k; i++) {
            const poppedElement = arr.pop();
            arr.unshift(poppedElement);
        }
    }

    return arr;
};
/* Final, The time complexity is very poor while execution
    TC -> O(n) 
    SC -> O(1)
*/

const rotate = (nums, k) => {
    // [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]

    if (nums.length !== k) {
        if (k > nums.length) {
            k = k % nums.length;
        }

        // rotate the entire array
        rotateFunction(nums, 0, nums.length - 1);

        // sort the k elements in the array
        rotateFunction(nums, 0, k - 1);

        // sort the rest of the elements in the array
        rotateFunction(nums, k, nums.length - 1);
    }

    return nums; // SC => O(n)
};

const rotateFunction = (arr, start, end) => {
    while (start < end) {
        // TC => O(n)
        const val = arr[start];
        arr[start] = arr[end];
        arr[end] = val;

        start++;
        end--;
    }
};
/* Final, 
    TC -> O(n) 
    SC -> O(1)
*/

const rotates = (nums, k) => {
    // [1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]

    if (nums.length !== k) {
        if (k > nums.length) {
            k = k % nums.length;
        }

        const spliceArray = nums.splice(nums.length - k, k); // TC => O(n)
        nums.unshift(...spliceArray); // TC => O(n)
    }

    return nums; // SC => O(n)
};
// 5 % 3 => 2
// [1,3,4] => [4,1,3] => [3,4,1] => [1,3,4] => [4,1,3] => [3,4,1]
// [1,3,4] => [4,1,3] => [3,4,1]

/* Final, 
    TC -> O(n) 
    SC -> O(1)
*/

//console.log(rotates([1, 2], 5));
