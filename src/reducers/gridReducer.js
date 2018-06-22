import {
    REVIVE_CELL,
    DIE_CELL,
    RESET_GRID,
    RANDOM_GRID,
    NEXT_GRID
} from '../actions';

import { computeInitialGrid, computeRandomGrid, computeNextGrid } from '../helpers';

export default function reducer(state = [], action) {  
    const gridSize = state.length;

    switch (action.type) {
        case REVIVE_CELL: {
            const newState = [...state];

            newState[action.row][action.col] = true;

            return newState;
        }

        case DIE_CELL: {
            const newState = [...state];

            newState[action.row][action.col] = false;

            return newState;
        }

        case RESET_GRID: {
            const newState = computeInitialGrid(gridSize);

            return newState;
        }

        case RANDOM_GRID: {
            const newState = computeRandomGrid(gridSize);

            return newState;
        }

        case NEXT_GRID: {
            const newState = computeNextGrid(state);

            return newState;
        }

        default:
            return state;
    }
}
