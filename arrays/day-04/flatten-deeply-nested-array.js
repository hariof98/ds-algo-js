// flatten array without in-built methods
const nestedArray = [1, 2, 3, [4, 5, [6, 7, [8]], 9]]; // result = [1,2,3,4,5,6,7,8,9]

let result = [];

const recursive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            recursive(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
};

recursive(nestedArray);

console.log(result);

// 2625. Flatten Deeply Nested Array

const flat = function (arr, n) {
    if (arr.length === 0 || n === 0) {
        return arr;
    }

    let result = [];

    const recursive = (array, count) => {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i]) && count < n) {
                recursive(array[i], count + 1);
            } else {
                result.push(array[i]);
            }
        }
    };

    recursive(arr, 0);

    return result;
};
