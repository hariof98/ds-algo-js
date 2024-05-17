// leetcode - 11. Container With Most Water
// two pointer with recursion
const maxArea = (height) => {
    let maxAreaResult = 0;

    const recursiveFunction = (array, left, right) => {
        if (left === right) {
            return;
        }

        let height = Math.min(array[left], array[right]);
        let width = right - left;
        let area = height * width;

        if (area > maxAreaResult) {
            maxAreaResult = area;
        }

        if (array[left] < array[right]) {
            recursiveFunction(array, left + 1, right);
        } else {
            recursiveFunction(array, left, right - 1);
        }
    };

    recursiveFunction(height, 0, height.length - 1);

    return maxAreaResult;
};
