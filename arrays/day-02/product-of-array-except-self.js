// 238. Product of Array Except Self

const productExceptSelf = function (nums) {
    if (nums.length === 0) {
        return nums;
    }

    const result = [];

    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        result[j] *= rightProduct;
        rightProduct *= nums[j];
    }

    return result;
};

// not optimized for large data sets
const productExceptSelfs = function (nums) {
    if (nums.length === 0) {
        return nums;
    }

    const result = [];

    const recursive = (arr, self) => {
        let product = 1;

        for (let i = 0; i < arr.length; i++) {
            if (i !== self) {
                product = product * arr[i];
            }
        }

        result.push(product);

        if (result.length === nums.length) {
            return result;
        }

        return recursive(arr, self + 1);
    };

    return recursive(nums, 0);
};
