// 125. Valid Palindrome

const isPalindrome = function (s) {
    if (!s || s === "") {
        return false;
    }

    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-zA-Z0-9]/)) {
            // to check that the string contains only letters and numbers
            result = result.trim() + s[i].toLowerCase();
        }
    }

    return result === result.split("").reverse().join("");
};
