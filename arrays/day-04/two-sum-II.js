// 167. Two Sum II - Input Array Is Sorted

const twoSum = function (numbers, target) {
    if (numbers.length === 0) {
        return [-1, -1];
    }

    // brute force - not optimized
    // for(let i = 0; i < numbers.length; i++){
    //     for(let j = i + 1; j < numbers.length; j++){
    //         if(numbers[i] + numbers[j] === target){
    //             return [i + 1, j + 1];
    //         }
    //     }
    // }

    // return [-1, -1];

    // using recurssion & two pointers
    const twoPointers = (left, right) => {
        if (left > right) {
            return [-1, -1];
        }

        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        }

        if (sum > target) {
            return twoPointers(left, right - 1);
        } else {
            return twoPointers(left + 1, right);
        }
    };

    return twoPointers(0, numbers.length - 1);
};
