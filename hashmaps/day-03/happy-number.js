// 202. Happy Number

const isHappy = function (n) {
    let map = {};

    const recursive = (num) => {
        if (map[num]) {
            return false;
        }

        map[num] = map[num] ? map[num] + 1 : 1;

        const arr = num.toString().split("");

        let result = 0;

        for (let i = 0; i < arr.length; i++) {
            result = result + parseInt(arr[i]) * parseInt(arr[i]);
        }

        if (result === 1) {
            return true;
        }

        return recursive(result);
    };

    return recursive(n);
};
