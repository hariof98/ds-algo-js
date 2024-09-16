// 49. Group Anagrams

const groupAnagrams = function (strs) {
    if (strs.length === 0) {
        return [];
    }

    let map = {};

    for (let i = 0; i < strs.length; i++) {
        const sort = strs[i].split("").sort().join("");

        map[sort] = map[sort] ? [strs[i], ...map[sort]] : [strs[i]];
    }

    return Object.values(map);
};

// old code -> (using recurssion & two pointers approach) - Bad Time Complexity BTW
// const groupAnagramss = function (strs) {
//     if (strs.length <= 1) {
//         return [strs];
//     }

//     let result = [];
//     let final = [];

//     const recursive = (array, left, right) => {
//         if (left > right) {
//             return;
//         }

//         const leftSort = array[left].split("").sort().join("");
//         const rightSort = array[right].split("").sort().join("");

//         // console.log(leftSort);
//         // console.log(rightSort);
//         // console.log('--------');

//         if (leftSort === rightSort) {
//             const popped = array.splice(right, 1);
//             result.push(...popped);

//             if (right !== left) {
//                 recursive(array, left, right - 1);
//             } else {
//                 final.push([...result]);
//                 result = [];
//                 // console.log(array);
//                 // console.log(left);
//                 // console.log(right);
//                 recursive(array, left, array.length - 1);
//             }
//         } else {
//             recursive(array, left, right - 1);
//         }
//     };

//     recursive(strs, 0, strs.length - 1);

//     // console.log(final);
//     return final;
// };

// console.log(groupAnagrams(["listen", "silent", "enlist", "hello", "world", "dog", "god"]));
