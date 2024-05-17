// leetcode - 20. Valid Parentheses

// the same problem is also solved with stack data structure
const isValid = function (s) {
    // s -> ()[]{}
    // } -> return false
    // { -> store in an array
    // 2nd element -> if its a close bracket -> similar to the previous open bracket
    // if yes -> pop it out of array
    // if not -> return false

    if (s.length <= 1) {
        return false;
    }

    let array = [];

    for (let i = 0; i <= s.length - 1; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            array.push(s[i]);
        } else {
            if (i === 0) {
                return false;
            }

            const poppedElement = array[array.length - 1];

            if ((s[i] === ")" && poppedElement === "(") || (s[i] === "}" && poppedElement === "{") || (s[i] === "]" && poppedElement === "[")) {
                array.pop();
            } else {
                return false;
            }
        }
    }

    if (array.length !== 0) {
        return false;
    } else {
        return true;
    }
};
