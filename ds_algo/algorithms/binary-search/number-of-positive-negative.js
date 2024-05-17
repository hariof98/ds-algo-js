// binary search
// const maximumCount = function (nums) {
//     return Math.max(nagativeCalc(), positiveCalc());
// };

// const positiveCalc = (nums) => {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let middle = Math.ceil((start + end) / 2);

//         if (nums[middle] > 0) {
//             end = middle;
//         } else {
//             start = middle - 1;
//         }
//     }
// };

// const nagativeCalc = (nums) => {
//     let start = 0;
//     let end = nums.length - 1;

//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);

//         if (nums[middle] < 0) {
//             start = middle;
//         } else {
//             end = middle + 1;
//         }
//     }
// };

// linear search
const maximumCounts = function (nums) {
    let positiveCount = 0;
    let negativeCount = 0;

    // TC -> O(n)
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] > 0) {
            positiveCount++;
        } else if (nums[i] < 0) {
            negativeCount++;
        }
    }

    return Math.max(positiveCount, negativeCount); // SC -> O(1)
};

// TC -> O(n)
// SC -> O(1)
