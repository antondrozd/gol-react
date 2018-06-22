export const REVIVE_CELL = 'REVIVE_CELL';
export const DIE_CELL = 'DIE_CELL';
export const RESET_GRID = 'RESET_GRID';
export const RANDOM_GRID = 'RANDOM_GRID';
export const NEXT_GRID = 'NEXT_GRID';

export function reviveCell(row, col) {
    return {
        type: REVIVE_CELL,
        row,
        col
    };
}

export function dieCell(row, col) {
    return {
        type: DIE_CELL,
        row,
        col
    };
}

export function resetGrid() {
    return {
        type: RESET_GRID
    };
}

export function randomGrid() {
    return {
        type: RANDOM_GRID
    };
}

export function nextGrid() {
    return {
        type: NEXT_GRID
    };
}
