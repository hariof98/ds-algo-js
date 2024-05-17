// letcode - 46. Permutations
/* Backtracking algorithm with recursion */
const permute = function (nums) {
    const result = [];
    const temp = [];

    const recursive = (array, i) => {
        if (i === array.length) {
            return result.push([...temp]);
        }

        for (let j = i; j < array.length; j++) {
            [array[i], array[j]] = [array[j], array[i]];
            temp.push(array[i]);
            recursive(array, i + 1);
            temp.pop();
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    recursive(nums, 0);

    return result;
};
