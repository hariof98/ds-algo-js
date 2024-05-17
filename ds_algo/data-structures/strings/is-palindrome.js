// leetcode - 125. Valid Palindrome
const isPalindrome = function (s) {
    let string = "";

    for (let i = 0; i <= s.length - 1; i++) {
        if (
            //s[i].match(/[A-Za-Z0-9]/)
            (s.toLowerCase().charCodeAt(i) >= 97 && s.toLowerCase().charCodeAt(i) <= 122) ||
            (s.toLowerCase().charCodeAt(i) >= 48 && s.toLowerCase().charCodeAt(i) <= 57)
        ) {
            string = string.trim() + s[i].toLowerCase();
        }
    }

    return string === string.split("").reverse().join("");
};
