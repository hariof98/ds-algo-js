// 14. Longest Common Prefix

const longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }

    let start = strs[0];

    let result = ""; // f

    for (let i = 0; i < start.length; i++) {
        // flower
        for (let j = 1; j < strs.length; j++) {
            if (start[i] !== strs[j][i]) {
                return result;
            }
        }

        result = result + start[i];
    }

    return result;
};
