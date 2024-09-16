// 219. Contains Duplicate II

const containsNearbyDuplicate = function (nums, k) {
    if (nums.length === 0) {
        return false;
    }

    // not optimized
    // for(let i = 0; i < nums.length; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] === nums[j]){
    //             const diff = j - i;

    //             if(diff <= k){
    //                 return true;
    //             }
    //         }
    //     }
    // }

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (Object.hasOwn(map, nums[i])) {
            // map[nums[i]] won't work for 0, since it's considered falsy

            const calculate = i - map[nums[i]];

            if (calculate <= k) {
                return true;
            }
        }

        map[nums[i]] = i;
    }

    return false;
};
