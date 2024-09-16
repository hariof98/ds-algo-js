// 198. House Robber

const rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    if (nums.length === 2) {
        return Math.max(...nums);
    }

    // let even = 0;
    // let odd = 0;

    // for(let i = 0; i < nums.length; i++){
    //     if(i % 2 === 0){
    //         even += nums[i];
    //     }
    //     else{
    //         odd += nums[i];
    //     }
    // }

    // return Math.max(even, odd);

    let max1 = 0;
    let max2 = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = max1;
        max1 = Math.max(max1, max2 + nums[i]);
        max2 = temp;
    }

    return max1;
};
