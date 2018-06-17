export const REVIVE_CELL = 'REVIVE_CELL';
export const DIE_CELL = 'DIE_CELL';

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