const subsets = function (nums) {
    /* Backtracking algorithm */
    // []
    // [1]
    // [2]
    // [3]
    // [1, 2]
    // [2, 3]
    // [1, 3]
    // [1,2,3]

    const result = [];
    const temp = [];

    const recursiveFunction = (nums, i) => {
        if (i === nums.length) {
            return result.push([...temp]);
        }

        temp.push(nums[i]);
        recursiveFunction(nums, i + 1);
        temp.pop();
        recursiveFunction(nums, i + 1);
    };

    recursiveFunction(nums, 0);

    return result;
};

/*
    result = []
    temp = []

    rec(arr, i){
        if i === arr.length return result.push(...temp);

        temp.push(arr[i]);
        rec(arr, i + 1);
        temp.pop();
        rec(arr, i + 1);
    }

    rec(arr, 0);

    return temp
*/
