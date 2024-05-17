/* [0,1] add last two => 1
   [0,1,1] add last two => 2
   [0,1,1,2] add last two => 3
   [0,1,1,2,3] add last two => 5
   ...
*/

// we will get the index as input, we need to return the element for that index

// normal approach
const fibonaccii = (n) => {
    if (n <= 1) {
        return n;
    }

    const arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]); // arr[4] + arr[3] => 3 + 2
    }

    return arr[n];
};

// recursive approach
const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));
