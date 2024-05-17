// leetcode - 238. Product of Array Except Self
const productExceptSelf = function (nums) {
    const arr = [];

    let fromLeft = 1;
    for (let i = 0; i < nums.length; i++) {
        arr[i] = fromLeft;
        fromLeft = fromLeft * nums[i];
    }

    let fromRight = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        arr[j] = arr[j] * fromRight;
        fromRight = fromRight * nums[j];
    }

    return arr;
};

// brute force approach
const productExceptSelfs = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (j !== i) {
                product = product * nums[j];
            }
        }

        result.push(product);
    }

    return result;
};

// const productExceptSelf = function (nums) {
//     if (nums.length <= 1) {
//         return nums;
//     }

//     nums.shift();

//     let product = 1;

//     let arr = [];

//     for (let i = 0; i <= nums.length - 1; i++) {
//         product = product * nums[i];
//     }

//     const recursive = (array, left, right) => {
//         if (left === right) {
//             return;
//         }

//         arr.push(array[left] * array[right]);
//         recursive(array, left, right - 1);

//         if (arr.length < nums.length) {
//             recursive(array, 1, nums.length - 1);
//         } else {
//             return;
//         }
//     };

//     recursive(nums, 0, nums.length - 1); // 1,0,-3,3

//     arr.sort((a, b) => {
//         return b - a;
//     });

//     arr.unshift(product);

//     return arr;
// };

/*
    nums[] !== 0
    product;
*/
