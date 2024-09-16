// 3. Longest Substring Without Repeating Characters
// Sliding Window

const lengthOfLongestSubstring = function (s) {
    if (s.length === 0) {
        return 0;
    }

    let obj = {};

    let count = 0;
    let longestCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (Object.hasOwn(obj, s[i])) {
            longestCount = Math.max(longestCount, count);
            count = 0; // reset the count for the new substring

            i = obj[s[i]]; // reset `i` to the index after the previous occurrence of the current character
            obj = {}; // reset the object to start fresh
        } else {
            count++;
            obj[s[i]] = i; // store the index of the current character
        }
    }

    return Math.max(longestCount, count);
};
