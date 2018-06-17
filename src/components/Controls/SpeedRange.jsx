import React from 'react';

export default function SpeedRange({ onChange }) {
    return (
        <input
            id="speed-slider"
            type="range"
            min="100"
            max="1000"
            step="50"
            // dafaultValue={100}
            onChange={onChange}
        />
    );
}
