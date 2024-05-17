// re-visit
const reverse = (str) => {
    return str.toString().split("").reverse().join("");
};

const reversedArr = [];

const reverseRecursively = (str) => {
    const arr = str.split("");

    if (arr.length !== 0) {
        const newElement = arr.splice(arr.length - 1, 1);
        reversedArr.push(newElement);

        reverseRecursively(arr.join(""));
    }

    return reversedArr.join("");
};

console.log(reverseRecursively("hello"));
