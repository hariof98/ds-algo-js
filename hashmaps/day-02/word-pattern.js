// 290. Word Pattern

const wordPattern = function (pattern, s) {
    let patternArr = pattern.split("");
    let sArr = s.split(" ");

    if (patternArr.length !== sArr.length) {
        return false;
    }

    let patternArrUnique = Array.from(new Set(patternArr));
    let sArrUnique = Array.from(new Set(sArr));

    if (patternArrUnique.length !== sArrUnique.length) {
        return false;
    }

    let map = {};

    for (let i = 0; i < patternArr.length; i++) {
        if (map[patternArr[i]] && map[patternArr[i]] !== sArr[i]) {
            return false;
        }

        map[patternArr[i]] = sArr[i];
    }

    return true;
};
