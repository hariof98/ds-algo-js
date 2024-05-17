/* Binary Search
    - Works only with sorted array
    - Divides the array into two
    - Find the mid element to divide the array
    - If target value is greater than mid element value, move right, else left
    - continue the process until the target is found 
*/

const search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
};

/* 
    TC -> O(log n) -> much better than O(n). Because, in every iteration we are exponentially cutting the array size, 
    that will reduce the number of operations.

    SC -> O(1)
*/
