// 46. Permutations

const permute = function (nums) {
    if (nums.length === 0) {
        return [];
    }

    let temp = [];
    let result = [];

    const recursive = (arr, i) => {
        if (i === arr.length) {
            result.push([...temp]);
            return;
        }

        for (let j = i; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            temp.push(arr[i]);
            recursive(arr, i + 1);
            temp.pop();
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    };

    recursive(nums, 0);

    return result;
};
