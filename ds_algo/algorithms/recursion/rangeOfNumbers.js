let arr = []; // [0, 5, 1, 4, 2, 3]

const rangeOfNumbers = (start, end) => {
    arr.push(start, end);

    if (arr.length <= arr[1]) {
        return rangeOfNumbers(start + 1, end - 1);
    } else {
        return arr;
    }
};

console.log(rangeOfNumbers(0, 5));
