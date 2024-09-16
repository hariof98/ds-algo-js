// 48. Rotate Image

const rotate = function (matrix) {
    if (matrix.length === 0) {
        return -1;
    }

    let temp;

    for (let i = 0; i < matrix.length; i++) {
        // i + 1 is because 0, 0 swap will result in no change
        for (let j = i + 1; j < matrix[i].length; j++) {
            // in-place
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i]; // performing a transpose (converting rows to column)
            matrix[j][i] = temp;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
};
