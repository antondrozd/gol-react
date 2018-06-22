import { connect } from 'react-redux';

import { randomGrid } from '../../actions';

import Randomize from '../../components/Controls/Randomize';

function mapDispatchToProps(dispatch) {
    return {
        onRandomize: () => dispatch(randomGrid())
    };
}

const RandomizeContainer = connect(
    null,
    mapDispatchToProps
)(Randomize);

export default RandomizeContainer;
