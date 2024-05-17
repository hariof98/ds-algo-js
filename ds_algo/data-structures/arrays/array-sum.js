const arraySum = function (nums) {
    // return nums.reduce((prev, next) => {
    //     let sum = prev + next;
    //     return sum;
    // }, 0);

    let sum = 0;

    for (let i = 0; i <= nums.length - 1; i++) {
        sum = sum + nums[i];
    }

    return sum;
};

console.log(arraySum([1, 4, 2, 1, 4]));
