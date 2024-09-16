// 242. Valid Anagram

const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    //return s.split("").sort().join("") === t.split("").sort().join("");

    let map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
    }

    for (let letter of t) {
        if (!map[letter]) {
            return false;
        }

        map[letter] = map[letter] - 1;
    }

    return true;
};
