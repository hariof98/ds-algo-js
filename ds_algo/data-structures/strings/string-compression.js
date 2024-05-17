const compress = function (chars) {
    const obj1 = {};

    for (let i = 0; i <= chars.length - 1; i++) {
        obj1[chars[i]] = (obj1[chars[i]] ?? 0) + 1;
    }

    //
};

console.log(compress(["a"]));
