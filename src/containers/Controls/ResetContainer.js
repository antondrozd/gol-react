import { connect } from 'react-redux';

import { resetGrid } from '../../actions';

import Reset from '../../components/Controls/Reset';

function mapDispatchToProps(dispatch) {
    return {
        onReset: () => dispatch(resetGrid())
    };
}

const ResetContainer = connect(
    null,
    mapDispatchToProps
)(Reset);

export default ResetContainer;
