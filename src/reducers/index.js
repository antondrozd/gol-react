import { combineReducers } from 'redux';

import gridReducer from './gridReducer';

const reducer = combineReducers({
    grid: gridReducer
});

export default reducer;