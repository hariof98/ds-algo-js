// 22. Generate Parentheses
// Backtracking Algorithm

const generateParenthesis = function (n) {
    if (n === 0) {
        return [];
    }

    if (n === 1) {
        return ["()"];
    }

    let result = [];

    const backTracking = (char, open, close) => {
        if (char.length === n * 2) {
            result.push(char);
            return;
        }

        if (open < n) {
            backTracking(char + "(", open + 1, close);
        }

        if (close < open) {
            backTracking(char + ")", open, close + 1);
        }
    };

    backTracking("", 0, 0);

    return result;
};
