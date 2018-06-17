import React from 'react';

export default function Randomize({ onClick }) {
    return (
        <button
            id="randomize-button"
            className="material-icons"
            onClick={onClick}
        >
            transform
        </button>
    );
}
