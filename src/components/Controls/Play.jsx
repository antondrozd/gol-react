import React from 'react';

export default function Play(props) {
    return (
        <button
            id="play-button"
            className="material-icons"
            onClick={props.onPlay}
        >
            {props.isPlaying ? 'pause' : 'play_arrow'}
        </button>
    );
}
