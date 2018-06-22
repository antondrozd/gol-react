export function computeInitialGrid(size) {
    let grid = [];

    for (let row = 0; row < size; row++) {
        grid[row] = [];

        for (let col = 0; col < size; col++) {
            grid[row][col] = false;
        }
    }

    return grid;
}

export function computeRandomGrid(size) {
    let grid = [];

    for (let row = 0; row < size; row++) {
        grid[row] = [];

        for (let col = 0; col < size; col++) {
            if (Math.random() < 0.5) {
                grid[row][col] = false;
            } else {
                grid[row][col] = true;
            }
        }
    }

    return grid;
}

export function computeNextGrid(grid) {
    const size = grid.length;

    let nextGrid = computeInitialGrid(size);

    function countAliveNeighbors(row, col) {
        let count = 0;

        for (let r = -1; r <= 1; r++) {
            if (grid[row + r] === undefined) continue;

            for (let c = -1; c <= 1; c++) {
                if (r === 0 && c === 0) continue;

                if (grid[row + r][col + c]) {
                    count += 1;
                }
            }
        }

        return count;
    }

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const aliveNeighbors = countAliveNeighbors(row, col);

            if (
                (grid[row][col] && aliveNeighbors === 2) ||
                aliveNeighbors === 3
            ) {
                nextGrid[row][col] = true;
            }
        }
    }

    return nextGrid;
}
