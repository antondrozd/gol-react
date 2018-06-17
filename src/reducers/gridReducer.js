import { REVIVE_CELL, DIE_CELL } from '../actions';

export default function reducer(state = [], action) {
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

        default:
            return state;
    }
}
