import React from 'react';

export default function Randomize(props) {
    return (
        <button
            id="randomize-button"
            className="material-icons"
            onClick={props.onRandomize}
        >
            transform
        </button>
    );
}
