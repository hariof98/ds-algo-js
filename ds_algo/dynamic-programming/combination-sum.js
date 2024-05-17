/* Note - In dynamic programming implementations like this one, where we are trying to reach a specific target, 
we typically initialize the dynamic programming array with a size of target + 1. 
This is because we want to include the possibility of reaching the target itself.

Consider this: if the target is 4, and we initialize the array with size 4 (target), 
we only account for reaching the sums 0, 1, 2, and 3. We wouldn't be accounting for reaching the target sum of 4 itself.

By initializing the array with size target + 1, we ensure that the last index of the array represents the target sum. 
Therefore, we cover all possible sums from 0 to the target. */

const combinationSum4 = (nums, target) => {
    let array = Array(target + 1).fill(0); // refer the note above

    array[0] = 1;

    for (let i = 1; i <= target; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if (i >= nums[j]) {
                array[i] = array[i] + array[i + nums[j]]; // refer the note below
            }
        }
    }

    return array[target];
};

console.log(combinationSum4([1, 2, 3], 4));

/* Note - array[i - nums[j]]: This part retrieves the number of combinations found for 
   the i - nums[j]. This is important because we are considering the contribution of the 
   current number nums[j] to the target sum i. By subtracting nums[j] from i, 
   we get the remaining sum that we need to find combinations for. */
