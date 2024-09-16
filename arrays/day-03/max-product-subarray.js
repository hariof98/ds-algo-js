// 152. Maximum Product Subarray

const maxProduct = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    let min = nums[0];
    let max = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // for handling -ve values
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        }

        min = Math.min(nums[i], min * nums[i]);
        max = Math.max(nums[i], max * nums[i]);

        result = Math.max(result, max);
    }

    return result;

    // not optimized
    // let product = Number.NEGATIVE_INFINITY; // for handling zero cases

    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(j - i === 1){
    //             const calculate = nums[i] * nums[j];

    //             if(calculate > product){
    //                 product = calculate;
    //             }
    //         }
    //     }
    // }

    // return product === Number.NEGATIVE_INFINITY ? 0 : product;
};
