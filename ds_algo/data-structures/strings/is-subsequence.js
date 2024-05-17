// leetcode - 392. Is Subsequence
const isSubsequence = function (s, t) {
    let sIndex = 0;

    for (let val of t) {
        if (sIndex <= s.length && s[sIndex] === val) {
            sIndex++;
        }
    }

    return sIndex === s.length ? true : false;
};

// my code - not optimzed
const isSubsequences = function (s, t) {
    if (s.trim() === "" && t.trim() === "") {
        return true;
    }

    let arrOne = [];
    let arrTwo = [];

    for (let i = 0; i <= s.length - 1; i++) {
        arrOne.push(s[i]);
    }

    for (let j = 0; j <= t.length - 1; j++) {
        if (arrOne.includes(t[j])) {
            arrTwo.push(t[j]);
        }
    }

    return arrOne.length === arrTwo.length ? true : false;
};
