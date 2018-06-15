import React from 'react';

export default function Reset({ onClick }) {
    return (
        <button id="reset-button" className="material-icons" onClick={onClick}>
            replay
        </button>
    );
}
