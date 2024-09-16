// 20. Valid Parentheses

const isValid = function (s) {
    if (s.length <= 1) {
        return false;
    }

    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            result.push(s[i]);
        } else {
            if (i === 0) {
                return false;
            }

            const getLastAdded = result[result.length - 1];

            if ((s[i] === ")" && getLastAdded === "(") || (s[i] === "}" && getLastAdded === "{") || (s[i] === "]" && getLastAdded === "[")) {
                result.pop();
            } else {
                return false;
            }
        }
    }

    return result.length > 0 ? false : true;
};
