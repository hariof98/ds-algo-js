// 200. Number of Islands

const numIslands = function (grid) {
    if (grid.length === 0) {
        return 0;
    }

    let numOfIslands = 0;

    const dfs = (row, col) => {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === "0") {
            return;
        }

        // marking visited lands
        grid[row][col] = "0";

        // up
        dfs(row - 1, col);

        // down
        dfs(row + 1, col);

        // right
        dfs(row, col - 1);

        // left
        dfs(row, col + 1);
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // land
            if (grid[i][j] === "1") {
                numOfIslands++;

                dfs(i, j);
            }
        }
    }

    return numOfIslands;
};
