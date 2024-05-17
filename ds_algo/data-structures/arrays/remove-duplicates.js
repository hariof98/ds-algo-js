// leetcode - 26. Remove Duplicates from Sorted Array
// re-visit
const removeDuplicates = function (n) {
    for (let i = 0; i <= n.length - 1; i++) {
        if (n[i] === n[i + 1]) {
            n.splice(i + 1, 1);
            i--; // in case multiple duplicates are available, we need to check again from start
        }
    }

    return n.length;
};

// to clear all the duplicates
let arr = [2, 2, 2, 3, 4, 3, 1];

for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(i, 1);
            j--;
        }
    }
}
console.log(arr);
