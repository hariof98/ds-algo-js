// 11. Container With Most Water
// using Recursion

const maxArea = function (height) {
    if (height.length === 0) {
        return 0;
    }

    let maxArea = 0;
    let count = 0;

    const recursive = (arr, left, right) => {
        if (count > arr.length) {
            return;
        }

        count++;

        const h = Math.min(arr[left], arr[right]);
        const w = right - left;
        const area = h * w;

        if (area > maxArea) {
            maxArea = area;
        }

        if (arr[left] < arr[right]) {
            recursive(arr, left + 1, right);
        } else {
            recursive(arr, left, right - 1);
        }
    };

    recursive(height, 0, height.length - 1);

    return maxArea;
};
