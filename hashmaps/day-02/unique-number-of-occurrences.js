// 1207. Unique Number of Occurrences

const uniqueOccurrences = function (arr) {
    if (arr.length === 0) {
        return false;
    }

    const map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }

    let values = Object.values(map);

    for (let j = 0; j < values.length; j++) {
        for (let k = j + 1; k < values.length; k++) {
            if (values[j] === values[k]) {
                return false;
            }
        }
    }

    return true;
};
