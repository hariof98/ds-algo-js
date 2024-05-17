// MY CODE - time limit exceeding
const maxSlidingWindow = function (nums, k) {
    if (nums.length < k) {
        return;
    }

    const result = [];

    for (let i = 0; i <= nums.length - k; i++) {
        let threeSet = nums.slice(i, i + k);
        let max = Math.max(...threeSet);
        result.push(max);
    }

    return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
