let isPalindrome = (x) => {
    return x < 0 ? false : x.toString() === x.toString().split("").reverse().join("");
};
