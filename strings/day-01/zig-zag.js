// 6. Zigzag Conversion

const convert = function (s, numRows) {
    if (numRows <= 1) {
        return s;
    }

    let goingDown = false;
    let start = 0;
    let result = Array(numRows).fill("");

    for (let i = 0; i < s.length; i++) {
        result[start] += s[i];

        if (start === 0 || start === numRows - 1) {
            goingDown = !goingDown;
        }

        start += goingDown ? 1 : -1;
    }

    return result.join("");
};
