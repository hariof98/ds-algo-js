// 50. Pow(x, n)

const myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }

    // for handling -ve cases
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // let result = 1;

    // for(let i = 0; i < n; i++){
    //     result *= x;
    // }

    // return result;

    const recursive = (x, n) => {
        if (n === 0) {
            return 1;
        }

        if (n % 2 === 0) {
            // even
            const val = recursive(x, n / 2);
            return val * val;
        } else {
            return x * recursive(x, n - 1);
        }
    };

    return recursive(x, n);
};
