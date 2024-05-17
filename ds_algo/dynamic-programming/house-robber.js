const rob = function (nums) {
    if (nums.length <= 0) {
        return 0;
    }

    if (nums.length <= 2) {
        return Math.max(...nums);
    }

    let evenHouse = nums[0]; // SC -> O(1)
    let oddHouse = Math.max(nums[1], evenHouse); // SC -> O(1)

    //     TC -> O(n)
    for (let i = 2; i <= nums.length - 1; i++) {
        if (i % 2 === 0) {
            evenHouse = Math.max(evenHouse + nums[i], oddHouse);
        } else {
            oddHouse = Math.max(oddHouse + nums[i], evenHouse);
        }
    }

    return Math.max(oddHouse, evenHouse); // SC -> O(1)
};
/* Final,
    TC -> O(n)
    SC -> O(1)
*/
