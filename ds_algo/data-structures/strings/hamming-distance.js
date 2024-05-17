const hammingDistances = function (x, y) {
    if (x.length !== y.length) {
        return "not hamming distance";
    }

    let count = 0;

    for (let i = 0; i <= x.length - 1; i++) {
        if (x[i] !== y[i]) {
            count++;
        }
    }

    return count;
};

//console.log(hammingDistances("hello", "hello"));

// 10.toString() => converts integer to string
// 10.toString(2) => if we pass 2, then it gives binary equivalent of the number

//let a = 10;
//console.log(a.toString());
//console.log(a.toString(2));

//let a = [1, 2, 3];
//console.log(a.indexOf(1)); // gives 0, if not present, returns -1

//let b = "text";
//console.log(b.charAt(2)); // gives x
//console.log(b.indexOf("x")); // gives 2

// string comparison
//let c = "apple";
//let d = "orange";
//console.log(c.localeCompare(d)); // returns - 1 if the stings are not the same, returns 0 if the strings are same.

// leetcode - 461. Hamming Distance
const hammingDistance = function (x, y) {
    // since x and y are single integers, we can convert them to it's binary equivalent
    x = x.toString(2);
    y = y.toString(2);

    // for caluculating hamming distance, both the parameters must be of same length
    if (x.length < y.length) {
        while (x.length !== y.length) {
            x = "0" + x;
        }
    }

    if (y.length < x.length) {
        while (x.length !== y.length) {
            y = "0" + y;
        }
    }

    let count = 0;

    for (let i = 0; i <= x.length; i++) {
        if (x[i] !== y[i]) {
            count++;
        }
    }

    return count;
};

console.log(hammingDistance(1, 4));
