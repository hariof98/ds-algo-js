// 1796. Second Largest Digit in a String

const secondHighest = function (s) {
    if (s.length === 0) {
        return -1;
    }

    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < s.length; i++) {
        const num = parseInt(s[i]);

        if (num !== NaN) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num !== largest) {
                secondLargest = num;
            }
        }
    }

    return secondLargest === Number.NEGATIVE_INFINITY ? -1 : secondLargest;
};
