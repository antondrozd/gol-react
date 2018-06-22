import { connect } from 'react-redux';

import { nextGrid } from '../actions/gridActions';

import Game from '../Game';

function mapStateToProps(state) {
    return {
        grid: state.grid
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showNextGrid: grid => dispatch(nextGrid(grid))
    };
}

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameContainer;
