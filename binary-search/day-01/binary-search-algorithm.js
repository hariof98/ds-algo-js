const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === target) {
            return middle;
        } else if (arr[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
};

// arr -> [1,2,3,4,5,6,7,8,9]
// target -> 7

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
