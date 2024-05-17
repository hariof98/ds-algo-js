const findKthLargest = function (nums, k) {
    // in-built sort provides sorting in place
    nums.sort((a, b) => {
        return a - b;
    });

    return nums[nums.length - k];
};

// let product;
// let result = [];

// for (let i = 0; i <= k.length; i++) {
//     product = 1;
//     for (let j = 0; j <= k.length; j++) {
//         if (j !== i) {
//             product = product * k[j];
//         }
//     }

//     result.push(product);
// }

// return result;
