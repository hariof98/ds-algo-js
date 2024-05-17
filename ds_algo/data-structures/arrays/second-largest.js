// leetcode - 1796. Second Largest Digit in a String
const secondHighest = function (s) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i <= s.length; i++) {
        if (parseInt(s[i]) !== NaN) {
            if (parseInt(s[i]) > largest) {
                secondLargest = largest;
                largest = parseInt(s[i]);
            } else if (parseInt(s[i]) !== largest && parseInt(s[i]) > secondLargest) {
                secondLargest = parseInt(s[i]);
            }
        }
    }

    return secondLargest !== Number.NEGATIVE_INFINITY ? secondLargest : -1;
};

const secondHighests = function (s) {
    const arr = [];

    s.split("")
        .map((data) => {
            return parseInt(data);
        })
        .forEach((value) => {
            if (value >= 0) {
                arr.push(value);
            }
        });

    const x = Array.from(new Set(arr)).sort((a, b) => {
        return b - a;
    });

    return x.length > 1 ? x[1] : -1;
};
