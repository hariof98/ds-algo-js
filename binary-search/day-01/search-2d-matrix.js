// 74. Search a 2D Matrix

// linear search
const searchMatrixx = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }

    return false;
};

// binary search
const searchMatrix = function (matrix, target) {
    if (matrix.length === 0) {
        return false;
    }

    for (let i = 0; i < matrix.length; i++) {
        let start = 0;
        let end = matrix[i].length - 1;

        while (start <= end) {
            let middle = Math.floor((start + end) / 2);

            if (matrix[i][middle] === target) {
                return true;
            } else if (matrix[i][middle] < target) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
    }

    return false;
};
