import React from 'react';

export default function Play({ onClick }) {
    return (
        <button id="play-button" className="material-icons" onClick={onClick}>
            play_arrow
        </button>
    );
}
