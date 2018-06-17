function computeInitialGrid(size) {
    let grid = [];

    for (let row = 0; row < size; row++) {
        grid[row] = [];

        for (let col = 0; col < size; col++) {
            grid[row][col] = false;
        }
    }

    return grid;
}

const state = {
    grid: computeInitialGrid(36)
};

export default state;
