import React from 'react';

export default function Reset(props) {
    return (
        <button
            id="reset-button"
            className="material-icons"
            onClick={props.onReset}
        >
            replay
        </button>
    );
}
