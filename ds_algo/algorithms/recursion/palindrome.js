const palindromeNormal = (x) => {
    let oldX = x.toString();

    let newX = x.toString().split("").reverse().join("");

    if (oldX === newX) {
        return true;
    } else {
        return false;
    }
};

const palindromeOneLiner = (x) => {
    return x.toString().split("").length <= 0 ? false : x.toString() === x.toString().split("").reverse().join("") ? true : false;
};

console.log(palindromeOneLiner(1112));
