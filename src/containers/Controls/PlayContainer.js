import { connect } from 'react-redux';

import { nextGrid } from '../../actions';

import Play from '../../components/Controls/Play';

function mapStateToProps(state) {
    return {
        grid: state.grid
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onPlay: grid => dispatch(nextGrid(grid))
    };
}

const PlayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Play);

export default PlayContainer;
