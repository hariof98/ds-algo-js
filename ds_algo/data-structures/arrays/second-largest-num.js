// Second largest number
// re-visit
const secondLargest = () => {
    const arr = Array.from(new Set([12, 35, 1, 10, 34, 1])); // Time Complexity => O(n)

    const finalArr = arr.sort((a, b) => {
        // in-built sorting algorithm in JS has time complexity of O(nlogn)
        return b - a;
    });

    return finalArr.length > 1 ? finalArr[1] : -1; // Space Complexity => O(1)
};
/* Final,
    TC -> O(nlogn) -> the worst case
    SC -> O(1)
*/

const secondLargestOptm = () => {
    const arr = [12, 35, 1, 10, 34, 1];

    let largest = Number.NEGATIVE_INFINITY; // 35
    let secondLargest = Number.NEGATIVE_INFINITY; // 34

    for (let i = 0; i < arr.length; i++) {
        // Time Complexity => O(n)
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    console.log(secondLargest); // Space Complexity => O(1)
};
/* Final,
    TC -> O(n) 
    SC -> O(1)
*/

/*
const secondHigh = (n) => {
    let high = Number.NEGATIVE_INFINITY; // 23
    let secondHighest = Number.NEGATIVE_INFINITY; // 12

    for (let i = 0; i <= n.length; i++) {
        if (n[i] > high) {
            secondHighest = high;
            high = n[i];
        } else if (n[i] !== high && n[i] > secondHighest) {
            secondHighest = n[i];
        }
    }

    console.log(secondHighest);
    return secondHighest;
};

secondHigh([23, 12, 2, 3, 10]);
*/
