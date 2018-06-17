import { connect } from 'react-redux';

import { reviveCell, dieCell } from '../actions';

import Grid from '../components/Grid';

function mapStateToProps(state) {
    return {
        size: state.gridSize,
        cells: state.grid
    };
}

function mapDispatchToProps(dispatch) {
    return {
        reviveCell: (row, col) => dispatch(reviveCell(row, col)),
        dieCell: (row, col) => dispatch(dieCell(row, col))
    };
}

const GridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);

export default GridContainer;
