// 128. Longest Consecutive Sequence

const longestConsecutive = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return 1;
    }

    // sort
    nums.sort((a, b) => {
        return a - b;
    });

    // remove duplicates
    const num = Array.from(new Set(nums));

    let count = 1;
    let longest = 1;

    let start = num[0];

    for (let i = 1; i < num.length; i++) {
        if (num[i] - start === 1) {
            count++;
        } else {
            longest = Math.max(longest, count);
            count = 1;
        }

        start = num[i];
    }

    return Math.max(longest, count);
};
