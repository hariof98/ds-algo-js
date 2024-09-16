// 58. Length of Last Word

const lengthOfLastWord = function (s) {
    if (s.length === 0) {
        return 0;
    }

    const arr = s.trim().split(" ").reverse();
    return arr[0].length;
};
